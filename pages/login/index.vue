<template>
    <div class = "container centralize">
        <form class="form-signin ">
            <gap height="20"></gap>
            <h4 class="mb-3">برای ورود اطلاعات زیر را پر کنید.</h4>
            <gap height="20"></gap>

            <label for="inputEmail" class="sr-only">ایمیل</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="ایمیل" required="" autofocus="">

            <label for="inputPassword" class="sr-only">رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="رمز عبور" required="">

            <gap height="20"></gap>
            <button class="btn btn-lg btn-primary btn-block" type="submit">ورود</button>
        </form>
    </div>

</template>
<script>
export default {
    layout : 'defaultLayout',
    data(){
        return {
            email : '',
            password : '',
        }
    },

    methods : {
        submit : function(){

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
