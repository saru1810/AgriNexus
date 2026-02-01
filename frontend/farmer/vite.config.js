import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './frontend/farmer/', // optional if your package.json is here
  server: {
    port: 5176, // default, change if needed
  },
  build: {
    outDir: 'dist', // output folder after build
  },
});
