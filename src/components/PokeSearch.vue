<template>
    <form @submit.prevent="setPokemonUrl" class="poke-form form-inline my-2 my-lg-0">
      <input v-model="searchValue" class="search-pokedex dex-form form-control form-control-lg" type="search" placeholder="Search by Name or Number" aria-label="Search">
      <button @click="setPokemonUrl" class="dex-btn btn btn-lg my-2 my-sm-0" type="submit">Search</button>
    </form>
</template>

<script>
export default {
  props: [
    'apiUrl'
  ],
  data: () => {
    return {
      searchValue: ''
    }
  },
  methods: {
    setPokemonUrl (url) {
      if (this.searchValue !== '') {
        this.$emit('setPokemonUrl', this.apiUrl + (this.searchValue).toLowerCase())
        console.log(url)
      }
    }
  }
}
</script>