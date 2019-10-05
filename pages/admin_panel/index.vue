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
        <label class="btn btn-info active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />
          مدل کوچک از ۶۰۰۰ فرد معروف
        </label>
        <label class="btn btn-info">
          <input type="radio" name="options" id="option2" autocomplete="off" />
          مدل ساخته شده
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import checkAdmin from "./checkAdmin"
export default {
  layout: "adminPanel",
  middleware: "auth",
  data() {
    return {
      isCrawling: false,
      isPreprocessing: false,
      isCreatingVectors: false,
      isTraining: false
    }
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
