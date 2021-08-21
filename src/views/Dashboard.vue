<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
          </div>
        </div>
      </div>
      <div class="row" style="margin: auto; display: flex; justify-content: center;">
        <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PokéQuiz #1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Difficulty: Easy</h6>
                <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
                <button @click="$router.push('MockTest')" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
              </div>
            </div>
          </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PokéQuiz #2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Difficulty: Medium</h6>
              <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
              <button @click="$router.push('MockTest')" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PokéQuiz #3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Difficulty: Hard</h6>
              <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
              <button @click="redirect()" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: 'Dashboard',
    components: {},
    computed: {
        ...mapGetters({
        user: "user"
    })
  },
    methods: {
        redirect() {
          this.$router.push('MockTest');
        }
    }
};
</script>