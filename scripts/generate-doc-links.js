const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const docsDir = path.join(process.cwd(), 'docs');
const mapping = {};

function walk(dir, baseRoute = '/docs') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      walk(fullPath, `${baseRoute}/${file}`);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(content);
      
      const slug = data.slug || file.replace(/\.(md|mdx)$/, '');
      const route = `${baseRoute}/${slug}`;
      mapping[data.title || slug] = route;
      if (data.slug) mapping[file.replace(/\.(md|mdx)$/, '')] = route;
    }
  }
}

walk(docsDir);

fs.writeFileSync(
  path.join(process.cwd(), 'static', 'doc-links.json'),
  JSON.stringify(mapping, null, 2)
);

console.log('Generated static/doc-links.json with', Object.keys(mapping).length, 'mappings');
