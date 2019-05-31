<template>
  <section class="container">
    <div>
        {{title}}
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Hello World!'
    }
  },

  // middleware : 'testmid',
  
  // async asyncData (context) {
  //   return new Promise(function(resolve, reject){
  //     setInterval(function(){
  //       resolve({
  //         title : "hello there"
  //       })
  //     }, 1000)
  //   })
  // }
}
</script>
