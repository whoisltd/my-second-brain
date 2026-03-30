import React, { useMemo, useState, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import * as d3 from 'd3';

export default function GraphCanvas({ data, searchTerm, onNodeClick }) {
  const fgRef = useRef();
  
  // Pre-process data
  const graphData = useMemo(() => {
    if (!data) return { nodes: [], links: [] };
    
    const nodes = data.nodes.map(n => ({ ...n }));
    const links = data.links.map(l => ({ ...l }));
    
    const degreeMap = new Map();
    links.forEach(l => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      degreeMap.set(s, (degreeMap.get(s) || 0) + 1);
      degreeMap.set(t, (degreeMap.get(t) || 0) + 1);
    });
    
    nodes.forEach(n => {
      n.degree = degreeMap.get(n.id) || 1;
    });
    
    return { nodes, links };
  }, [data]);

  const radiusScale = useMemo(() => {
    if (!graphData.nodes.length) return d3.scaleLog();
    const maxDegree = Math.max(1, ...graphData.nodes.map(n => n.degree || 1));
    return d3.scaleLog().domain([1, maxDegree]).range([3, 12]);
  }, [graphData]);

  const [hoverNode, setHoverNode] = useState(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());

  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node.id);
      graphData.links.forEach(link => {
        if (link.source.id === node.id || link.target.id === node.id) {
          highlightNodes.add(link.source.id);
          highlightNodes.add(link.target.id);
          highlightLinks.add(link);
        }
      });
    }
    setHoverNode(node || null);
    setHighlightNodes(new Set(highlightNodes));
    setHighlightLinks(new Set(highlightLinks));
  };

  const PURPLE = '#a855f7';
  const HUB_GREEN = '#2ecc71';

  const paintNode = (node, ctx, globalScale) => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const isHub = node.group === 'category' || node.group === 'tags';
    const radius = isHub ? (node.group === 'category' ? 12 : 6) : radiusScale(node.degree);
    
    const isHighlighted = highlightNodes.has(node.id);
    const alpha = hoverNode && !isHighlighted ? 0.15 : 1;
    ctx.globalAlpha = alpha;

    // Node Circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = (node === hoverNode || (isHighlighted && hoverNode)) ? PURPLE : (isHub ? HUB_GREEN : (isDark ? '#888888' : '#444444'));
    ctx.fill();

    // Labels (Semantic Zooming)
    const label = node.name;
    const fontSize = 12 / globalScale;
    if (globalScale > 0.8 || isHub || (isHighlighted && hoverNode)) {
      ctx.font = `${fontSize}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = isDark ? '#ddd' : '#333';
      
      const opacity = (isHub || (isHighlighted && hoverNode)) ? 1 : Math.min(1, (globalScale - 0.8) * 4);
      ctx.globalAlpha = alpha * opacity;
      if (ctx.globalAlpha > 0.1) {
        ctx.fillText(label, node.x, node.y + radius + 2);
      }
    }
    ctx.globalAlpha = 1;
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeCanvasObject={paintNode}
        onNodeHover={handleNodeHover}
        onNodeClick={onNodeClick}
        linkColor={link => highlightLinks.has(link) ? PURPLE : (document.documentElement.dataset.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}
        linkWidth={link => highlightLinks.has(link) ? 2 : 1}
        linkDirectionalParticles={link => highlightLinks.has(link) ? 2 : 0}
        linkDirectionalParticleWidth={2}
      />
    </div>
  );
}
