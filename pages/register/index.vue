<template>
    <div class = "container centralize">
        <form class="form-signin ">
            <gap height="20"></gap>
            <h4 class="mb-3">برای ثبت نام اطلاعات زیر را پر کنید.</h4>
            <gap height="20"></gap>

            <label for="inputEmail" class="sr-only">ایمیل</label>
            <input type="email" id="inputEmail" class="form-control first-form-input" placeholder="ایمیل" required="" autofocus="">

            <label for="inputPassword" class="sr-only">رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control middle-form-input" placeholder="رمز عبور" required="">

            <label for="inputPassword" class="sr-only">تکرار رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control last-form-input" placeholder="رمز عبور" required="">

            <gap height="30"></gap>
            <button class="btn btn-lg btn-primary btn-block" type="submit">ثبت نام</button>
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
            passwordRepeat : '',
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
