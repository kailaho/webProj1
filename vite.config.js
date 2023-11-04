import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),  // Adjust the path
        details: resolve(__dirname, 'src/pages/details/details.html'),
        conservation: resolve(__dirname, 'src/pages/conservation/conservation.html'),
      },
    },
  },
});