import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import Vuelidate from 'vuelidate'

Vue.use(Vuetify, {
    theme : {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        // success : colors.purple
    }
})

Vue.use(Vuelidate)
