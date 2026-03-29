// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Second Brain',
  tagline: '',
  url: 'https://whoisltd.me',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/brain.ico',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
    },
  },

  // GitHub pages deployment config.
  organizationName: 'whoisltd',
  projectName: 'my-second-brain',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable Rspack-based faster builds + v4 future flags
  future: {
    v4: true,
    experimental_faster: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/brain.ico',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#2e8555',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#2e8555',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/brain.ico',
          },
        ],
      },
    ],
    'docusaurus-plugin-image-zoom',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/whoisltd/my-second-brain/blob/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/whoisltd/my-second-brain/blob/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-KZ3HD5HXCE',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  // KaTeX stylesheet for math rendering
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Mermaid diagram config
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
      // Image zoom plugin config
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
      metadata: [
        { name: 'keywords', content: 'everything-i-know, whoisltd, blog' },
      ],
      navbar: {
        title: 'My Second Brain',
        logo: {
          alt: 'My Second Brain Logo',
          src: 'img/brain.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'All my knowledge',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/whoisltd/my-second-brain',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'All my knowledge',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/whoisltd/',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.com/@whoisltd',
              },
              {
                label: 'Goodreads',
                href: 'https://goodreads.com/whoisltd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/whoisltd',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} whoisltd.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'ZEOE50O63M',
        apiKey: '568a4ca9d77faef37c00d7018ca2bffc',
        indexName: 'whoisltd',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

export default config;
