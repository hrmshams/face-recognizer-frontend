<template>
     <tr>
          <th scope="row">{{index}}</th>
          <td>{{name}}</td>
          <td>{{is_admin ? scopeText[1] : scopeText[0]}}</td>
          <td>
               <button 
                    type="button" 
                    class="btn btn-danger" 
                    @click="deleteUserOnPress"
               >
                    حذف کاربر
               </button>
               <button 
                    type="button" 
                    class="btn" 
                    :class="this.is_admin ? 'btn-warning' : 'btn-info'" 
                    @click="promoteDemoteOnPress"
               >
                    {{is_admin ? promoteDemoteText[1] : promoteDemoteText[0]}}
               </button>
          </td>
     </tr>
</template>

<script>
import {promoteDemoteUser, deleteUser} from '~/controller/index'
export default {
     props : {
          id : Number,
          index : Number,
          name : String,
          isAdmin : Number,
     },

     data(){
          return {
               is_admin : false,
               scopeText : ['کاربر', 'کاربر - ادمین'],
               promoteDemoteText : ['ارتقا به ادمین', 'تبدیل به کاربر'],
          }
     },
     mounted(){
          this.is_admin = this.$props.isAdmin
     },
     methods : {
          changeScope(is_admin){
               this.is_admin = is_admin
          },
          promoteDemoteOnPress(){
               const isPromote = this.is_admin ? false : true
               
               promoteDemoteUser(this.id, isPromote, (res)=>{
                    if (res.status === 1)
                         this.is_admin = res.is_admin
                    else
                         console.log('couldnt find the user')
               }, err=>{
                    console.log('some error in server ' + err)
               })
          },
          deleteUserOnPress(){
               deleteUser(this.id, res=>{
                    if (res.userDeleted){
                         this.$emit('deleteRow', this.id)
                    }
               }, err=>{
                    console.log('some error happened in deleting user ' + err)
               })
          }
     }
     
}
</script>
