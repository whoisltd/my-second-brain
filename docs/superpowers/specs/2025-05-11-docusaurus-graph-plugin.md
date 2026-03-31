# Docusaurus Knowledge Graph Plugin Design Spec

## Overview
A redistributable Docusaurus plugin that automatically generates a high-performance, Obsidian-style interactive knowledge graph from markdown content across multiple directories.

## 1. Plugin Configuration (Options Schema)
The plugin will be configurable in `docusaurus.config.js`:
- `paths`: `string[]` (Required) - Array of directories to scan (e.g., `['docs', 'blog']`).
- `routePath`: `string` (Default: `/graph`) - The URL route for the graph page.
- `title`: `string` (Default: `Knowledge Graph`) - Page title and navbar label.
- `sidebar`: `boolean` (Default: `false`) - Whether to show the Docusaurus sidebar on the graph page.

## 2. Core Engine: `loadContent` & Data Layer
- **Unified Scanner:** Recursively walks all configured `paths`.
- **Metadata Parsing:** Uses `gray-matter` to extract `title`, `tags`, `slug`, and `summary`.
- **Link Discovery:** Parses markdown content for internal Wiki-links or Markdown links to build the `links` (edges) array.
- **Global Data Injection:** 
    - Uses `createData` to generate a `graph-data.json` module.
    - Uses `setGlobalData` to make the graph data available to any component without a separate `fetch` call.
- **URL Mapping:** Automatically generates a mapping between document titles/slugs and their final Docusaurus routes, ensuring the "Read Full Page" feature works across all content types.

## 3. Component Architecture: `contentLoaded` & UI
- **Route Injection:** Uses `addRoute` to register the `GraphView` component at `routePath`.
- **Theme Components:** 
    - `GraphView`: Main container, search UI, and side dock.
    - `GraphCanvas`: Encapsulates `react-force-graph-2d` and custom D3 physics.
- **Obsidian Styling:** 
    - Logarithmic scaling for tags.
    - Focus-and-context highlighting (purple neighbors, faded background).
    - Semantic zooming for label management.

## 4. Distribution (NPM Package)
- **Dependencies:** Includes `react-force-graph-2d`, `d3`, and `gray-matter` as dependencies.
- **Structure:** Standard Docusaurus plugin structure with `src/` for React components and `index.js` for the Node.js plugin logic.

## Testing Strategy
- **Compatibility:** Verify the plugin works when pointed to different folder structures.
- **Data Integrity:** Ensure links between a `blog` post and a `doc` file are correctly represented in the graph.
- **Performance:** Verify the global data injection doesn't impact Docusaurus build times significantly.
