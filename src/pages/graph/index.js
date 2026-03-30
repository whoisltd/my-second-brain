import React, { useEffect, useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GraphCanvas from './GraphCanvas';
import styles from './graph.module.css';

export default function GraphView() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const dataUrl = useBaseUrl('/graph-data.json');

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error loading graph data", err));
  }, [dataUrl]);

  const groups = useMemo(() => {
    if (!data) return [];
    const uniqueGroups = Array.from(new Set(data.nodes.map(n => n.group)));
    return uniqueGroups.filter(g => g !== 'category' && g !== 'tags');
  }, [data]);

  return (
    <Layout title="Knowledge Graph" description="Interactive graph view of my second brain">
      <div className={styles.explorerContainer}>
        <div className={styles.graphWrapper}>
          <div className={styles.graphContainer}>
            {data ? (
              <GraphCanvas 
                data={data} 
                searchTerm={searchTerm} 
                onNodeClick={setSelectedNode}
              />
            ) : (
              <div className={styles.loading}>Loading graph...</div>
            )}
            <div className={styles.controlPanel}>
              <input 
                type="text" 
                placeholder="Search nodes..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchBar}
              />
              <div className={styles.legend}>
                <h4>Groups</h4>
                <ul>
                  {groups.map(group => (
                    <li key={group}>
                      <span className={styles.legendColor} style={{background: '#444444'}}></span> {group}
                    </li>
                  ))}
                  <li><span className={styles.legendColor} style={{background: '#2ecc71'}}></span> Hubs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {selectedNode && (
          <div className={styles.sideDock}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setSelectedNode(null)}
            >
              ×
            </button>
            <h2>{selectedNode.name}</h2>
            <div className={styles.tagList}>
              {selectedNode.tags && selectedNode.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <p className={styles.summary}>{selectedNode.summary}</p>
            {selectedNode.url && (
              <a href={selectedNode.url} className={styles.readMore}>
                Read Full Page →
              </a>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}