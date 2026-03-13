import { defineConfig } from 'astro/config';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

function pagefindDevPlugin() {
  return {
    name: 'pagefind-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/pagefind/')) return next();

        const filePath = join(process.cwd(), 'dist', req.url);
        if (!existsSync(filePath)) return next();

        const ext = req.url.split('.').pop();
        const types = { js: 'application/javascript', css: 'text/css', json: 'application/json', wasm: 'application/wasm' };
        if (types[ext]) res.setHeader('Content-Type', types[ext]);

        res.end(readFileSync(filePath));
      });
    },
  };
}

export default defineConfig({
  site: 'https://elegartech.fr',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  vite: {
    plugins: [pagefindDevPlugin()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
