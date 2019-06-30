<template>
    <v-container>
    <div>results of {{$route.params.id}} : </div>
    </v-container>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params)
    }
}
</script>

