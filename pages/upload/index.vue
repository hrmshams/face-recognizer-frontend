<template>
  <div class="container centralize horizontal">
    <div class="right-panel panel">
      <lable class="mt-3 centralize">
        عکس مورد نظر خود را دراینجا آپلود کرده و منتظر نتایج بمانید
      </lable>

      <gap height="30"></gap>
      <form class="vertical">
        <input
          type="file"
          name="photo"
          class="btn btn-light"
          ref="imageRef"
          @change="setImage"
          accept=".jpg"
        />
        <gap height="10"></gap>
        <input
          type="submit"
          name="Submit"
          value="شروع فرایند"
          class="btn btn-primary"
          v-on:click.stop.prevent="onSubmit"
          :disabled="isUploading || isProcessing"
        />
        <gap height="15"></gap>
        <flash-message transitionIn="animated swing"></flash-message>
        <div class="line"></div>

        <div class="result-container horizontal" v-show="isShowingResult()">
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div>{{ result_text() }}</div>
        </div>
        <div class="result-container horizontal" v-show="done">
          <label>عملیات با موفقیت تمام شد</label>
          <label
            >فرد پیش بینی شده {{ this.result.person }} با میزان اطمینان
            {{ this.result.confidence }} می باشد</label
          >
        </div>
      </form>
    </div>

    <div class="left-panel panel centralize">
      <img v-if="url" :src="url" />
    </div>
  </div>
</template>

<script>
import {
  upload,
  startComparingProcess,
  getComparingProcessInfo
} from "~/controller/index"
export default {
  layout: "defaultLayout",
  middleware: "auth",
  data() {
    return {
      image: null,
      url: null,
      isUploading: false,
      isProcessing: false,
      done: false,
      result_texts: ["درحال آپلود عکس", "درحال پردازش", "تمام شد!"],
      result: {
        person: "",
        confidence: ""
      }
    }
  },
  methods: {
    setImage() {
      this.image = this.$refs.imageRef.files[0]
      this.url = URL.createObjectURL(this.image)
    },
    onSubmit() {
      if (this.image) {
        this.isUploading = true
        setTimeout(() => {
          upload(
            this.image,
            res => {
              console.log(res)
              this.isUploading = false
              this.isProcessing = true

              startComparingProcess(
                res => {
                  setTimeout(this.refresh, 1000)
                },
                err => {
                  console.log("error in running script:" + err)
                  this.flash("مشکلی در اجرای اسکریپت پیش آمد", "warning")
                }
              )
            },
            err => {
              console.log(err)
            }
          )
        }, 2000)
      } else {
        this.flash("عکسی انتخاب نشده است!", "warning")
      }
    },
    result_text() {
      if (this.isUploading) return this.result_texts[0]
      if (this.isProcessing) return this.result_texts[1]
      return ""
    },
    isShowingResult() {
      return this.isUploading || this.isProcessing
    },
    refresh() {
      console.log("accsss")
      getComparingProcessInfo(
        res => {
          console.log(res)
          if (res.status === "processing") {
            setTimeout(this.refresh, 1000)
          } else if (res.status === "done") {
            this.isProcessing = false
            this.done = true
            this.result = {
              person: res.p_person,
              confidence: res.confidence
            }
          }
        },
        err => {}
      )
    }
  }
  // asyncData ({app, store, redirect}) {

  // const scope = app.$cookies.get('scope')
  // if (scope){
  //   if (!scope.includes('user')){
  //     redirect('/login')
  //   }
  // }else {
  //   redirect('/login')
  // }
}
</script>

<style scoped>
.vertical {
  display: flex;
  flex-direction: column;
}
.horizontal {
  display: flex;
  flex-direction: row;
}
.left-panel {
  width: 60%;
}
.right-panel {
  width: 40%;
}
.panel {
  margin: 15px;
  padding: 20px;
  height: 500px;
  border-radius: 10px;
  background-color: #fff;
}
.line {
  height: 1px;
  background-color: #e0e0e0;
}
.result-container {
  padding: 10px;
  /* justify-content: center; */
  align-items: center;
  color: #666666;
}
</style>
