<template>
     <tr>
          <th scope="row">{{index}}</th>
          <td>{{name}}</td>
          <td>{{access}}</td>
          <td>
               <button type="button" class="btn btn-danger">حذف کاربر</button>
               <button type="button" class="btn btn-info">ارتقا به مدیر</button>
          </td>
     </tr>
</template>

<script>
export default {
     props : {
          index : Number,
          name : String,
          access : String,         
     },

     // data(){
     //      return {

     //      }
     // }
     methods : {

     }
     
}
</script>
