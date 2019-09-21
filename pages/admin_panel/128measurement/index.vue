<template>
  <div>
      <title-line title="تشکیل بردار ویژگی"></title-line>
      <label>لیست زیر شامل تمامی افرادی که تصاویر آنها جهت تشکیل بردار ویژگی آنها آماده می باشد است</label>
      <tag :data="unpreprocessedData"></tag>

      <gap height="10"></gap>
      <label>جهت شروع کلیک کنید</label>
      <button class="btn btn-outline-success btn-block my-2 " type="submit">شروع ایجاد بردار ویژگی!</button>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'
export default {
  layout : 'adminPanel',
  asyncData (context) {
    checkAdmin(context)
  },

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
