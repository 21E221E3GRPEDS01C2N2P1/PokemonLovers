<template>
  <div class="container-fluid m-0 p-0">
    <div class="row m-0 p-0">
      <!-- DASHBOARD -->
      <div class="col order-2 order-sm-1 poke-dashboard">
        <div class="container">
          <div class="poke-breadcrumb">
            <router-link class="sublinhado" to="/">Home</router-link>
            <span> &#8250; </span>
            <router-link class="sublinhado" to="/dashboard">Dashboard</router-link>
          </div>
          <div class="row m-0 py-5 dashboard-columns">
            <div class="accordion faq" role="tablist">
              <h3 class="alignment h3 mb-3">Profile</h3>
              <br/>
            </div>
            <br/>
          </div>
          <div class="row dashboard-columns">
            <div class="col-lg-4">
              <div class="poke-card">
                <div class="poke-card-top">
                  <h5 class="h5 mb-3">PokéQuiz #1</h5>
                  <h6 class=" h6 mb-2 text-muted">Difficulty: Easy</h6>
                  <p>Get tokens, exchange them for Pokémon and start building your team!</p>
                </div>
                <span class="poke-card-divider"><span class="poke-card-divider-button"></span></span>
                <div class="poke-card-bottom">
                  <button @click="redirectE()" class="quiz-info-button w-50 btn poke-primary-outlined">Go!</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="poke-card">
                <div class="poke-card-top">
                  <h5 class="h5 mb-3">PokéQuiz #2</h5>
                  <h6 class="mb-2 text-muted">Difficulty: Medium</h6>
                  <p>Get tokens, exchange them for Pokémon and start building your team!</p>
                </div>
                <span class="poke-card-divider"><span class="poke-card-divider-button"></span></span>
                <div class="poke-card-bottom">
                  <button @click="redirectM()" class="quiz-info-button w-50 btn poke-primary-outlined">Go!</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="poke-card">
                <div class="poke-card-top">
                  <h5 class="h5 mb-3">PokéQuiz #3</h5>
                  <h6 class="mb-2 text-muted">Difficulty: Hard</h6>
                  <p>Get tokens, exchange them for Pokémon and start building your team!</p>
                </div>
                <span class="poke-card-divider"><span class="poke-card-divider-button"></span></span>
                <div class="poke-card-bottom">
                  <button @click="redirectH()" class="quiz-info-button w-50 btn poke-primary-outlined">Go!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- // PERFIL -->
      <div class="poke-profile-wrap col-lg-3 col-md-4 col-sm-5 order-1 order-sm-2 p-0">
        <div class="poke-profile">
          <div class="dashboard-columns">
            <div class=" w-100 mx-auto px-5" >
              <span class="poke-profile-avatar-background">
                <img class="user-icon" src="../assets/user-icon.svg">
              </span>
              <h3 class="poke-profile-name h3 mb-3">{{user.data.displayName}}</h3>
              <div class="poke-profile-nav">
                <div class="row m-0 p-0">
                  <div class="col">
                    <p><font-awesome-icon icon="coins" />{{ $store.state.tokens }}</p>
                    <span>My tokens</span>
                  </div>
                  <div class="col">
                    <p class="mb-3" v-if="$store.state.tokens >= 0 && $store.state.tokens < 100"> Rookie</p>
                    <p class="mb-3" v-else-if="$store.state.tokens >= 100 && $store.state.tokens < 200"> Trainer</p>
                    <p class="mb-3" v-else>Master</p>
                    <span>Level</span>
                  </div>
                </div>
                <div class="row m-0 p-0">
                    <router-link class="col dash-links" to="/dashboard/profile">
                    <p><font-awesome-icon icon="user" /></p>
                    <span>My Profile</span>
                    </router-link>
                    <router-link class="col dash-links" to="/dashboard/profile/searchprofile">
                      <p><font-awesome-icon icon="search" /></p>
                      <span>Search Profile</span>
                    </router-link>
                </div>
              </div>
              <div class="py-5 text-center">
                  <router-link class="poke-secondary-outlined dash-links" to="/dashboard/pokedex"><font-awesome-icon icon="star" />Pokedex</router-link>
              </div>
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
<style>



</style>