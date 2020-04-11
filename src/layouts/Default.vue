<template>
  <div class="layout">
    <Navbar></Navbar>
    <main>
      <transition name="fade" mode="out-in">
        <slot/>
      </transition>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/Footer.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
    FooterComponent
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  margin: 0;
}

.layout {
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
