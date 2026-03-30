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

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="name"
        onNodeClick={onNodeClick}
      />
    </div>
  );
}
