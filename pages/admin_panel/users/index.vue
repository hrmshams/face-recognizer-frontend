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
          <table-row
            v-for="d in users"
            v-bind:key = "d.index"
            :index = "d.index"
            :name = "d.name"
            :access = "d.access"
          ></table-row>
        </tbody>
      </table>

      </div>
  </div>
</template>

<script>
import tableRow from '~/components/UsersTableRow'
import checkAdmin from './../checkAdmin'

export default {
  layout : 'adminPanel',
  asyncData (context) {
    checkAdmin(context)
  },

  components : {
    tableRow
  },

  data(){
    return{
      users : [
        {index : 1, name : "hamid", access: "کاربر"},
        {index : 2, name : "reza", access: "کاربر"},
        {index : 3, name : "mamad", access: "کاربر"},
      ]
    }
  }

}
</script>
