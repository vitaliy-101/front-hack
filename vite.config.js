import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:
    process.env.GITHUB_PAGES === 'true'
      ? `/${process.env.GITHUB_REPO || process.env.npm_package_name || 'promtSite'}/`
      : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});
