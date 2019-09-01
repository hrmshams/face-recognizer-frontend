<template>
  <div>
      <title-line title="پیش پردازش"></title-line>
      <gap height="10"></gap>
      <tag :data="unpreprocessedData"></tag>
      <gap height="10"></gap>

      <label>تصاویر افراد بالا پیش پردازش نشده است..</label>
      <label>جهت پیش پردازش تصاویر خزش شده کلیک کنید</label>
      <div class="form-row align-items-center">
      <button class="btn btn-outline-success btn-block my-2 " type="submit">شروع پیش پردازش تصاویر!</button>

      </div>
      <gap height="25"></gap>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
export default {
  layout : 'adminPanel',

  components : {
    Tag
  },

  data(){
    return{
      unpreprocessedData : [
        'حسن', 'ممد', 'ترامپ'
      ]
    }
  }

}
</script>
