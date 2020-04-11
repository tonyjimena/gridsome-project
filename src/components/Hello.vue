<template>
  <div class="hello">
    <h1>{{ title }}</h1>
      <h2>{{ nombreCompleto }}</h2>
        <label>Añadir</label>
          <form @submit.prevent="onSubmit">
              <input v-model="nNombre">
              <input v-model="nApellido">
            <input type="submit"/>
          </form>
        <p>{{nNombre}}</p>

      <transition name="fade" mode="out-in">
        <div class="listView" key="1" v-if="update == false">
          <ul id="listaDato">
            <li v-for="(dato, index) in datos" v-bind:key="index">{{ dato }}</li>
            <button @click="update = true">Editar</button>
          </ul>
        </div>
        <div class="listUp" key="2" v-else>
          <ul id="listaUpdate">
            <form @submit.prevent="updateDato">
                <input v-model="nombre">
                <input v-model="apellidos">
                <input type="submit"/>           
            </form>      
          </ul>
        </div>

      </transition>

        <label>Eliminar</label>
          <form @submit.prevent="removeDato">
            <input v-model="remove">
            <input type="submit"/>
          </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    datos: {
      type: Object,
    }
  },
  data () {
    return {
      msg: 'Your Vue.js PWA',
      //datos: ['tony', 'jimena'],
      nNombre: '',
      nApellido: '',
      remove: '',
      update: false,
      nombre: this.datos.nombre,
      apellidos: this.datos.apellidos
    }
  },
  computed: {
    title() {return `Welcome to ${this.msg}`},
    nombreCompleto() {

        if (this.datos.nombre && this.datos.apellidos) {
          return `Nombre: ${this.datos.nombre} ${this.datos.apellidos} `
        }else {
          return `Faltan datos del nombre`
        }
      }
  },
  watch: {
    nombre(newValue) {
      console.log('Nuevo valor' + newValue)
    }
  },
  methods: {
    onSubmit(){
    
    },
    removeDato(){
      var rem = this.remove
        if (this.datos.nombre == rem){
        this.datos.nombre = ''
        this.datos.apellidos = ''
        }
    },
    updateDato() {
      this.datos.nombre = this.nombre,
      this.datos.apellidos = this.apellidos
      this.update = false
    }
  },
  mounted() {
    console.log('hello mounted')
  },
  beforeMount(){
    console.log('Beforemount')
  },
  updated(e) {
    console.log('Updated' + e)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

</style>
