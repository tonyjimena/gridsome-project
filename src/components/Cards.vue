<template>
  <div class="container">
      <transition name="fade" mode="out-in">
        <div key="1" v-if="show && characters != null" class="row">
          <div class="col-md-4 columna" v-for="character in characters" v-bind:key="character.id">
            <div class="card mb-3">
              <b-card v-bind:title=" character.name" v-bind:img-src=" character.image " img-alt="Image" img-top>
                <b-card-text>
                  {{character.name }}
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">{{character.status | uppercase }}</small>
                </template>
              </b-card>
            </div>
          </div>
        </div>
        <div class='error' key="2" v-else-if="errorApi == 404">
          <h1>Error {{errorApi}}</h1>
          <h2>Los criterios de busqueda no corresponden con ningun dato</h2>
          <b-button variant="info" @click="{errorApi = null, criteria = ''}">Reload</b-button>
        </div>
        <div class="vortex" key="3" v-else>
          <img src="../assets/vortex.gif" alt="vortex">
        </div>
      </transition>
  </div>
</template>

<script>

import axios from'axios'
import bus from '@/busdata.js' //importamos el bus de eventos ke vamos a escuchar del hermano

export default {
  name: "Cards",
    data() {
      return {
        characters: null,
        criteria: '',
        show: false,
        errorApi: null
        }
      },

    methods: {
      getCharacters() {
        axios
          .get('https://rickandmortyapi.com/api/character', {
            
          })
          .then(response => (this.characters = response.data.results))
      },

      findCharacters(criterio) {
        axios
          .get('https://rickandmortyapi.com/api/character', {
            params: {
              name: criterio,
            }
          })
          .then(response => (
            this.characters = response.data.results
            
          ))
          .catch(error => (
            this.errorApi = error.response.status,
            this.characters = null
            ))
      }
    },

    filters: {
      uppercase: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },

    created() {
      bus.$on('search', criteria => {
        this.criteria = criteria
      })
    },

    mounted() {
      this.getCharacters()
      setTimeout(() => {
          this.show = true
      }, 2000);
    },
    beforeUpdate() {

    },
    updated() {
      if (this.criteria != '') {
        this.findCharacters(this.criteria)
        }else {
          this.getCharacters()
          }
    },
}
</script>

<style>
.error {
  margin-top: 40px;
  height: 100vh;
}
.vortex {
  margin-top: 40px;
  height: 100vh;
}
.card {
  margin: 10px;
}
</style>