import React, { useMemo, useState, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import * as d3 from 'd3';

export default function GraphCanvas({ data, searchTerm, onNodeClick }) {
  const fgRef = useRef();
  const [hoverNode, setHoverNode] = useState(null);
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());

  // Pre-process data and build adjacency list for O(1) neighbor lookup
  const { graphData, adjacencyList } = useMemo(() => {
    if (!data) return { graphData: { nodes: [], links: [] }, adjacencyList: new Map() };
    
    const nodes = data.nodes.map(n => ({ ...n }));
    const links = data.links.map(l => ({ ...l }));
    const adj = new Map();
    const degreeMap = new Map();

    links.forEach(l => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      
      degreeMap.set(s, (degreeMap.get(s) || 0) + 1);
      degreeMap.set(t, (degreeMap.get(t) || 0) + 1);

      if (!adj.has(s)) adj.set(s, new Set());
      if (!adj.has(t)) adj.set(t, new Set());
      adj.get(s).add(t);
      adj.get(t).add(s);
    });
    
    nodes.forEach(n => {
      n.degree = degreeMap.get(n.id) || 1;
    });
    
    return { graphData: { nodes, links }, adjacencyList: adj };
  }, [data]);

  const radiusScale = useMemo(() => {
    if (!graphData.nodes.length) return d3.scaleLog();
    const maxDegree = Math.max(1, ...graphData.nodes.map(n => n.degree || 1));
    return d3.scaleLog().domain([1, maxDegree]).range([3, 12]);
  }, [graphData]);

  const lowerSearchTerm = useMemo(() => searchTerm?.toLowerCase(), [searchTerm]);

  const handleNodeHover = node => {
    const hNodes = new Set();
    const hLinks = new Set();

    if (node) {
      hNodes.add(node.id);
      const neighbors = adjacencyList.get(node.id);
      if (neighbors) {
        neighbors.forEach(neighborId => hNodes.add(neighborId));
      }
      
      graphData.links.forEach(link => {
        const s = typeof link.source === 'object' ? link.source.id : link.source;
        const t = typeof link.target === 'object' ? link.target.id : link.target;
        if (s === node.id || t === node.id) {
          hLinks.add(link);
        }
      });
    }

    setHoverNode(node);
    setHighlightNodes(hNodes);
    setHighlightLinks(hLinks);
  };

  useEffect(() => {
    if (!fgRef.current) return;
    
    // Un-blob clusters: Higher repulsion, looser links
    fgRef.current.d3Force('charge').strength(-250); // Increased repulsion
    fgRef.current.d3Force('link').distance(50).strength(0.3); // Looser links
    
    // Center the graph on load
    fgRef.current.zoomToFit(400, 50);
  }, [graphData]);

  const PURPLE = '#a855f7';
  const HUB_GREEN = '#2ecc71';

  const paintNode = (node, ctx, globalScale) => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    const isHub = node.group === 'category' || node.group === 'tags';
    const radius = isHub ? (node.group === 'category' ? 12 : 6) : radiusScale(node.degree);
    
    const isHighlighted = highlightNodes.has(node.id);
    const isMatched = lowerSearchTerm && node.name.toLowerCase().includes(lowerSearchTerm);
    const alpha = hoverNode && !isHighlighted ? 0.15 : 1;
    
    ctx.globalAlpha = alpha;

    // Search term highlighting stroke
    if (isMatched) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 3, 0, 2 * Math.PI, false);
      ctx.strokeStyle = isDark ? '#fff' : '#000';
      ctx.lineWidth = 2 / globalScale;
      ctx.stroke();
    }

    // Node Circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = (node === hoverNode || (isHighlighted && hoverNode)) ? PURPLE : (isHub ? HUB_GREEN : (isDark ? '#888888' : '#444444'));
    ctx.fill();

    // Labels (Semantic Zooming)
    const label = node.name;
    const fontSize = 12 / globalScale;
    const showLabel = isHub || (isHighlighted && hoverNode) || isMatched || globalScale > 2.5;
    
    if (showLabel) {
      ctx.font = `${fontSize}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = isDark ? '#ddd' : '#333';
      
      const labelOpacity = (isHub || (isHighlighted && hoverNode) || isMatched) 
        ? 1 
        : Math.min(1, (globalScale - 2.5) * 2); // Sharper fade in at high zoom
        
      ctx.globalAlpha = alpha * labelOpacity;
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
