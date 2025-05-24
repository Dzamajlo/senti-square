import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    open: true,
    proxy: {
      '/api/textrazor': {
        target: 'https://api.textrazor.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/textrazor/, ''),
      },
    },
  },
});
