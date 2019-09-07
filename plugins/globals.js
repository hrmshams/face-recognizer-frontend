import Vue from 'vue'
import Gap from '../components/Gap.vue'
import TitleLine from '../components/TitleLine.vue'

Vue.component('gap', Gap)
Vue.component('title-line', TitleLine)

if (process.browser) {
     require('vue-flash-message/dist/vue-flash-message.min.css')
     let VueFlashMessage = require('vue-flash-message')
     Vue.use(VueFlashMessage.default, {
          messageOptions: {
               timeout: 3000,
               pauseOnInteract: true
          }
     })
}

// Vue.use('flash-message', VueFlashMessage)
