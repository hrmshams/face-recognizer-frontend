<template>
  <div>
      <title-line title="تشکیل بردار ویژگی"></title-line>
      <label>زمان آخرین تشکیل بردار :‌</label>
      <label>{{lastDate}}</label>
      <gap height="20"></gap>

      <label>لیست زیر شامل تمامی افرادی که تصاویر آنها جهت تشکیل بردار ویژگی آنها آماده می باشد است</label>
      <tag :data="readyPeopleToCreateVector"></tag>

      <gap height="10"></gap>
      <label>جهت شروع کلیک کنید</label>
      <button 
        class="btn btn-outline-success btn-block my-2 " 
        type="submit"
        :disabled="isProcessing===1"
        @click="onCreateVectorsPress"
      >
        <span 
          v-show="this.isProcessing"
          class="spinner-grow spinner-grow-sm" 
          role="status" 
          aria-hidden="true"
        ></span>
        {{this.isProcessing===1 ? btnTexts[1] : btnTexts[0]}}        
      </button>

  </div>
</template>

<script>
import Tag from '~/components/Tag'
import checkAdmin from './../checkAdmin'

import {
  getReadyPeople,
  getVectorCreatingInfo,
  startCreatingVector
} from '~/controller/index'

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
      readyPeopleToCreateVector : [],
      isProcessing : false,
      lastDate : '',
      btnTexts : ['شروع ایجاد بردار ویژگی!', 'سرور در حال ایجاد بردار ویژگی می باشد']
    }
  },

  methods: {
    onCreateVectorsPress(){
      startCreatingVector(res=>{
        if (res.status === 1)
          this.isProcessing = 1

        setTimeout(this.refresh, 1000)
      }, err=>{
      })
    },
    refresh(){
      getVectorCreatingInfo(res=>{
        this.isProcessing = res.is_creating_vectors
        this.lastDate = res.last_vector_date
      }, err=>{
        console.log(err)
      })
      if (this.isProcessing ===1)
        setTimeout(this.refresh, 2000)
    }
  },

  mounted(){
    getReadyPeople(res=>{
      const {readyPeople} = res
      for (let i=0; i<readyPeople.length; i++){
        this.readyPeopleToCreateVector.push(readyPeople[i].name)
      }
    }, err=>{
      console.log(err)
    })

    getVectorCreatingInfo(res=>{
      this.isProcessing = res.is_creating_vectors
      this.lastDate = res.last_vector_date
    }, err=>{
      console.log(err)
    })
  }

}
</script>
