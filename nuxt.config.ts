// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  devServer: {
    port: 3001,
  },
  // css
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // server side render
  ssr: true,

  // build for node production
  build: {
    transpile: ['vuetify', 'gsap'],
  },
  modules: [
    // ...
    '@nuxtjs/tailwindcss',
  ],

  // build static html file
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
