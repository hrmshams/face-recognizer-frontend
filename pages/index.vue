<template>
  <v-container>
    <div>
      <v-form 
        @submit.prevent="searchBtnPress"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="search"
          label="Name"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="'#000'"
          @click="searchBtnPress"
        >
          search
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  layout : 'toolbarLayout',
  data(){
    return {
      valid : true,
      search : ''
    }
  },
  components: {
  },
  methods: {
    searchBtnPress : function(){
      // console.log(this.search)
      this.$router.push(`results/${this.search}`)
    }
  }
}
</script>

<style scoped>
</style>
