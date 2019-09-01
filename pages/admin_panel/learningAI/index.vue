<template>
  <div>
      <title-line title="یادگیری"></title-line>
      <gap height="10"></gap>

      <label>با استفاده از بردارهای ویژگی ساخته شده.. مدل مربوطه کلاس بندی کننده ساخته خواهد شد</label>
      <br>
      <label>برای شروع آموزش مدل کلیک کنید</label>
      <div class="form-row align-items-center">
      <button class="btn btn-outline-success btn-block my-2 " type="submit">شروع یادگیری مدل کلاس بندی کننده</button>

      </div>
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
