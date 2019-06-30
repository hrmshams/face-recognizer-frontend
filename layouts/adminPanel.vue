<template>
  <nav>
    <v-app>

    <v-toolbar dark color="primary" >
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class = "white-tint">پنل مدیریت</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>خروج</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    
    <nuxt/>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="item.onPress"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </v-app>
  </nav>

</template>


<script>
import consts from '~/static/consts.js'

export default {
    data () {
      const items = consts.drawer.items
      return {
        drawer: null,
        items: [
          { title: items[0].title, icon: items[0].icon, onPress : ()=>{
            this.$router.push('/admin_panel/crawl')
          }},
          { title: items[1].title, icon: items[1].icon, onPress : ()=>{
            this.$router.push('/admin_panel/learningAI')
          }},
          { title: items[2].title, icon: items[2].icon, onPress : ()=>{
            this.$router.push('/admin_panel/users')
          }},
        ],
        mini: false,
        right: null,
        drawerIndexSelected : 0
      }
    }
}
</script>
