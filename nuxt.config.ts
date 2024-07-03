// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],



  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", '/articles'],
      failOnError: false
    },
  },


  plugins: [
    // '~/plugins/gettext.js',
    // '~/plugins/stripe.js',
  ],

  components: [
    { path: '~/components/', extensions: ['vue'] },
    { path: '~/components/content', extensions: ['vue'] },
  ],

  site: {
   url: 'https://articles.staging.fedihost.co',
 },

   router: {
    options: {
      strict: false,
    }
  },

  routeRules: {
    '/': {ssr: false},
    '/**': {ssr: true},
    '/articles': { sitemap: { changefreq: 'daily'} },
    '/articles/**': { sitemap: { changefreq: 'daily' } },
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
