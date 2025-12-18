import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dtvem.io',
  redirects: {
    '/docs': '/docs/user-guide/getting-started',
    '/docs/user-guide': '/docs/user-guide/getting-started',
    '/docs/user-guide/commands': '/docs/user-guide/commands/overview',
    '/docs/user-guide/runtimes': '/docs/user-guide/runtimes/overview',
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
