<template>
    <v-container class = "centralize">
        <div class = "form">
            <div class = "gap"></div>
            <div class = "centralize">برای ورود ایمیل و رمز عبور را وارد نمایید</div>
            <div class = "gap"></div>
            <form>
                <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="ایمیل"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                
                ></v-text-field>
                
                <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="پسورد"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                
                ></v-text-field>
                
                <div class = "centralize">
                    <div>
                        <v-btn @click="submit" color = "success" depressed>
                            <div class="white-tint">
                            ورود  
                            </div>
                        </v-btn>
                        <v-btn @click="clear" color = "primary" outline >
                            <nuxt-link to="/register">
                                ثبت نام
                            </nuxt-link>
                        </v-btn>
                    </div>
                </div>
            </form>
        </div>
    </v-container>
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import Colors from './../../assets/colors'

export default {
    mixins: [validationMixin],
    validations: {
      email: { required, email },
      password : {required}
    },

    data(){
        return {
            email : '',
            password : '',
            colors : Colors
        }
    },

    methods : {
        submit : function(){

        },
        clear : function(){

        }
    },

    created(){
        console.log(Colors)
    },

    computed : {
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('باید ایمیل باشد')
            !this.$v.email.required && errors.push('وارد کردن ایمیل ضروری است')
            return errors
        },
        passwordErrors(){
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('پسورد ضروری است')
            return errors
        }
    }
}
</script>
<style scoped>

</style>
