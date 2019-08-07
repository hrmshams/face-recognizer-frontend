<template>
    <nav class="navbar navbar-expand-lg navbar-light" id = "navbar_header">
        <div class = "container">

            <img src="~/assets/images/headerIcon.png" id="header_image" alt="faceMatcher">
            <a class="navbar-brand" href="/">
                <div id = "title-container">
                    <p id="topperTitle">فیس مچر</p>
                    <p id="bottomTitle">صورت های مشابه صورت خود را در اینجا بیابید</p>
                </div>
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        حساب من
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/login">ورود</a>
                        <a class="dropdown-item" href="/register">ثبت نام</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">خروج</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data : function(){
        return {
            link : "~/assets/images/headerIcon.png"
        }
    },
    methods : {
        onNewAdPress : function(){
            this.$router.push('/adRegister')
        }
    }
}
</script>


<style scoped>
#navbar_header{
    background-color: #ffdd57;
    color: #4c4420;
    height: 80px;
}
#title-container {
    flex-direction: column;
}
#header_image {
    max-height: 60px;

}
#topperTitle {
    color: #2d290e;
    font-size: 21px;
    font-family: shabnam-bold;
    margin: 0;
    text-align: right;
}
#bottomTitle {
    color: #4c4420;
    font-size: 14px;
}
/* #title-container:nth-child(1) {
    color: #eff9fb;
    font-size: 12px;
} */
</style>

