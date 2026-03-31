# Docusaurus Graph View NPM Transition Spec

## Overview
Switch the `my-second-brain` project from the local graph plugin to the published NPM package `docusaurus-plugin-graph-view`.

## 1. Dependency Management
- **Install:** `docusaurus-plugin-graph-view` via npm.
- **Remove:** `react-force-graph-2d` and `d3` from the root `package.json` (as they are now managed by the plugin).

## 2. Configuration Update
Modify `docusaurus.config.js`:
- Replace the local path `./plugins/docusaurus-plugin-graph-view` with the package name `docusaurus-plugin-graph-view`.
- Maintain the existing configuration options (`paths`, `routePath`).

## 3. Cleanup
Delete redundant local files:
- `plugins/docusaurus-plugin-graph-view/` (the entire directory).
- `src/components/graph/` (any leftover local versions).

## Testing Strategy
- **Functionality:** Run the site locally and verify the `/graph` route still renders the Obsidian-style graph correctly.
- **Build:** Run a production build to ensure the NPM package is correctly resolved and bundled.
