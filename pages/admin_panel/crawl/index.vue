<template>
  <div>
      <title-line title="اضافه کردن اطلاعات"></title-line>
      <gap height="10"></gap>
      <label>جهت شروع خزش ابتدا نام افراد مورد نظر را وارد نمایید.</label>
      <div class="form-row align-items-center">
          <div class="col">
              <input type="text" class="form-control" placeholder="نام فرد" v-model="name">
          </div>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
            v-on:click="addPersonForCrawlOnPress"  
          >اضافه کن!
          </button>
      </div>
      <gap height="15"></gap>
      <flash-message 
          transitionIn="animated swing"
      ></flash-message>
      <gap height="10"></gap>

      <title-line title="افراد اضافه شده"></title-line>
      <label>تصاویر این افراد هنوز خزش نشده است!</label>
      <tag :data="uncrawledData"></tag>

      <button class="btn btn-outline-success btn-block my-2 " type="submit"
        v-on:click="crawlImagesOnPress"
      >شروع خزش تصاویر!
      </button>

      <div class="progress" style="height: 35px; font-size: 15px;" v-if="isCrawling">
        <div class="progress-bar progress-bar-striped progress-bar-animated active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">در حال خزش</div>
      </div>

      <gap height="25"></gap>

      <title-line title="افراد خزش شده"></title-line>
      <tag :data="crawledData"></tag>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'
import {
  addPersonForCrawl, 
  startCrawlingImages,
  getPeople
} from '~/controller/index'

export default {
  layout : 'adminPanel',
  asyncData (context) {
    checkAdmin(context)
  },
  data(){
    return{
      name : "",
      uncrawledData : [''],
      crawledData : [''],
      isCrawling : 0
    }
  },

  mounted(){
    this.getPeopleProcedure()
  },

  methods : {
    addPersonForCrawlOnPress : function(){
      if (this.name.length > 0){
        addPersonForCrawl(this.name, (res)=>{
          if (res.status === 0){
            this.flash('همچین اسمی وجود دارد', 'warning')
          }else if(res.status === 1 || res.status === 2){
            console.log(res)
            if (res.uncrawledPeople){
              let unP = []
              for (let i=0; i<res.uncrawledPeople.length; i++){
                unP.push(res.uncrawledPeople[i].name)
              }
              this.uncrawledData=unP
            }
            this.flash('با موفقیت اضافه شد', 'success')
          }
        }, (err)=>{
          console.log(err)
            this.flash('خطایی پیش آمد', 'error')
        })
      } else {
        this.flash('اطلاعات را کامل کنید', 'warning')
      }
      this.name = ""

    },
    
    crawlImagesOnPress : function(){
      startCrawlingImages((res)=>{
        this.isCrawling = 1
        console.log(res)
      }, (err)=>{
        console.log(err)
      })
      this.refresh()
    },

    getPeopleProcedure : function(){
      getPeople(res=>{
        let {status, not_crawled, crawled, is_crawling} = res
        console.log('ac')
        this.isCrawling = is_crawling

        let newUncrawled = []
        let newCrawled = []

        if (status === 1){
          for (let i=0; i<not_crawled.length; i++){
            newUncrawled.push(not_crawled[i].name)
          }
          for (let i=0; i<crawled.length ; i++){
            newCrawled.push(crawled[i].name)
          }

          this.uncrawledData = newUncrawled
          this.crawledData = newCrawled
        }
      }, err=>{
        console.log('error in getting people names => ' + err)
      })
    },

    refresh : function(){
      console.log('access1')
      this.getPeopleProcedure()
      if (this.isCrawling === 1){
        setTimeout(this.refresh, 500)
      }
    }

  },

  components : {
    Tag
  },


}
</script>

<style scoped>
</style>

