import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta donde Vite construirá los archivos estáticos
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});