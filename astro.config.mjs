import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from "@astrojs/netlify";
export default defineConfig({
  output: 'server',
  // Change to 'server' or 'hybrid'
  integrations: [react()],
  adapter: netlify()
});