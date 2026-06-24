import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react() as any,
    tailwind() as any,
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.svg',
        'logo_icon.png',
        'welcome_hero.png',
        'ura_dashboard_hero.png',
        'chapter_1_badge.png',
        'chapter_2_badge.png'
      ],
      manifest: {
        name: 'Ura e Gjuhës',
        short_name: 'Ura',
        description: 'Mëso turqisht nga shqipja. Plotësisht offline.',
        theme_color: '#3A5A40',
        background_color: '#FAFAFA',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'logo_icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo_icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,wav}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024 // 6MB for audio files
      }
    }) as any
  ],
  optimizeDeps: {
    exclude: ['animejs']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('animejs')) {
              return 'vendor-anime';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'node',
    exclude: ['node_modules/**', 'dist/**', '**/*.spec.ts'],
  },
})


