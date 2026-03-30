const path = require('path');
const fs = require('fs');
const grayMatter = require('gray-matter');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // handle accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-graph-view',
    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const nodes = [];
      const edges = [];
      const docNodes = new Map();
      const tagsMap = new Map();
      const categoriesMap = new Map();

      function walk(dir) {
        let results = [];
        const list = fs.readdirSync(dir);
        list.forEach(function (file) {
          file = path.join(dir, file);
          const stat = fs.statSync(file);
          if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
          } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            results.push(file);
          }
        });
        return results;
      }

      if (!fs.existsSync(docsDir)) return { nodes, links: edges };

      const files = walk(docsDir);

      files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = grayMatter(content);
        const relativePath = path.relative(docsDir, file);
        
        let id = relativePath.replace(/\\/g, '/').replace(/\.mdx?$/, '');
        let url;
        
        if (parsed.data.slug) {
          const slugified = parsed.data.slug.split('/').map(slugify).join('/');
          url = parsed.data.slug.startsWith('/') ? slugified : `/docs/${slugified}`;
        } else if (id === 'intro') {
          url = '/docs/intro';
        } else {
          const slugifiedParts = id.split('/').map(slugify);
          url = `/docs/${slugifiedParts.join('/')}`;
        }
        
        // Remove trailing /index if it exists
        url = url.replace(/\/index$/, '');

        const title = parsed.data.title || id.split('/').pop() || 'Untitled';
        const tags = parsed.data.tags || [];
        
        const parts = id.split('/');
        let category = 'Uncategorized';
        if (parts.length > 1) {
          category = parts[0];
        }

        const docId = `doc:${url}`;
        
        const node = {
          id: docId,
          title,
          url,
          group: category,
          type: 'doc',
          tags,
          content: content
        };

        docNodes.set(docId, node);
        nodes.push({ id: docId, name: title, group: category, val: 2, url });

        tags.forEach(tag => {
          const tagId = `tag:${tag}`;
          if (!tagsMap.has(tagId)) {
            tagsMap.set(tagId, true);
            nodes.push({ id: tagId, name: `#${tag}`, group: 'tags', val: 1 });
          }
          edges.push({ source: docId, target: tagId, type: 'tag' });
        });

        const catId = `cat:${category}`;
        if (!categoriesMap.has(catId) && category !== 'Uncategorized') {
          categoriesMap.set(catId, true);
          nodes.push({ id: catId, name: category, group: 'category', val: 3 });
        }
        if (category !== 'Uncategorized') {
          edges.push({ source: docId, target: catId, type: 'category' });
        }
      });

      const linkRegex = /\[([^\]]+)\]\(([^)]+\.mdx?)\)/g;
      docNodes.forEach((node) => {
        let match;
        while ((match = linkRegex.exec(node.content)) !== null) {
          const targetRelative = match[2];
          // Basic check for internal links ignoring external ones
          if (targetRelative.startsWith('http')) continue;

          const filename = slugify(path.basename(targetRelative).replace(/\.mdx?$/, ''));
          
          let targetId = null;
          for (const [id, tNode] of docNodes.entries()) {
            if (tNode.id.endsWith(`/${filename}`) || tNode.id === `doc:/docs/${filename}`) {
              targetId = tNode.id;
              break;
            }
          }

          if (targetId && targetId !== node.id) {
            edges.push({ source: node.id, target: targetId, type: 'link' });
          }
        }
        delete node.content; // cleanup memory
      });

      return { nodes, links: edges };
    },
    async contentLoaded({ content, actions }) {
      console.log('[GraphView Plugin] contentLoaded starting... Node count:', content?.nodes?.length);
      const staticDir = path.join(context.siteDir, 'static');
      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir);
      }
      fs.writeFileSync(
        path.join(staticDir, 'graph-data.json'),
        JSON.stringify(content)
      );
    }
  };
};