<template>
    <div class="container">
        <div class="row">
            <div class="shadow-sm p-2 m-2 rounded object" v-for="d in data" v-bind:key="d">
                <p>{{d}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        data : Array
    }

}
</script>

<style scoped>
.object{
    background-color: white;
}
.main-conatiner{
    display: flex;
    flex-wrap: wrap;
}
</style>