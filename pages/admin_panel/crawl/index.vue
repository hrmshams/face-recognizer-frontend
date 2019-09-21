<template>
  <div>
      <title-line title="اضافه کردن اطلاعات"></title-line>
      <gap height="10"></gap>
      <label>جهت شروع خزش ابتدا نام افراد مورد نظر را وارد نمایید.</label>
      <div class="form-row align-items-center">
          <div class="col">
              <input type="text" class="form-control" placeholder="نام فرد">
          </div>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
            v-on:click="addPersonForCrawlOnPress"  
          >اضافه کن!
          </button>
      </div>
      <gap height="25"></gap>

      <title-line title="افراد اضافه شده"></title-line>
      <label>تصاویر این افراد هنوز خزش نشده است!</label>
      <tag :data="uncrawledData"></tag>
      <button class="btn btn-outline-success btn-block my-2 " type="submit"
        v-on:click="crawlImagesOnPress"
      >شروع خزش تصاویر!
      </button>

      <gap height="25"></gap>

      <title-line title="افراد خزش شده"></title-line>
      <tag :data="uncrawledData"></tag>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'
import {addPersonForCrawl, startCrawlingImages} from '~/controller/index'

export default {
  layout : 'adminPanel',
  asyncData (context) {
    checkAdmin(context)
  },

  methods : {
    addPersonForCrawlOnPress : function(){
      addPersonForCrawl('hamid', (res)=>{
        console.log(res)
      }, (err)=>{
        console.log(err)
      })
    },
    crawlImagesOnPress : function(){
      startCrawlingImages((res)=>{
        console.log(res)
      }, (err)=>{
        console.log(err)
      })
    }
  },

  components : {
    Tag
  },

  data(){
    return{
      uncrawledData : [
        'حسن', 'ممد', 'ترامپ'
      ]
    }
  }

}
</script>
