<template>
  <Layout>
    <div v-for="edge in $page.allCharacters.edges" :key="edge.node.id">
      <h2>{{ edge.node.id }}</h2>
      <h3>{{ edge.node.name }}</h3>
      <h4>{{ edge.node.status }}</h4>
      <h5>{{ edge.node.species }}</h5>
      <img :src="edge.node.image" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    //title: 'About us'
  }
}
</script>

<page-query>
query {
  allCharacters {
    edges {
      node {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
}
</page-query>
