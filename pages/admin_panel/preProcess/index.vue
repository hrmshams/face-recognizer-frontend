<template>
  <div>
      <title-line title="پیش پردازش"></title-line>
      <gap height="10"></gap>
      <tag :data="unpreprocessedData"></tag>
      <gap height="10"></gap>

      <label>تصاویر افراد بالا پیش پردازش نشده است..</label>
      <label>جهت پیش پردازش تصاویر خزش شده کلیک کنید</label>
      <div class="form-row align-items-center">
      <button class="btn btn-outline-success btn-block my-2 " type="submit" @click="onPreprocessPress">شروع پیش پردازش تصاویر!</button>
      </div>

      <div class="progress" style="height: 35px; font-size: 15px;" v-if="isPreprocessing">
        <div class="progress-bar progress-bar-striped progress-bar-animated active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">در حال خزش</div>
      </div>

      <flash-message 
          transitionIn="animated swing"
      ></flash-message>
      <gap height="25"></gap>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'
import {startPreprocess, getUnpreprocessedPeople} from '~/controller/index'

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
      isPreprocessing : false,
      unpreprocessedData : []
    }
  },

  mounted(){
    this.getUnpreprocessedPeopleProcedure()
  },

  methods: {
    onPreprocessPress: function(){
      // this.unpreprocessedData = []
      startPreprocess(res=>{
        this.isPreprocessing = 1
        this.flash('فرایند پیش پردازش آغاز شد', 'success')
        this.refresh()
      }, err=>{
        console.log(err)
        this.flash('مشکلی در آغاز فرایند پیش آمد', 'error')
      })
    },

    getUnpreprocessedPeopleProcedure : function(){
      getUnpreprocessedPeople(res=>{
        let {status, not_preprocessed, is_preprocessing} = res
        this.isPreprocessing = is_preprocessing
        console.log(res)
        let newUnPreprocessed = []

        if (status === 1){
          for (let i=0; i<not_preprocessed.length; i++){
            newUnPreprocessed.push(not_preprocessed[i].name)
          }

          this.unpreprocessedData = newUnPreprocessed
        }
      }, err=>{
        console.log('error in getting people names => ' + err)
      })
    },

    refresh : function(){
      this.getUnpreprocessedPeopleProcedure()
      if (this.isPreprocessing === 1){
        setTimeout(this.refresh, 1000)
      }
    }
    

  }

}
</script>
