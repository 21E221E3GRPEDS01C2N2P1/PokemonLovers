<template>
  <div class="pokedex">
    <span class="cardpokedex" v-for="(pokemon, index) in pokemonList" :key="index">
      <p>{{ pokemon.id }}: {{ pokemon.name }}</p>
      <img :src="imageUrl + pokemon.id + '.gif'" alt="Imagem do pokemon">      
    </span>
  </div>
</template>

<script>
  export default {
    props: [
        'imageUrl',
        'apiUrl'
    ],
    data: () => {
      return {
        pokemonList: [],
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
        apiUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=150/'
      }
    },
    methods: {
      fetchData() {
        let req = new Request(this.apiUrl)
        fetch(req).then((resp) => {
          if(resp.status === 200) {
            return resp.json()
          }
        }).then((data) => {
          data.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')
            .filter(function(part) { return Boolean(part) }).pop()
            this.pokemonList.push(pokemon)
          })
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {
    }
  }
</script>

<style>
.pokedex {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 510px;
}
.cardpokedex {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 var(--bs-secondary);
  margin: 8px;
}

.cardpokedex:hover {
  box-shadow: 0 4px 8px 0 var(--bs-secondary);
}
</style>
