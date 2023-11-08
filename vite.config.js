import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Avion/',
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    htmlPurge(),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productsListing: resolve(__dirname, 'product-listing.html')
      }
    }
  }
})
