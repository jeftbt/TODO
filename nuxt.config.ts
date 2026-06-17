import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-lucide-icons', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  pages: true,
  features: {
    inlineStyles: true,
  },
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
})