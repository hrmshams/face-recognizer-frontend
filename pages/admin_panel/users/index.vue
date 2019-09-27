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
            :isAdmin = "d.is_admin"
            :id = "d.id"
            @deleteRow = "deleteUserRow"
          ></table-row>
        </tbody>
      </table>

      </div>
  </div>
</template>

<script>
import tableRow from '~/components/UsersTableRow'
import checkAdmin from './../checkAdmin'

import {getAllUsers, deleteUser, PromoteDemoteUser} from '~/controller/index'

export default {
  layout : 'adminPanel',
  asyncData (context) {
    checkAdmin(context)
  },

  components : {
    tableRow
  },

  mounted(){
    getAllUsers(res=>{
      for (let i=0; i<res.length; i++){
        this.users.push({
          index : i,
          name : res[i].username,
          is_admin : res[i].is_admin,
          id : res[i].id
        })
      }
    }, err=>{
      console.log('some error happened in getting users : ' + err )
    })
  },

  data(){
    return{
      users : []
    }
  },

  methods : {
    deleteUserRow(id){
      for (let i=0; i<this.users.length; i++){
        if (this.users[i].id === id){
          this.users.splice(i,1)
          return
        }
      }
    }
  }

}
</script>
