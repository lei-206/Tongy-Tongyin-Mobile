import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: 'index.html',
        register: 'register.html',
        'not-started': 'not-started.html',
        ended: 'ended.html',
        plan: 'plan.html',
      },
    },
  },
});
