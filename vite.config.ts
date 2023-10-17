import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@orders': path.resolve(__dirname, './src/feature/orders'),
      '@transversal': path.resolve(__dirname, './src/feature/transversal'),
    },
  },
})