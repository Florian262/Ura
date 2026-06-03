import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  test: {
    globals: true,
    environment: 'node',
    exclude: ['node_modules/**', 'dist/**', '**/*.spec.ts'],
  },
})

