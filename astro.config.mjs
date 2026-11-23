// @ts-check
import { defineConfig } from 'astro/config';

// Static, multilingual marketing site. Every locale lives under its own prefix
// (/en/, /fr/, /ru/) so each language is a real, indexable URL.
export default defineConfig({
  site: 'https://housepersonal.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'fr', 'ru'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  image: {
    // Sharp ships with Astro; responsive AVIF/WebP are generated at build time.
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
