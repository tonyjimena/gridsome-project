<template>
  <Layout>
    <Primer key="1"/>
  </Layout>
</template>

<script>
import Primer from '../components/Primer'
export default {
    name: 'PrimerPage',
    components: {
        Primer
    },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.front {
  
    text-align: center;

}
</style>
