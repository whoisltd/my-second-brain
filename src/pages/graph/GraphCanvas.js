import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useHistory } from '@docusaurus/router';

export default function GraphCanvas({ data, searchTerm, onNodeClick }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const history = useHistory();
  const searchTermRef = useRef(searchTerm);

  // Update ref when searchTerm changes, but don't re-run the simulation useEffect
  useEffect(() => {
    searchTermRef.current = searchTerm;
  }, [searchTerm]);

  useEffect(() => {
    if (!data || !canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Copy data to avoid mutating original during simulation
    const nodes = data.nodes.map(d => ({ ...d }));
    const links = data.links.map(d => ({ ...d }));

    const degreeMap = new Map();
    links.forEach(l => {
      const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
      const targetId = typeof l.target === 'object' ? l.target.id : l.target;
      degreeMap.set(sourceId, (degreeMap.get(sourceId) || 0) + 1);
      degreeMap.set(targetId, (degreeMap.get(targetId) || 0) + 1);
    });
    nodes.forEach(n => {
      n.degree = degreeMap.get(n.id) || 1;
    });

    const radiusScale = d3.scaleLog()
      .domain([1, Math.max(1, ...nodes.map(n => n.degree))])
      .range([4, 16]);

    function getRadius(d) {
      if (d.group === 'category') return 14; // Larger hubs
      if (d.group === 'tags') return 6;
      return radiusScale(d.degree);
    }

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
      .velocityDecay(0.3)
      .force('link', d3.forceLink(links).id(d => d.id).distance(40).strength(0.7)) // Reduced from 100
      .force('charge', d3.forceManyBody().strength(-150)) // Slightly weaker repulsion
      .force('x', d3.forceX(width / 2).strength(0.05)) // New: Centering force X
      .force('y', d3.forceY(height / 2).strength(0.05)) // New: Centering force Y
      .force('collide', d3.forceCollide().radius(d => getRadius(d) + 5).iterations(2));

    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;
      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${newHeight}px`;
      context.scale(dpr, dpr);
      
      simulation.force('x', d3.forceX(newWidth / 2).strength(0.05));
      simulation.force('y', d3.forceY(newHeight / 2).strength(0.05));
      simulation.alpha(0.1).restart(); // Lower alpha restart for smoother transition
    };

    window.addEventListener('resize', handleResize);

    let transform = d3.zoomIdentity;
    let hoveredNode = null;
    let neighbors = new Set();

    const PURPLE = '#a855f7';

    function getColor(d, isDark) {
      if (d.group === 'category') return '#2ecc71'; // Hub Green
      if (d.group === 'tags') return '#2ecc71'; 
      return isDark ? '#888888' : '#444444'; // Default Node
    }

    function draw() {
      const currentWidth = canvas.width / dpr;
      const currentHeight = canvas.height / dpr;
      context.clearRect(0, 0, currentWidth, currentHeight);
      context.save();
      context.translate(transform.x, transform.y);
      context.scale(transform.k, transform.k);

      const isDark = document.documentElement.dataset.theme === 'dark';
      const linkBaseColor = isDark ? '200, 200, 200' : '100, 100, 100';
      const currentSearchTerm = searchTermRef.current;

      // Draw links
      links.forEach(d => {
        const isHighlighted = hoveredNode && (d.source === hoveredNode || d.target === hoveredNode);
        
        context.beginPath();
        context.moveTo(d.source.x, d.source.y);
        context.lineTo(d.target.x, d.target.y);
        context.strokeStyle = isHighlighted ? PURPLE : `rgba(${linkBaseColor}, 0.1)`;
        context.lineWidth = isHighlighted ? 1.5 : 1;
        context.stroke();
      });

      // Draw nodes
      nodes.forEach(d => {
        const isMatched = currentSearchTerm && d.name.toLowerCase().includes(currentSearchTerm.toLowerCase());
        const isHovered = hoveredNode === d;
        const isConnected = neighbors.has(d.id);
        
        const isHub = d.group === 'category' || d.group === 'tags';

        let alpha = 1.0;
        if (hoveredNode && !isHovered && !isConnected && !isMatched) {
          alpha = 0.15; // Global background fade
        }

        context.beginPath();
        context.arc(d.x, d.y, getRadius(d), 0, 2 * Math.PI);
        
        context.globalAlpha = alpha;
        context.fillStyle = isHovered || (isConnected && alpha === 1.0) ? PURPLE : getColor(d, isDark);
        
        if (isMatched) {
          context.lineWidth = 3;
          context.strokeStyle = isDark ? '#fff' : '#000';
          context.stroke();
        }
        
        context.fill();

        // Semantic Zooming for Labels
        const zoomK = transform.k;
        let labelOpacity = 0;

        if (isHovered || isConnected || isMatched || isHub) {
          labelOpacity = 1; // Always show for these
        } else if (zoomK > 0.5) {
          labelOpacity = Math.min(1, (zoomK - 0.5) * 1.5); // Fade in linearly
        }

        if (labelOpacity > 0.05) {
          context.globalAlpha = alpha * labelOpacity;
          context.fillStyle = isDark ? '#ddd' : '#333';
          context.font = '10px Inter, system-ui, sans-serif';
          context.textAlign = 'center';
          context.fillText(d.name, d.x, d.y + getRadius(d) + 12);
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
        neighbors.clear();
        
        if (hoveredNode) {
          links.forEach(l => {
            const s = typeof l.source === 'object' ? l.source.id : l.source;
            const t = typeof l.target === 'object' ? l.target.id : l.target;
            const h = hoveredNode.id;
            if (s === h) neighbors.add(t);
            if (t === h) neighbors.add(s);
          });
        }
        
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

    d3.select(canvas).on('dblclick', (event) => {
      const [mouseX, mouseY] = d3.pointer(event);
      const x = (mouseX - transform.x) / transform.k;
      const y = (mouseY - transform.y) / transform.k;
      
      const node = simulation.find(x, y, 20);
      if (node && node.url) {
        history.push(node.url);
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
        
        // Set as hovered node for highlighting during drag
        hoveredNode = event.subject;
        neighbors.clear();
        links.forEach(l => {
          const s = typeof l.source === 'object' ? l.source.id : l.source;
          const t = typeof l.target === 'object' ? l.target.id : l.target;
          if (s === hoveredNode.id) neighbors.add(t);
          if (t === hoveredNode.id) neighbors.add(s);
        });
      })
      .on('drag', (event) => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
        // draw() is called by simulation tick automatically
      })
      .on('end', (event) => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
        
        // Clear hover state after drag unless mouse is still over it
        // For now, let mousemove handle the next update
      }));

    return () => {
      simulation.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, [data, onNodeClick, history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}