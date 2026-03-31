import React, { useEffect, useState, useMemo, useRef } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GraphCanvas from './GraphCanvas';
import styles from './graph.module.css';

export default function GraphView() {
  const [data, setData] = useState(null);
  const [docLinks, setDocLinks] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  
  const dataUrl = useBaseUrl('/graph-data.json');
  const linksUrl = useBaseUrl('/doc-links.json');

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Error loading graph data", err));
      
    fetch(linksUrl)
      .then(res => res.json())
      .then(setDocLinks)
      .catch(err => console.error("Error loading doc links", err));
  }, [dataUrl, linksUrl]);

  const groups = useMemo(() => {
    if (!data) return [];
    const uniqueGroups = Array.from(new Set(data.nodes.map(n => n.group)));
    return uniqueGroups.filter(g => g !== 'category' && g !== 'Uncategorized' && g !== 'tags');
  }, [data]);

  // Grouped search results
  const searchResults = useMemo(() => {
    if (!data || !searchTerm || searchTerm.length < 2) return null;
    const term = searchTerm.toLowerCase();
    const matches = data.nodes.filter(n => 
      n.name.toLowerCase().includes(term) && 
      n.group !== 'category' && 
      n.group !== 'Uncategorized'
    );
    
    return {
      tags: matches.filter(n => n.group === 'tags'),
      notes: matches.filter(n => n.group !== 'tags')
    };
  }, [data, searchTerm]);

  // Find linked documents for the selected node
  const linkedDocs = useMemo(() => {
    if (!selectedNode || !data) return [];
    const nodeIds = new Set();
    data.links.forEach(l => {
      const s = typeof l.source === 'object' ? l.source.id : l.source;
      const t = typeof l.target === 'object' ? l.target.id : l.target;
      if (s === selectedNode.id) nodeIds.add(t);
      if (t === selectedNode.id) nodeIds.add(s);
    });
    // If it's a tag, show notes. If it's a note, show tags.
    return data.nodes.filter(n => 
      nodeIds.has(n.id) && 
      n.group !== 'category' && 
      (selectedNode.group === 'tags' ? n.group !== 'tags' : n.group === 'tags')
    );
  }, [selectedNode, data]);

  // Fix URL construction based on the pre-generated mapping
  const getDocUrl = (node) => {
    if (!node || node.group === 'tags') return null;
    
    // Check mapping first (most accurate)
    if (docLinks[node.name]) return docLinks[node.name];
    
    // Fallback logic
    const groupPath = node.group === 'Uncategorized' ? '' : `${node.group}/`;
    return `/docs/${groupPath}${node.name}`;
  };

  const resolvedPath = getDocUrl(selectedNode);
  const selectedNodeUrl = useBaseUrl(resolvedPath || '');

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
              <div className={styles.searchSection}>
                <input 
                  type="text" 
                  placeholder="Search tags or notes..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchBar}
                />
                
                {searchResults && (
                  <div className={styles.resultsDropdown}>
                    {searchResults.tags.length > 0 && (
                      <div className={styles.resultGroup}>
                        <div className={styles.resultLabel}>Tags</div>
                        {searchResults.tags.slice(0, 5).map(tag => (
                          <div key={tag.id} className={styles.resultItem} onClick={() => { setSelectedNode(tag); setSearchTerm(''); }}>
                            # {tag.name.replace('#', '')}
                          </div>
                        ))}
                      </div>
                    )}
                    {searchResults.notes.length > 0 && (
                      <div className={styles.resultGroup}>
                        <div className={styles.resultLabel}>Notes</div>
                        {searchResults.notes.slice(0, 10).map(note => (
                          <div key={note.id} className={styles.resultItem} onClick={() => { setSelectedNode(note); setSearchTerm(''); }}>
                            📄 {note.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.legend}>
                <h4>Legend</h4>
                <ul>
                  <li><span className={styles.legendColor} style={{background: '#444444'}}></span> Documents</li>
                  <li><span className={styles.legendColor} style={{background: '#2ecc71'}}></span> Tags</li>
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
            <div className={styles.nodeType}>
              {selectedNode.group === 'tags' ? 'TAG' : 'DOCUMENT'}
            </div>
            <h2 className={styles.nodeTitle}>
              {selectedNode.group === 'tags' ? selectedNode.name : selectedNode.name}
            </h2>
            
            {selectedNode.group === 'tags' && linkedDocs.length > 0 && (
              <div className={styles.connectionSection}>
                <h3>Linked Documents</h3>
                <ul className={styles.linkedList}>
                  {linkedDocs.map(doc => (
                    <li key={doc.id} onClick={() => setSelectedNode(doc)} className={styles.linkedItem}>
                      📄 {doc.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedNode.group !== 'tags' && (
              <div className={styles.tagList}>
                {selectedNode.tags && selectedNode.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
            
            {selectedNode.summary && (
              <div className={styles.summarySection}>
                <h3>Preview</h3>
                <div className={styles.summaryContent}>
                  {selectedNode.summary}
                </div>
              </div>
            )}
            
            {selectedNode.group !== 'tags' && (
              <div className={styles.actionSection}>
                <a href={selectedNodeUrl} className={styles.readMore}>
                  Read Full Page →
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
