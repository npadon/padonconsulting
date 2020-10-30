export default {
  // target: 'static',
  components: true,

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // This is where you import the plugin
    '@nuxtjs/prismic',
    '@nuxtjs/vuetify',
  ],

  // This is where you configure your settings for the new plugin
  prismic: {
    endpoint: 'https://padonconsulting.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
}