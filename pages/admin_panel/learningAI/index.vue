<template>
  <div>
      <title-line title="یادگیری"></title-line>
      <gap height="10"></gap>

      <label>با استفاده از بردارهای ویژگی ساخته شده.. مدل مربوطه کلاس بندی کننده ساخته خواهد شد</label>
      <br>
      <label>برای شروع آموزش مدل کلیک کنید</label>
      <div class="form-row align-items-center">
      <button 
        class="btn btn-outline-success btn-block my-2 " 
        type="submit"
        :disabled="isProcessing"
        @click="startTrainingOnPress"
      >
      <span 
        v-show="this.isProcessing"
        class="spinner-grow spinner-grow-sm" 
        role="status" 
        aria-hidden="true"
      ></span>
        {{isProcessing ? btnTexts[1] : btnTexts[0]}}
      </button>

      </div>
  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'
import {getTrainingInfo, startTraining} from '~/controller/index'

export default {
  layout : 'adminPanel',
  components : {
    Tag
  },

  asyncData (context) {
    checkAdmin(context)
  },
  data(){
    return{
      btnTexts : ['شروع یادگیری مدل کلاس بندی کننده', 'در حال یادگیری مدل'],
      isProcessing : false,
    }
  },
  methods : {
    startTrainingOnPress(){
      startTraining(res=>{
        console.log(res)
        this.isProcessing = true
        setTimeout(this.refresh, 2000)
      }, err=>{
        console.log('couldnt run the script : ' + err)
      })
    },
    getInfo(){
      getTrainingInfo(res=>{
        this.isProcessing = res.is_training === 1 ? true : false
      }, err=>{
        console.log('couldnt get info')
      })
    },
    refresh(){
      this.getInfo()
      if (this.isProcessing)
        setTimeout(this.getInfo, 1000)
    }
  },  
  mounted(){
    this.getInfo()    
  }



}
</script>
