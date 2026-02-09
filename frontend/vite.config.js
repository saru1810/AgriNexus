import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // allows you to import from src like: import X from '@/components/X'
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173, // default Vite port; you can change it if needed
    open: true, // automatically opens browser on start
  },
  build: {
    outDir: 'dist', // output folder
    sourcemap: true, // optional, useful for debugging
  },
});