<template>
  <div>
      <title-line title="کاربران"></title-line>
      <gap height="10"></gap>

      <label>لیستی از تمامی کاربران عضو شده را مشاهده میکنید.</label>

      <gap height="10"></gap>

      <div class="form-row align-items-center">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">نام کاربری</th>
            <th scope="col">سطح دسترسی</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>

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
