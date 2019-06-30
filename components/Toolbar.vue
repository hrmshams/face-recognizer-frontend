<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      load
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {
  props : ['title'],
  data(){
    return {
      
    }
  }
}
</script>
