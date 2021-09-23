<template>
  <div>
    <div class="poke-breadcrumb">
      <router-link class="sublinhado" to="/dashboard">Dashboard</router-link>
      <span> &#8250; </span>
      <router-link class="sublinhado" to="/dashboard/pokedex">Pokédex</router-link>
    </div>
    <div>
      <PokeSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl"/>
      <PokeDetail  v-if="showDetail" :pokemonUrl="pokemonUrl" :imageUrl="imageUrl" @closeDetail="closeDetail"/>
    </div>
    <div class="pokedex">
      <span class="cardpokedex" v-for="(pokemon, index) in pokemonList" :key="index">
        <p>{{ pokemon.id }}: {{ pokemon.name }}</p>
        <img :src="imageUrl + pokemon.id + '.gif'" alt="Imagem do pokemon">      
      </span>
    </div>
    <button class="quiz-info-button w-50 btn btn-lg poke-secondary"><router-link to="/dashboard">Back to Dashboard</router-link></button>
  </div>
</template>

<script>
import PokeSearch from '../components/PokeSearch.vue';
import PokeDetail from '../components/PokeDetail.vue';

  export default {
    components: {
      PokeSearch,
      PokeDetail
    },
    data: () => {
      return {
        pokemonList: [],
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
        apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
        apiUrlAll: 'https://pokeapi.co/api/v2/pokemon/?limit=150/',
        pokemonUrl: '',
        showDetail: false
      }
    },
    methods: {
      fetchData() {
        let req = new Request(this.apiUrlAll)
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
      },
      setPokemonUrl (url) {
        this.pokemonUrl = url
        this.showDetail = true
      },
      closeDetail () {
        this.pokemonUrl = ''
        this.showDetail = false
      },
      redirect() {
        this.$router.push('Dashboard');
      },
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
