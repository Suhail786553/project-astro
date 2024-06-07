// import { defineConfig } from 'astro/config';

// import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [react()],
//   redirects: {
//     '/old-page': '/new-page'
//   }
// });
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server', // Change to 'server' or 'hybrid'
  integrations: [react()],
});
