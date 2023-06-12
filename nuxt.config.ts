// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['nuxt-icon'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }]
    }
  }
})
