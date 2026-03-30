import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useHistory } from '@docusaurus/router';

export default function GraphCanvas({ data, searchTerm, onNodeClick }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (!data || !canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Copy data to avoid mutating original during simulation
    const nodes = data.nodes.map(d => ({ ...d }));
    const links = data.links.map(d => ({ ...d }));

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(dpr, dpr);

    const simulation = d3.forceSimulation(nodes)
      .velocityDecay(0.15)
      .alphaDecay(0.01)
      .force('link', d3.forceLink(links).id(d => d.id).distance(90))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(d => getRadius(d) + 12));

    let transform = d3.zoomIdentity;
    let hoveredNode = null;

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    
    function getRadius(d) {
      if (d.group === 'category') return 12;
      if (d.group === 'tags') return 6;
      return 8; // doc
    }

    function getColor(d) {
      if (d.group === 'category') return '#f39c12';
      if (d.group === 'tags') return '#e74c3c';
      // if it's a doc, let's use the category string for color scaling, but make sure it differs from default ones
      return colorScale(d.group);
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(transform.x, transform.y);
      context.scale(transform.k, transform.k);

      const isDark = document.documentElement.dataset.theme === 'dark';
      const linkBaseColor = isDark ? '200, 200, 200' : '100, 100, 100';

      // Draw links
      links.forEach(d => {
        const isHighlighted = hoveredNode && (d.source === hoveredNode || d.target === hoveredNode);
        
        // Calculate control point for organic curve
        // Using mid-point for quadratic curve to create organic "constellation" lines
        const midX = (d.source.x + d.target.x) / 2;
        const midY = (d.source.y + d.target.y) / 2;
        
        // Subtle bend towards the center of the canvas for organic feel
        const controlX = midX + (width / 2 - midX) * 0.08;
        const controlY = midY + (height / 2 - midY) * 0.08;

        context.beginPath();
        context.moveTo(d.source.x, d.source.y);
        context.quadraticCurveTo(controlX, controlY, d.target.x, d.target.y);
        context.strokeStyle = `rgba(${linkBaseColor}, ${isHighlighted ? 0.6 : 0.1})`;
        context.lineWidth = isHighlighted ? 1.5 : 1;
        context.stroke();
      });

      // Draw nodes
      nodes.forEach(d => {
        const isMatched = searchTerm && d.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isHovered = hoveredNode === d;
        const isConnected = hoveredNode && (
          links.some(l => (l.source === hoveredNode && l.target === d) || (l.target === hoveredNode && l.source === d))
        );

        // Spotlight effect
        let targetAlpha = 1.0;
        if (hoveredNode && !isHovered && !isConnected && !isMatched) {
          targetAlpha = 0.1;
        }

        context.beginPath();
        context.arc(d.x, d.y, getRadius(d), 0, 2 * Math.PI);
        
        // Ensure doc colors don't conflict with category/tag fixed colors
        let color = getColor(d);
        if (d.group !== 'category' && d.group !== 'tags' && (color === '#f39c12' || color === '#e74c3c')) {
           color = '#4a90e2';
        }

        context.fillStyle = color;
        context.globalAlpha = targetAlpha;
        
        if (isMatched) {
          context.lineWidth = 3;
          context.strokeStyle = isDark ? '#fff' : '#000';
          context.stroke();
        }
        
        context.fill();

        // Draw labels
        if (isMatched || isHovered || isConnected || d.group === 'category' || transform.k > 1.5) {
          context.fillStyle = isDark ? '#ddd' : '#333';
          context.font = '12px Inter, system-ui, sans-serif';
          context.textAlign = 'center';
          context.fillText(d.name, d.x, d.y + getRadius(d) + 14);
        }
      });

      context.globalAlpha = 1;
      context.restore();
    }

    simulation.on('tick', draw);

    const zoom = d3.zoom()
      .scaleExtent([0.1, 8])
      .on('zoom', (event) => {
        transform = event.transform;
        draw();
      });
    
    d3.select(canvas).call(zoom);

    d3.select(canvas).on('mousemove', (event) => {
      const [mouseX, mouseY] = d3.pointer(event);
      const x = (mouseX - transform.x) / transform.k;
      const y = (mouseY - transform.y) / transform.k;
      
      const node = simulation.find(x, y, 20);
      if (node !== hoveredNode) {
        hoveredNode = node;
        draw();
        
        // Update cursor
        canvas.style.cursor = (node && node.url) ? 'pointer' : 'default';
      }
    });

    d3.select(canvas).on('click', (event) => {
      const [mouseX, mouseY] = d3.pointer(event);
      const x = (mouseX - transform.x) / transform.k;
      const y = (mouseY - transform.y) / transform.k;
      
      const node = simulation.find(x, y, 20);
      if (node && onNodeClick) {
        onNodeClick(node);
      }
    });

    d3.select(canvas).call(d3.drag()
      .subject((event) => {
        const [x, y] = d3.pointer(event);
        return simulation.find((x - transform.x) / transform.k, (y - transform.y) / transform.k, 20);
      })
      .on('start', (event) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on('drag', (event) => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on('end', (event) => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }));

    return () => {
      simulation.stop();
    };
  }, [data, searchTerm, onNodeClick, history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}