import { defineConfig } from 'vite'

export default defineConfig({
  // Configure Vite for CloudFlare Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
})
