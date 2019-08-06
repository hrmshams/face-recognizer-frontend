<template>
  <div class="container "> 
    <div>
        <gap height="20"></gap>
    </div>
    <div class = "row-flex">
      <div id="right-sub-panel" class = ".col-6 .col-md-4">
        <h1>فیس مچر</h1>
        <gap height="20"></gap>
        <h5>در اینجا تصویری از صورت خود آپلود کنید تا افراد مشابه به خود را بیابید!</h5>
        <h5>برای استفاده از خدمات سایت باید ابتدا اقدام به عضویت در سایت بکنید!</h5>

        <gap height="20"></gap>
        <button type="button" class="btn btn-primary">ثبت نام در سایت</button>
      </div>
      <div id="left-sub-panel" class=".col-6 .col-md-4 centralize">
        <img src="~/assets/images/firstPageHeader.jpg" id="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout : 'defaultLayout',
  data(){
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
#right-sub-panel {
  padding : 25px;
}
#left-sub-panel {
  padding : 25px;
}
#image {
  width : 280px;
}
</style>
