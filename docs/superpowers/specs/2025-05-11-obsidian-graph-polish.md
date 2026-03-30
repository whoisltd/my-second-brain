# Obsidian Graph View Final Polish Spec

## Overview
This spec addresses the readability, layout, and UI issues in the current graph implementation, focusing on decluttering the view, improving cluster stability, and refining the search experience.

## 1. Readability: Semantic Label Logic
To solve the "text cloud" problem where labels overlap and become unreadable:
- **Default State:** Document labels are hidden by default.
- **Triggered Visibility:**
    - **Hover:** The label for the hovered node and its 1st-degree neighbors appears at 100% opacity.
    - **Deep Zoom:** Labels for all nodes start to fade in linearly when the zoom level is close (`globalScale > 2.5`).
    - **Search & Hubs:** Landmarks (search matches, Categories, and Tags) remain always visible to provide context.

## 2. Physics: Cluster Un-blobbing & Alignment
To prevent dense clusters like "English" from collapsing into unreadable blobs:
- **Repulsion Tuning:** Increase many-body repulsion (`charge` strength) to push nodes further apart within clusters.
- **Link Elasticity:** Lower `linkStrength` (e.g., from 0.7 to 0.3) to allow repulsion to dominate within clusters while maintaining global structure.
- **Initial View:** Call `fgRef.current.zoomToFit(400, 50)` immediately after data load to center and scale the graph.

## 3. Interaction: Search & UI Polish
- **Search (Strong Highlight):**
    - Non-matching nodes and links fade to 10% opacity.
    - Matched nodes receive a bright border (white in dark mode, black in light mode) and have their labels forced visible.
- **UI Enhancements:**
    - **Dynamic Legend:** Read unique groups from the `data` and generate the legend list automatically (instead of hardcoded items).
    - **Dark Mode Contrast:** Update glassmorphism styles in `graph.module.css` to ensure readability and contrast in dark mode.

## Testing Strategy
- **Manual Verification:** 
    - Zoom into the English cluster and verify labels don't overlap until zoomed very close.
    - Search for a term and verify structure remains visible but dimmed.
    - Toggle dark/light mode and verify control panel readability.
- **Performance:** Ensure 60FPS is maintained during zoom/pan with labels fading.
