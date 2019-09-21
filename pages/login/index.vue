<template>
    <div class = "container centralize">
        <form class="form-signin ">
            <gap height="20"></gap>
            <h4 class="mb-3">برای ورود اطلاعات زیر را پر کنید.</h4>
            <gap height="20"></gap>

            <label for="inputEmail" class="sr-only">ایمیل</label>
            <input type="email" id="inputEmail" class="form-control" 
                placeholder="ایمیل" autofocus=""
                v-model="email"
                v-bind:class="{'middle-form-input' : true,'form-control':true, 'is-invalid' : !validateEmail(email)}"
            >

            <label for="inputPassword" class="sr-only">رمز عبور</label>
            <input type="password" id="inputPassword" 
                class="form-control" placeholder="رمز عبور" 
                v-model="password"
                v-bind:class="{'middle-form-input' : true,'form-control':true, 'is-invalid' : !validatePassword(password)}"
            >

            <gap height="20"></gap>
            <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click.stop.prevent="submit">ورود</button>
            <gap height="20"></gap>
            <flash-message 
                transitionIn="animated swing"
            ></flash-message>

        </form>
    </div>

</template>
<script>
import {login} from './../../controller/index.js'
export default {
    layout : 'defaultLayout',
    data(){
        return {
            email : '',
            password : '',
        }
    },

    methods : {
        validate : function(){
            this.emailBlured = true;
            if( this.validateEmail(this.email) && this.validatePassword(this.password) )
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
        submit : function(){
            localStorage.a = undefined
            
            let result = this.validate()

            if(!result){
                this.flash('اطلاعات را کامل کنید', 'warning')
                return
            }

            let password = this.password
            let email = this.email
            let self = this
            login(email, password, (res)=>{
                this.$cookies.set('token', res.accessToken, {
                    path: '/',
                    maxAge: (24 * 60 * 60) - 100
                })
                this.$cookies.set('scope', res.scope, {
                    path: '/',
                    maxAge: (24 * 60 * 60) - 100
                })

                console.log(res)
                if (res.scope.includes('admin')){
                    this.$router.push('admin_panel')
                }else{
                    this.$router.push('upload')
                }
            }, (err)=>{
                console.log('error happened : ' + err)
                this.flash('خطایی در شبکه یا سرور بوجود آمد', 'error')
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

    mounted(){
    }
}
</script>
<style scoped>
.form-signin {
    padding : 20px;
}

.form-signin input{
    height: 50px;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

</style>
