<template>
 <div class="container">
    <div class="poke-breadcrumb">
      <router-link class="sublinhado" to="/dashboard">Dashboard</router-link>
      <span> &#8250; </span>
      <router-link class="sublinhado" to="/profile">{{ user.data.displayName }}</router-link>
    </div>     
    <div class="accordion faq" role="tablist">
      <h1 class="alignment h1 mb-3 fw-normal">Profile</h1>
    </div>
    <div class="profile-container">
      <div class="profile-container-content">
        <div class="profile-container-content-avatar">
          <h3 class="h6 fw-normal profile-container-status">Pokémon Master</h3>
          <img class="user-icon" src="../assets/user-icon.svg" alt="Neutral user icon" />
        </div>
        <div class="profile-container-content-text">
          <h3 class="h3 fw-normal">{{ user.data.displayName }}</h3>
          <h5 class="h5 fw-normal">
             Level: 
             <span v-if="$store.state.tokens >= 0 && $store.state.tokens < 100"> Rookie</span>
             <span v-else-if="$store.state.tokens >= 100 && $store.state.tokens < 200"> Trainer</span>
             <span v-else>Master</span>
           </h5>
          <h7 class="h7 fw-normal">My Team: {{ $store.state.team }}</h7>
          <br/>
          <button class="button-blue-yellow"><router-link to="/dashboard/profile/editprofile"><font-awesome-icon icon="pen" /> Edit Profile</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {},
  computed: {
      ...mapGetters({
      user: "user"
  }),
  },
  data() {
    return {
      displayName: "",
      email: "",
      username: "",
    };
  },
  methods: {},
};
</script>