export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  router: {
    base: '/cwt-dbLogon/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Passport CWT-BR',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/cwtico.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/axios',
    '@/plugins/vee-validate.js',
    '@/plugins/vue-mask.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss',
  ],

  styleResources: {
    scss: [
      './assets/styles/_colors.scss',
      './assets/styles/_mixins.scss',
      './assets/styles/_functions.scss',
    ],
  },
  moment: {
    timezone: true,
  },
  dotenv: {
    /* module options */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/style-resources',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'br', iso: 'pt-BR' },
    ],
    defaultLocale: 'br',
    vueI18n: {
      fallbackLocale: 'br',
      messages: {
        br: require('./i18n/br.js'),
        en: require('./i18n/en.js'),
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}
