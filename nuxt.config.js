export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Eli Horne - Director of Product Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['aos/dist/aos.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/aos.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/components',
    '@nuxt/content',
    'vue-scrollto/nuxt',
    'nuxt-svg-loader',
    [
      '@yabhq/nuxt-fathom',
      {
        siteId: 'WJTACUUC', // required

        // Advanced configuration
        // See here for details: https://usefathom.com/support/tracking-advanced

        auto: true,
        // optional, defaults to `true` (automatically track page views)

        canonical: true,
        // optional, defaults to `true`

        excludedDomains: 'localhost',
        // optional, defaults to ''

        honorDoNotTrack: false,
        // optional, defaults to `false`

        includedDomains: '',
        // optional, defaults to ''

        scriptSrc: 'https://clownfish.elihorne.com/script.js',
        // optional, defaults to 'https://cdn.usefathom.com/tracker.js'
        // See here for details: https://usefathom.com/support/custom-domains

        spa: 'auto',
        // optional, defaults to 'auto'
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
