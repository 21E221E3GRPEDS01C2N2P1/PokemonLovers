<template>
  <div class="container">
    <div class="row justify-content-center form-spacing">
      <p><router-link class="sublinhado" to="/">Home</router-link> &#8250; <router-link class="sublinhado" to="/dashboard">Dashboard</router-link></p>
      <div class="accordion faq" role="tablist">
        <h1 class="alignment h1 mb-3 fw-normal">Profile</h1>
        <br/>
      </div>
      
      <div class="col-md-9">
      <div class="row dashboard-columns">
        <br/>
        <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title h5 mb-3 fw-normal">PokéQuiz #1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Difficulty: Easy</h6>
                <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
                <button @click="redirectE()" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
              </div>
            </div>
          </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title h5 mb-3 fw-normal">PokéQuiz #2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Difficulty: Medium</h6>
              <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
              <button @click="redirectM()" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title h5 mb-3 fw-normal">PokéQuiz #3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Difficulty: Hard</h6>
              <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
              <button @click="redirectH()" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 alignment">
          <div class="card bg-light dashboard-columns">
              <div class="card-body">
                <img class="user-icon" src="../assets/user-icon.svg">
                <h3 class="h3 mb-3 fw-normal">{{user.data.displayName}}</h3>
                <h5 class="h5 mb-3 fw-normal">Level: Rookie</h5>
                <p><font-awesome-icon icon="coins" /> My tokens: {{ $store.state.tokens }}</p>
                <br/>
                <router-link class="dash-links" to="/dashboard/profile"><font-awesome-icon icon="user" /> My Profile</router-link>
                <hr/>
                <router-link class="dash-links" to="/dashboard/profile/searchprofile"><font-awesome-icon icon="search" /> Search Profile</router-link>
                <hr/>
                <router-link class="dash-links" to="#"><font-awesome-icon icon="star" /> My Team</router-link>
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
        redirectE() {
          this.$router.push('/dashboard/MockTestEasy');
        },
        redirectM() {
          this.$router.push('/dashboard/MockTestMedium');
        },
        redirectH() {
          this.$router.push('/dashboard/MockTestHard');
        }
    }
};
</script>