<template>
  <div id="app">
    <Navbar v-on:search='onSearch'></Navbar>
    <main>
      <transition name="fade" mode="out-in">
      <router-view :datos="datos"></router-view>
      </transition>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
//import Navbar from '@/components/Navbar'
import FooterComponent from '@/components/Footer'

//import Loading from '@/components/Loading'
import ErrorCompon from '@/components/Error'

export default {
  components:{
    //Navbar,
    //ASYNC no esta funcionando bien
    FooterComponent,
     /*FooterComponent: () => ({
       component: import('@/components/Footer'),
       delay: 4000,
       timeout: 50000,
       loading: Loading,

       error: ErrorCompon
     }),*/

    Navbar: () => ({component: import('@/components/Navbar')}),
  },


  name: 'app',
 data () {
    return {
      datos: {
        nombre: 'tony',
        apellidos: 'jimena'
      },
    }
  },
  methods: {
    onSearch(searchCriteria) {
      console.log('Busqueda emitida a padre: ', searchCriteria)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 100px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
