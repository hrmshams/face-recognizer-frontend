<template>
    <div id="main-container" v-if="fltr===false">
        <div :style="{'color':fcolor}">
            <span>{{title}}</span>
        </div>
        <div id="line-container">
            <div id="line" :style="{'background-color':fcolor}"></div>
        </div>
    </div>
    <div id="main-container" v-else>
        <div id="line-container">
            <div id="line" :style="{'background-color':fcolor}"></div>
        </div>
        <div :style="{'color':fcolor}">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        title : String,
        color : String,
        ltr : Boolean,
    },
    data(){
        return {
            fcolor : "",
            fltr : ""
        }
    },
    mounted(){
        this.fcolor = this.$props.color ? this.$props.color : "#303030"
        this.fltr = this.$props.ltr ? this.$props.ltr : false

    },
}
</script>

<style scoped>
#main-container{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left : 5px;
    margin-right : 5px;
}
#line-container { 
    display: flex;
    flex-direction: column;
    flex : 1;
    /* background-color: blueviolet; */
    justify-content: center;
    margin-right: 5px;
    margin-left: 5px;
}
#line {
    height : 1px;
}
</style>
