<template>
  <div>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-warning text-dark sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column no-padding-inline-start">

            <div class="row-flex p-2">
              <img src="~/assets/images/headerIcon.png" id="header-image" alt="faceMatcher">
              <h5 class="px-2">فیس مچر</h5>
            </div>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin_panel">صفحه اصلی</nuxt-link>
            </li>
            <br>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin_panel/crawl">خزش اطلاعات</nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin_panel/learningAI">یادگیری</nuxt-link>
            </li>

            <li class="nav-item">
                <nuxt-link class="nav-link" to="/admin_panel/users">کاربران</nuxt-link>
            </li>
          </ul>

        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-0">
        <nav class="navbar navbar-light bg-white flex-md-nowrap p-0 shadow py-2">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">پنل ادمین</a>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">خروج از حساب</a>
            </li>
          </ul>
        </nav>

        <div class="container py-4">
          <v-app>
          <nuxt/>
          </v-app>

        </div>

      </main>

    </div>
  </div>

</div>
</template>

<script>
export default {

  methods : {
    learningAIPressed : function(){
      this.$router.push('/learningAI')
    }
  }

}

</script>


<style>
.sidebar-sticky {
    position: sticky;
    top: 0;
    height: calc(100vh);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto;
}
#header-image {
  width : 30px;
  height : 30px;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
