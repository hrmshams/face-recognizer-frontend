<template>
  <div>
    <title-line title="وضعیت کنونی"></title-line>
    <div class="horizontal mb-4">
      <div
        class="card mx-1"
        :class="crawlCardData(false)"
        style="max-width: 18rem; min-width: 16rem;"
      >
        <div class="card-header">خزش تصاویر</div>
        <div class="card-body">
          <h5 class="card-title">{{ crawlCardData(true) }}</h5>
          <p class="card-text"></p>
        </div>
      </div>

      <div
        class="card mx-1"
        :class="preprocessCardData(false)"
        style="max-width: 18rem; min-width: 16rem;"
      >
        <div class="card-header">پیش پردازش داده ها</div>
        <div class="card-body">
          <h5 class="card-title">{{ preprocessCardData(true) }}</h5>
          <p class="card-text"></p>
        </div>
      </div>

      <div
        class="card mx-1"
        :class="vectorCardData(false)"
        style="max-width: 18rem; min-width: 16rem;"
      >
        <div class="card-header">تشکیل بردار ویژگی</div>
        <div class="card-body">
          <h5 class="card-title">{{ vectorCardData(true) }}</h5>
          <p class="card-text"></p>
        </div>
      </div>

      <div
        class="card mx-1"
        :class="trainCardData(false)"
        style="max-width: 18rem; min-width: 16rem;"
      >
        <div class="card-header">یادگیری مدل</div>
        <div class="card-body">
          <h5 class="card-title">{{ trainCardData(true) }}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>

    <title-line title="تعیین مدل"></title-line>
    <label class="mb-3">نوع مدل خود را اینجا تعیین کنید</label>
    <div>
      <div
        class="btn-group btn-group-toggle toggle-container"
        data-toggle="buttons"
      >
        <label
          class="btn btn-info"
          :class="isMyModel === false ? 'active' : ''"
          @click="onModelRadioBtnPress(0)"
        >
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            :checked="isMyModel === false"
          />
          مدل کوچک از ۶۰۰۰ فرد معروف
        </label>
        <label
          class="btn btn-info"
          :class="isMyModel === true ? 'active' : ''"
          @click="onModelRadioBtnPress(1)"
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autocomplete="off"
            :checked="isMyModel === true"
          />
          مدل ساخته شده
        </label>
      </div>
    </div>
    <flash-message transitionIn="animated swing"></flash-message>
  </div>
</template>

<script>
import checkAdmin from "./checkAdmin"
import { setModel, getWholeStatus } from "~/controller/index"
export default {
  layout: "adminPanel",
  middleware: "auth",
  data() {
    return {
      isCrawling: false,
      isPreprocessing: false,
      isCreatingVectors: false,
      isTraining: false,
      isMyModel: true
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    crawlCardData(isText) {
      if (isText) {
        if (this.isCrawling) return "در حال خزش اطلاعات"
        else return "متوقف"
      } else {
        if (this.isCrawling) return "text-white bg-success"
        else return "bg-light"
      }
    },

    preprocessCardData(isText) {
      if (isText) {
        if (this.isPreprocessing) return "در حال پیش پردازش داده ها"
        else return "متوقف"
      } else {
        if (this.isPreprocessing) return "text-white bg-success"
        else return "bg-light"
      }
    },

    vectorCardData(isText) {
      if (isText) {
        if (this.isCreatingVectors) return "در حال ساخت بردار ویژگی"
        else return "متوقف"
      } else {
        if (this.isCreatingVectors) return "text-white bg-success"
        else return "bg-light"
      }
    },

    trainCardData(isText) {
      if (isText) {
        if (this.isTraining) return "در حال آموزش مدل"
        else return "متوقف"
      } else {
        if (this.isTraining) return "text-white bg-success"
        else return "bg-light"
      }
    },

    refresh() {
      getWholeStatus(
        res => {
          if (res.status == 1) {
            const { data } = res
            this.isMyModel = data.is_my_model === 1
            this.isCrawling = data.is_crawling === 1
            this.isPreprocessing = data.is_preprocessing === 1
            this.isCreatingVectors = data.is_creating_vectors === 1
            this.isTraining = data.is_training === 1
          }
        },
        err => {
          console.log("error in getting status data")
        }
      )
      setTimeout(this.refresh, 4000)
    },

    onModelRadioBtnPress(is_my_model) {
      console.log("access1111")
      setModel(
        is_my_model,
        res => {
          if (res.status == 1) {
            this.flash("با موفقیت تغییر داده شد", "success")
            this.isMyModel = res.is_my_model === 1
          } else if (res.status == 0) {
            this.flash("فایل مدل خواسته شده وجود ندارد!", "warning")
            this.isMyModel = res.is_my_model === 1
          }
        },
        err => {
          this.flash("اروری در سرور ایجاد شد", "error")
        }
      )
    }
  },
  asyncData(context) {
    checkAdmin(context)
  }
}
</script>
<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
.toggle-container {
  direction: ltr;
}
</style>
