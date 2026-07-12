import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.SITE_URL || 'https://aunocenter.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  integrations: [
    sitemap({
      filter: (page) => !['/404/', '/thank-you/', '/search/', '/social-poster/'].some((path) => page.endsWith(path))
    })
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
