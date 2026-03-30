# Obsidian-Style Graph View (react-force-graph) Design Spec

## Overview
Re-implement the graph view using the `react-force-graph` library to achieve professional-grade performance, robust coordinate math, and the native "Obsidian" elastic dragging feel.

## Architecture
- **Library:** `react-force-graph-2d`
- **Rendering:** Optimized 2D Canvas.
- **Physics Engine:** D3-force (internal to the library, highly configurable).
- **Coordinate System:** Automatic mapping of screen-to-graph coordinates for zoom, pan, and drag.

## Visual Styling (Custom Callbacks)
- **Node Rendering (`nodeCanvasObject`):**
  - **Sizing:** Logarithmic scale (`d3.scaleLog`) based on degree centrality.
  - **Colors:**
    - Hubs/Tags: Bright Green (`#2ecc71`).
    - Standard Nodes: Theme-aware Gray (`#444444` / `#888888`).
    - Highlighted: Purple (`#a855f7`).
  - **Labels:** Rendered using Canvas `fillText`, with opacity driven by zoom level (Semantic Zooming).
- **Link Rendering (`linkCanvasObjectCustom`):**
  - **Default:** Light gray, low opacity.
  - **Highlighted:** Purple, high opacity.

## Interaction & Highlighting
- **Hover State:** Track `hoverNode` and its immediate `neighbors` (Set) in local component state.
- **Focus & Context:**
  - Nodes/Links NOT in the neighborhood fade to 15% opacity.
  - Neighborhood (active node + direct neighbors) stays at 100% opacity.
- **Drag & Drop:** 
  - Uses the library's built-in elastic drag.
  - Dragged node automatically fixes position (`fx/fy`) and awakens the simulation.
  - Highlight state persists during the drag.

## Data Pre-processing
- Calculate **Degree Centrality** for each node before passing data to the graph component.
- Map links to include source/target IDs for fast lookup.

## Testing Strategy
- **Functionality:** Verify dragging a node pulls its neighbors elastically.
- **Visuals:** Verify logarithmic scaling correctly differentiates high-degree nodes.
- **Performance:** Verify smooth panning and zooming with the new library's optimizations.
