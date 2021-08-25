<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 5%;">
      <div class="col-md-9">
        <div class="row" style="display: flex; justify-content: center;">
          <div class="col-md-12">
          <!--<div class="card">
            <div class="card-header">Think something? Say something</div>
              <div class="card-body">-->
            <!--<div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>-->
            <b-form-textarea class="textarea" id="story" name="story" rows="1" max-rows="10" cols="15" placeholder="Think something? Say something">
            </b-form-textarea>
            <br/>
          <!--</div>
        </div>-->
        </div>
        <div class="col-md-4">
        <button class="quiz-info-button w-50 btn poke-secondary">Publish</button></div>
      </div>
      <div class="row" style="margin: auto; display: flex; justify-content: left; margin-top: 5%;">
        <h1 style="text-align: center;">My Challenges</h1>
        <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PokéQuiz #1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Difficulty: Easy</h6>
                <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
                <button @click="$router.push('MockTest')" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
              </div>
            </div>
          </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PokéQuiz #2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Difficulty: Medium</h6>
              <p class="card-text">Get tokens, exchange them for Pokémon and start building your team!</p>
              <button @click="$router.push('MockTest')" class="quiz-info-button w-50 btn poke-secondary">Go!</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
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
    <div class="col-md-3" style="text-align: center;">
          <div class="card bg-light" style="margin: auto; display: flex; justify-content: center;">
              <div class="card-body">
                <img class="user-icon" src="../assets/user-icon.svg">
                <h3>{{user.data.displayName}}</h3>
                <h5>Level: Rookie</h5>
                <br/>
                <p><font-awesome-icon icon="user" /> My Profile</p>
                <hr/>
                <p><font-awesome-icon icon="hashtag" /> My Posts</p>
                <hr/>
                <p><font-awesome-icon icon="envelope" /> Inbox</p>
                <hr/>
                <p><font-awesome-icon icon="cog" /> Settings</p>
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