import path from 'path';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal-site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&family=Montserrat:wght@300;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', 'vue-scrollto/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // ...
    loaders: {
      scss: {
        implementation: require('node-sass'),
      },
    },

    // Extend Webpack configuration
    extend(config, ctx) {
      // Create or ensure the existence of the alias property
      if (!config.resolve) {
        config.resolve = {};
      }
      if (!config.resolve.alias) {
        config.resolve.alias = {};
      }

      // Define the alias for the components directory
      config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    }
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
}
