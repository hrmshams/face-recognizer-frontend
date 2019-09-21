<template>
  <v-container>welcome to admin panel</v-container>
</template>

<script>
export default {
  layout : 'adminPanel',
  middleware : 'auth',
  asyncData ({store, redirect}) {
    let {scope, token} = store.state
    if (scope){
      if (!scope.includes('admin')){
        redirect('/login')
      }
    }else {
      redirect('/login')      
    }
  }
}
</script>
