# Obsidian-like Graph View Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the graph view to use "The Constellation" visual style (organic, floating physics, curved links) and fix the broken URL navigation by implementing proper slugification.

**Architecture:** 
- **Plugin Level:** Use a robust slugification helper in the build-time plugin to ensure node URLs match Docusaurus production routes.
- **Frontend Level:** Update the D3 canvas simulation with lower friction, quadratic curves for links, and a globalAlpha-based spotlight transition for hover effects.

**Tech Stack:** JavaScript (Node.js/React), D3.js (v7), Docusaurus Plugin API.

---

### Task 1: Slugification Fix (Plugin)

**Files:**
- Modify: `src/plugins/docusaurus-plugin-graph-view.js`

- [ ] **Step 1: Add slugify helper and update URL generation logic**
Modify the plugin to correctly handle document slugs.

```javascript
// Add this helper at the top or inside the function
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // handle accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Inside files.forEach loop, replace url generation:
let url;
if (parsed.data.slug) {
  url = parsed.data.slug.startsWith('/') ? parsed.data.slug : `/docs/${parsed.data.slug}`;
} else if (id === 'intro') {
  url = '/docs/intro';
} else {
  // Slugify each part of the path
  const slugifiedParts = id.split('/').map(slugify);
  url = `/docs/${slugifiedParts.join('/')}`;
}
// Remove trailing /index if it exists
url = url.replace(/\/index$/, '');
```

- [ ] **Step 2: Run build to verify graph-data.json**
Run: `npm run build`
Verify: `static/graph-data.json` now contains URLs like `/docs/naked-economics` instead of `/docs/Naked Economics`.

- [ ] **Step 3: Commit**
```bash
git add src/plugins/docusaurus-plugin-graph-view.js
git commit -m "fix(graph): implement proper slugification for document URLs"
```

---

### Task 2: "The Constellation" Animation & Physics (Canvas)

**Files:**
- Modify: `src/pages/graph/GraphCanvas.js`

- [ ] **Step 1: Update D3 simulation parameters for "Constellation" feel**
Lower the decay rates to allow for continuous gentle movement.

```javascript
// In GraphCanvas.js useEffect
const simulation = d3.forceSimulation(nodes)
  .velocityDecay(0.15) // Lower friction
  .alphaDecay(0.01)    // Settle slower
  .force('link', d3.forceLink(links).id(d => d.id).distance(90))
  .force('charge', d3.forceManyBody().strength(-200))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collide', d3.forceCollide().radius(d => getRadius(d) + 12));
```

- [ ] **Step 2: Implement Quadratic Curve links**
Update the `draw()` function to use curves.

```javascript
// Replace link drawing section in draw():
context.beginPath();
context.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
links.forEach(d => {
  context.moveTo(d.source.x, d.source.y);
  // Simple straight line or quadratic curve? Let's go with slightly curved
  // Using mid-point for quadratic curve to create organic "constellation" lines
  const midX = (d.source.x + d.target.x) / 2;
  const midY = (d.source.y + d.target.y) / 2;
  context.lineTo(d.target.x, d.target.y); 
});
context.stroke();
```

- [ ] **Step 3: Implement Smooth Spotlight transition**
Update the node drawing loop to use `globalAlpha` based on hover state.

```javascript
// In draw() loop
nodes.forEach(d => {
  const isHovered = hoveredNode === d;
  const isConnected = hoveredNode && (
    links.some(l => (l.source === hoveredNode && l.target === d) || (l.target === hoveredNode && l.source === d))
  );

  let targetAlpha = 1;
  if (hoveredNode && !isHovered && !isConnected) {
    targetAlpha = 0.1; // Dim non-connected
  }
  
  context.globalAlpha = targetAlpha;
  // ... rest of drawing logic
});
```

- [ ] **Step 4: Commit**
```bash
git add src/pages/graph/GraphCanvas.js
git commit -m "feat(graph): redesign physics and aesthetics for Constellation style"
```

---

### Task 3: Final Polish & Verification

**Files:**
- Modify: `src/pages/graph/graph.module.css`

- [ ] **Step 1: Add glassmorphism to control panel**
Ensure the UI matches the premium "Constellation" theme.

```css
.controlPanel {
  background: rgba(var(--ifm-background-surface-color-rgb), 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
```

- [ ] **Step 2: Verification**
1. Run `npm run start`.
2. Navigate to `/graph`.
3. Verify:
   - Nodes float gently and don't stop abruptly.
   - Hovering a node dims others.
   - Clicking a node navigates to the correct slugified URL.
4. Verify Dark Mode toggle updates colors correctly.

- [ ] **Step 3: Commit**
```bash
git add src/pages/graph/graph.module.css
git commit -m "style(graph): apply glassmorphism to control panel"
```
