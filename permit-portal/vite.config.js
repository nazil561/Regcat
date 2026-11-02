import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Regcat/',
  server: { port: 3000, open: true },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':  ['react', 'react-dom'],
          'firebase':      ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          'map':           ['leaflet', 'react-leaflet'],
          '3d':            ['three', 'framer-motion'],
          'report':        ['jspdf', 'html2canvas', 'qrcode'],
          'ocr':           ['tesseract.js'],
        },
      },
    },
  },
})
