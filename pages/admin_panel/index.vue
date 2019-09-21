<template>
  <v-container>welcome to admin panel</v-container>
</template>

<script>
export default {
  layout : 'adminPanel',
  middleware : 'auth',
  asyncData ({app, store, redirect}) {

    const scope = app.$cookies.get('scope')
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
