# Design Spec: Obsidian-like Graph View Redesign (The Constellation)

Redesign the interactive graph view to provide a premium "Constellation" feel with organic animations, smooth physics, and corrected document navigation.

## Problem Statement

The current graph implementation feels "bad" (chaotic/snappy) and navigation is broken because node URLs do not match Docusaurus's slugified routing (e.g., `/docs/Naked Economics` instead of `/docs/naked-economics`).

## Proposed Design: "The Constellation"

### 1. Visual Style & Aesthetics
- **Organic Feel**: Nodes will float gracefully with a low-friction "drift" effect.
- **Curved Links**: Replace straight lines with quadratic curves (`context.quadraticCurveTo`) at low opacity (0.1 - 0.15) to create a web-like, organic appearance.
- **Glow & Spotlight**: 
  - Hovering a node smoothly dims non-connected nodes (globalAlpha transition).
  - The active node and its immediate neighbors get a subtle glow/shadow effect.
- **High DPI**: Explicitly handle device pixel ratio for crisp rendering on all screens.

### 2. Animation & Physics
- **Simulation**: Use `d3.forceSimulation` with lower `velocityDecay` (friction) and `alphaDecay` to allow for a "living" graph that never fully freezes.
- **Forces**: 
  - `forceLink`: Soft distance (80-100px).
  - `forceManyBody`: Stronger charge (-200) for better spacing.
  - `forceCollide`: Dynamic radius based on node type.
  - `forceCenter`: Keep the graph centered in the viewport.

### 3. URL & Navigation Fixes
- **Slugification**: Update the Docusaurus plugin to generate URLs that match Docusaurus's routing:
  - If `slug` is defined in frontmatter, use it.
  - Otherwise, lowercase the file path and replace spaces/special characters with dashes (`-`).
- **Path Resolution**: Ensure category nodes and tag nodes also have consistent ID structures.

### 4. Component Architecture

#### `docusaurus-plugin-graph-view.js` (Plugin)
- **Task**: Crawl `docs/`, parse frontmatter, detect links, and generate `static/graph-data.json`.
- **Logic**: Implement `slugify` helper to ensure `url` fields are correct.

#### `GraphCanvas.js` (Rendering)
- **Task**: Canvas-based D3 simulation.
- **Render Loop**: 
  - Clear canvas.
  - Draw curved links.
  - Draw nodes with conditional glow/opacity.
  - Draw labels for matching search/hovered/connected nodes.

## Success Criteria
1. Clicking any document node successfully navigates to the correct Docusaurus page.
2. The graph has a smooth, floating "living" animation.
3. Hovering a node clearly spotlights its direct connections without visual jitter.
4. Search highlights matching nodes across the entire "constellation".

## Verification Plan
1. **Build Test**: Run `npm run build` and verify `graph-data.json` contains valid, slugified URLs.
2. **Interactive Test**: 
   - Navigate to `/graph`.
   - Verify nodes drift slowly and settle gracefully.
   - Click a node with a complex title (e.g., "Naked Economics") and confirm it opens the doc.
   - Verify hover transitions are smooth (no flickering).
