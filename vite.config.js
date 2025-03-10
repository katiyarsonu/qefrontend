import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3575b01d-e38e-45c9-aa4e-9b2e65b4ba7d-00-19lnfgxjkqpua.pike.replit.dev'],
  }
})
