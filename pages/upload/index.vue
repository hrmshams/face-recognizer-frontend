<template>
     <div class = "container centralize">
          <gap height="30"></gap>
          <h4 class="mb-3">عکس مورد نظر خود را دراینجا آپلود کرده و منتظر نتایج بمانید</h4>
          <gap height="30"></gap>
          <form action="/" method="post" enctype="multipart/form-data" class="vertical">
               <input type="file" name="photo" class="btn btn-light"/>
               <gap height="10"></gap>
               <input type="submit" name="Submit" value="آپلود عکس" class="btn btn-primary"/>
          </form>
     </div>
</template>

<script>
export default {
    layout : 'defaultLayout',
     
}
</script>

<style scoped>
.vertical{
     display: flex;
     flex-direction: column;
}
</style>
