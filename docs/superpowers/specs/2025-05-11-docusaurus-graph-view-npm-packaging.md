# Docusaurus Graph View NPM Packaging Spec

## Overview
Package the Docusaurus Knowledge Graph feature into a standalone, redistributable NPM repository at `../docusaurus-plugin-graph-view`.

## 1. Repository Structure
The standalone repository will have the following layout:
- `index.js`: Main Node.js plugin logic (content loading, route injection).
- `package.json`: NPM metadata, scripts, and dependencies.
- `README.md`: Comprehensive user guide and installation instructions.
- `LICENSE`: MIT License.
- `.gitignore`: Standard Node.js excludes.
- `src/theme/`:
    - `GraphView/index.js`: Main React container.
    - `GraphView/styles.module.css`: Layout and side-dock styling.
    - `GraphCanvas/index.js`: Canvas rendering component (ForceGraph2D).

## 2. NPM Metadata (`package.json`)
- **Name:** `docusaurus-plugin-graph-view`
- **Version:** `1.0.0`
- **Description:** "An Obsidian-style interactive knowledge graph for Docusaurus."
- **Repository:** `https://github.com/whoisltd/docusaurus-plugin-graph-view`
- **Keywords:** `docusaurus`, `plugin`, `graph`, `knowledge-graph`, `obsidian`, `force-directed`.
- **Dependencies:** 
    - `react-force-graph-2d`
    - `d3`
    - `gray-matter`
    - `clsx`

## 3. Core Logic (Node.js)
- **Multi-Path Scanning:** Supports `paths` configuration to scan multiple directories.
- **Docusaurus Integration:** 
    - Uses `setGlobalData` for performant data sharing.
    - Uses `addRoute` for automatic page registration.
    - Uses `getThemePath` to expose the React components.

## 4. UI Components (React)
- **Consumption:** Uses `useGlobalData` hook to retrieve graph and mapping data.
- **Rendering:** Optimized Canvas-based rendering with custom Obsidian styling.
- **Navigation:** Deep-link support using the generated URL mapping.

## Testing Strategy
- **Isolation Test:** Manually install the plugin in a fresh Docusaurus site and verify it scans and renders correctly.
- **Config Test:** Verify that changing the `routePath` or `paths` in `docusaurus.config.js` works as intended.
