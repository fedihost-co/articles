// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
  ],

  plugins: [
    // '~/plugins/gettext.js',
    // '~/plugins/stripe.js',
  ],

  components: [
    { path: '~/components/', extensions: ['vue'] },
    { path: '~/components/content', extensions: ['vue'] },
  ],

  site: {
   url: 'https://fedihost.co',
 },

  content: {
    api: {
      baseURL: '/a'
    },
    experimental: {
      search: true
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  googleFonts: {
    families: {
      Roboto:  {
        wght: '300',
      },
      Inter: {
        wght: '600'
      }
    }
  },

  compatibilityDate: '2024-07-03',
})