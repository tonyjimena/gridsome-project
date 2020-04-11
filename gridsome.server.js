// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')


module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')

    const collection = actions.addCollection({
      typeName: 'Characters'
    })
    

    for (const item of data["results"]) {
      collection.addNode({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        image: item.image
      })
    }
    
  })


  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
      createPage({
        path: '/primer/',
        component: './src/components/Primer.vue'
      })
      createPage({
        path: '/cards/',
        component: './src/components/Cards.vue'
      })
      
    })
}

