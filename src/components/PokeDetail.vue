<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <div v-if="pokemon" class="image">
        <img :src="imageUrl + pokemon.id + '.gif'" alt="">
      </div>
      <div v-if="pokemon" class="data">
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left evn-title">Base Experience</div>
          <div class="right evn-desc">{{ pokemon.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left evn-title">Height</div>
          <div class="right evn-desc">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left evn-title">Weight</div>
          <div class="right evn-desc">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div class="type"
            v-for="value in pokemon.types" :key='value'>
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div class="ability" v-for="value in pokemon.abilities" :key='value'>
            {{ value.ability.name }}
          </div>
        </div>
      </div>
      <h2 v-else>The pokemon was not found</h2>
      <button class="close evn-title" @click="closeDetail">close</button>
    </div>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
export default {
  props: [
    'pokemonUrl',
    'imageUrl'
  ],
  data: () => {
    return {
      show: false,
      pokemon: {}
    }
  },
  methods: {
    fetchData () {
      var req = new Request(this.pokemonUrl)
      fetch(req)
        .then((res) => {
          if (res.status === 200) {
            return res.json()
          }
        })
        .then((data) => {
          this.pokemon = data
          this.show = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    closeDetail () {
      this.$emit('closeDetail')
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 90px 10px 10px;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: .7);
    .detail-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 100%;
      max-width: 510px;
      padding: 50px 0 0;
      background-color: #fff;
      border-radius: 5px;
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -70px;
        width: 120px;
        height: 120px;
        background-color: black;
        border-radius: 20%;
        overflow: hidden;
      }
      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 40px;
        .property {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid lightslategrey;
          margin-bottom: 10px;
          .left { float: left; }
          .right { float: right; }
        }
        h3 {
          width: 90%;
          max-width: 400px;
          border-bottom: 1px solid lightslategrey;
        }
        .types, .abilities {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 90%;
          max-width: 400px;
          .type, .ability {
            margin: 0 10px 10px 0;
            padding: 5px 15px;
            border-radius: 20px;
            color: white;
            font-size: 17px;
            letter-spacing: 2px;
            text-transform: capitalize;
            word-wrap: none;
            word-break: keep-all;
          }
          .type {
            background-color: #34495e;
          }
          .ability { background-color: #C73015; }
        }
      }
      .close {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #333;
        color: #efefef;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    i {
      font-size: 2rem;
      color: #efefef;
    }
  }
</style>