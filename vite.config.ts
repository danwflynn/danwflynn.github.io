import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '.',          // build into root
    emptyOutDir: false,   // don't delete source files
  },
})
