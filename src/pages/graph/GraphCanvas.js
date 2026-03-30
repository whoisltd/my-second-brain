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
      .velocityDecay(0.3) // Lower for smoother motion
      .force('link', d3.forceLink(links).id(d => d.id).distance(100).strength(0.5))
      .force('charge', d3.forceManyBody().strength(-200)) // Repulsion
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(d => getRadius(d) + 5).iterations(2)); // Padding

    const handleResize = () => {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;
      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${newHeight}px`;
      context.scale(dpr, dpr);
      
      simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
      simulation.alpha(0.3).restart();
    };

    window.addEventListener('resize', handleResize);

    let transform = d3.zoomIdentity;
    let hoveredNode = null;

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

      // Draw links
      links.forEach(d => {
        const isHighlighted = hoveredNode && (d.source === hoveredNode || d.target === hoveredNode);
        
        context.beginPath();
        context.moveTo(d.source.x, d.source.y);
        context.lineTo(d.target.x, d.target.y);
        context.strokeStyle = `rgba(${linkBaseColor}, ${isHighlighted ? 0.6 : 0.1})`;
        context.lineWidth = isHighlighted ? 1.5 : 1;
        context.stroke();
      });

      // Draw nodes
      nodes.forEach(d => {
        const isMatched = searchTerm && d.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isHovered = hoveredNode === d;
        const isConnected = hoveredNode && (
          links.some(l => {
            const s = typeof l.source === 'object' ? l.source.id : l.source;
            const t = typeof l.target === 'object' ? l.target.id : l.target;
            const h = typeof hoveredNode === 'object' ? hoveredNode.id : hoveredNode;
            return (s === h && t === d.id) || (t === h && s === d.id);
          })
        );
        
        const isHub = d.group === 'category' || d.group === 'tags';
        const shouldShowLabel = isHub || isHovered || isConnected || isMatched || (transform.k > 1.0) || (d.index % 2 === 0);

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

        // Draw labels
        if (shouldShowLabel) {
          const densityAlpha = (transform.k < 1.0 && !isHub && !isMatched) ? 0.5 : 1.0;
          context.globalAlpha = alpha * densityAlpha;
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
      window.removeEventListener('resize', handleResize);
    };
  }, [data, searchTerm, onNodeClick, history]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}