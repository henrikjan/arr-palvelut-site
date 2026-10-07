import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arr-palvelut.fi',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/kiitos') && !p.includes('/tack') })],
});
