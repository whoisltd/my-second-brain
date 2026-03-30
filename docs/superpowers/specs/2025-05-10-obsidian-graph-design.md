# Obsidian-Style Graph View Design Spec

## Overview
High-performance 2D Canvas graph view for a second-brain application, replicating the visual and interactive experience of the Obsidian graph.

## Architecture & Data Layer
- **Rendering Context:** 2D Canvas (optimized for high node counts).
- **Coordinate System:** Infinite Cartesian plane with camera transforms (D3 Zoom).
- **Data Structure:** 
  - Nodes: `id, label, group, x, y, radius, degree`.
  - Edges: `source, target, weight`.
- **Pre-calculation:** Calculate **Degree Centrality** (number of connected edges) for each node at runtime/initialization to drive dynamic sizing.

## Visual Styling
- **Nodes (Vertices):**
  - **Sizing:** `d3.scaleLog()` with range `[4, 16]` based on degree centrality.
  - **Colors:** 
    - Default: Dark Gray (`#444444` / theme-aware).
    - Hub/Tag nodes: Bright Green (`#2ecc71`).
    - Active/Hovered: Purple (`#a855f7`).
  - **Collision:** `d3.forceCollide()` with radius + padding to prevent overlap.
- **Edges (Links):**
  - **Shape:** Straight continuous lines.
  - **Thickness:** 1px (unscaled).
  - **Colors:**
    - Default: Light Gray with low opacity.
    - Active (connected to hover): Purple.

## Semantic Zooming & Labels
- **Zoom Thresholds:**
  - `< 0.5`: Hide all labels except Hubs, matched search terms, and highlighted neighbors.
  - `0.5 - 1.5`: Linear opacity transition `[0, 1]`.
  - `> 1.5`: Fully opaque labels.
- **Label Offset:** Bottom-right or center-bottom (14px below node center).

## Interaction & Highlighting
- **Hover Logic:**
  - **Active Node:** Highlight in Purple.
  - **1st-Degree Neighbors:** Retain 100% opacity, force-show labels.
  - **Global Context:** Fade all other nodes, edges, and labels to 15% opacity.
- **Physics Engine (Force-Directed):**
  - `forceManyBody`: Negative charge (repulsion).
  - `forceLink`: Spring attraction.
  - `forceCenter`: Weak gravity to `(0,0)`.
  - **Dynamics:** Simulation remains active during drags for elastic recalculation.

## Testing Strategy
- **Visual Verification:** Check node scaling vs. link count manually.
- **Performance:** Verify 60FPS during zoom/pan with 500+ nodes.
- **Logic:** Verify neighbor highlighting correctly identifies connected nodes across the `links` array.
