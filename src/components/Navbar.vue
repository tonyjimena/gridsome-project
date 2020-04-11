<template>
  <div>
     <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <g-link to="/">
          <img id='logo' src="../assets/logo.png" alt="Vue.js PWA">
        </g-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <g-link to="/primer" class="nav-link">Go to primer</g-link>
          </b-nav-item>
          <!-- <b-nav-item>
            <g-link to="/form" class="nav-link">Go to form</g-link>
          </b-nav-item> -->
          <b-nav-item>
            <g-link to="/cards" class="nav-link">Rick And Morty</g-link>
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" name="search" v-model='criteria'></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import bus from '@/busdata.js' //importamos el bus de datos ke vamos a usar para emitir un evento a un hermano
export default {
  name: 'Navbar',
  data () {
    return {
      criteria: ''
    }
  },
  watch: {
    criteria() {
      this.$emit('search', this.criteria)
          bus.$emit('search', this.criteria)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#logo {
  width: 50px;
}
</style>
