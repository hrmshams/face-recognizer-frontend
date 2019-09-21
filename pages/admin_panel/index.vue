<template>
  <v-container>welcome to admin panel</v-container>
</template>

<script>
import checkAdmin from './checkAdmin'
export default {
  layout : 'adminPanel',
  middleware : 'auth',

  asyncData (context) {
    checkAdmin(context)
  }
}
</script>
