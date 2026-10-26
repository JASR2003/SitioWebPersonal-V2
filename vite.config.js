import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        v2: resolve(projectRoot, 'v2/index.html'),
        v3: resolve(projectRoot, 'v3/index.html'),
        v4: resolve(projectRoot, 'v4/index.html'),
        v5: resolve(projectRoot, 'v5/index.html'),
      },
    },
  },
})
