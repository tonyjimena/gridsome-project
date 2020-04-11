<template>
  <div class="primer">
    <b-jumbotron>
      <template v-slot:header>BootstrapVue</template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <hr class="my-4">

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <b-button variant="primary" @click="alert">Do Something</b-button>
      <b-button variant="success">Do Something Else</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Primer',
  data () {
    return {
     
    }
  },
  methods: {
    alert() {
      alert('alertaa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.display-3 {
    font-size: 3.5rem;
    font-weight: 100;
    line-height: 1.2;
}

</style>
