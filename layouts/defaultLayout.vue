<template>
    <div>
        <Header></Header>
        <v-app>
        <nuxt/>
        </v-app>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/Header'
import Footer from './../components/Footer'
export default {
    components : {
        Header,
        Footer
    }

}
</script>

