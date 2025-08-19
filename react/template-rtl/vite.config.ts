import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/react/template-rtl/', // 👈 This ensures correct asset loading path
   resolve: {
    alias: {
      moment: 'moment/moment.js'
    },
  },
})
