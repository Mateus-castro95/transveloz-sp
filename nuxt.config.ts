// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'TransVeloz Logística — Transporte Rodoviário e Logística em SP',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'TransVeloz Logística: transporte rodoviário, carga fracionada, logística empresarial e distribuição nacional com tecnologia, agilidade e confiança. São Paulo - Brasil.',
        },
        { name: 'theme-color', content: '#0a1628' },
        { property: 'og:title', content: 'TransVeloz Logística — Transporte e Logística Premium' },
        {
          property: 'og:description',
          content: 'Logística inteligente para empresas que precisam de performance.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Nunito:wght@300;400;500;600&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  build: {
    transpile: ['lucide-vue-next'],
  },

  css: ['~/assets/css/main.css'],
})