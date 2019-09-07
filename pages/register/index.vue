<template>
    <div class = "container centralize">
        <form class="form-signin">
            <gap height="20"></gap>
            <h4 class="mb-3">برای ثبت نام اطلاعات زیر را پر کنید.</h4>
            <gap height="20"></gap>

            <label for="inputEmail" class="sr-only">ایمیل</label>
            <input type="email" id="inputEmail" v-model="email" 
            v-bind:class="{'first-form-input' : true,'form-control':true, 'is-invalid' : !validateEmail(email) }"
            placeholder="ایمیل" autofocus>


            <label for="inputPassword" class="sr-only">رمز عبور</label>
            <input type="password" id="inputPassword" v-model="password" 
            v-bind:class="{'middle-form-input' : true,'form-control':true, 'is-invalid' : !validatePassword(password) }"

            placeholder="رمز عبور" >

            <label for="inputPasswordRepeat" class="sr-only">تکرار رمز عبور</label>
            <input type="password" id="inputPasswordRepeat" v-model="passwordRepeat" 
            v-bind:class="{'last-form-input' : true,'form-control':true, 'is-invalid' : !validateRepeatPass(password, passwordRepeat) }"
            placeholder="تکرار رمز عبور">

            <gap height="30"></gap>
            <button class="btn btn-lg btn-primary btn-block" v-on:click.stop.prevent="submit">ثبت نام</button>
            <gap height="20"></gap>
            <flash-message 
                transitionIn="animated swing"
            ></flash-message>
        </form>

    </div>

</template>
<script>
import {register} from './../../controller/index.js'
import VueFlashMessage from 'vue-flash-message'
export default {
    layout : 'defaultLayout',
    
    data(){
        return {
            email : '',
            password : '',
            passwordRepeat : '',
            valid : false,
        }
    },

    methods : {
        validate : function(){
            this.emailBlured = true;
            if( this.validateEmail(this.email) && this.validatePassword(this.password) && this.validateRepeatPass(this.password, this.passwordRepeat))
                return true
            
            return false
        },
        validateEmail : function(email) {
            var re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase());
        },
        validatePassword : function(password) {
            if ( password.length === 0)
                return false

            return true
        },
        validateRepeatPass : function(password, passwordRepeat){
            if (password != passwordRepeat){
                return false
            }
            return true
        },
        submit : function(){
            let result = this.validate()

            if(!result){
                this.flash('اطلاعات را کامل کنید', 'error')
                return
            }

            let password = this.password
            let email = this.email
            let passwordRepeat = this.passwordRepeat

            register(email, password, response=>{
                let {res, msg} = response

                if (res === 0){
                    this.flash('کاربر با این نام وجود دارد', 'error')
                    return
                }
                if (res === 1){
                    this.flash('کاربر با موفقیت ثبت نام شد', 'success')
                    return
                }
            }, err=>{
                this.flash('خطای داخلی سرور بوجود آمد', 'error')
                return
            })
        },
        clear : function(){

        }
    },

    created(){
    },

    computed : {
        emailErrors () {
        },
        passwordErrors(){
        }
    },
    
}
</script>
<style scoped>
.form-signin {
    padding : 20px;
}

.form-signin input{
    height: 50px;
}

.first-form-input {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.last-form-input {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

.middle-form-input {
    margin-bottom: -1px;
    border-radius: 0;
}

</style>
