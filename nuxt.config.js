const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/app.styl',
    '~/assets/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/vuetify.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor : [
      'vuetify'
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
