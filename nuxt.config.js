export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TestApp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/fontAwesome.min.css'},
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Handlee&family=Lato&family=Open+Sans&display=swap", rel:"stylesheet"}
    ],
    script: [
      {src: '/js/bootstrap.min.js'},
      {src: '/js/fontAwesome.min.js'},
      {src: '/js/script.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~asset/css/style.css',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
