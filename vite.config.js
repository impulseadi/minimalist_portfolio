import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    minify: 'terser', // Minifies JS with Terser
    terserOptions: {
      compress: { drop_console: true }, // Removes console logs
    },
    outDir: 'dist'
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
