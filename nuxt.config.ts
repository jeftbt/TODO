import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-lucide-icons'],
  css: ['~/assets/css/main.css'],
  pages: true,
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
})