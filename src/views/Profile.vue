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
          <h3 class="h6 fw-normal profile-container-status">Mestre Pokémon</h3>
          <img class="user-icon" src="../assets/user-icon.svg" />
        </div>
        <div class="profile-container-content-text">
          <h3 class="h3 fw-normal">{{ user.data.displayName }}</h3>
          <h5 class="h5
           fw-normal">Level: Rookie</h5>
           <br/>
          <button class="button-blue-yellow"><router-link to="/dashboard/profile/editprofile"><font-awesome-icon icon="pen" /> Edit Profile</router-link></button>
        </div>
      </div>
    </div>

    <!-- <div class="col-md-3 alignment">
          <h3 class="h5 mb-3 fw-normal">Mestre Pokémon</h3>
          <img class="user-icon" src="../assets/user-icon.svg" />
          <h3 class="h3 mb-3 fw-normal">{{ user.data.displayName }}</h3>
          <h5 class="h5 mb-3 fw-normal">Level: Rookie</h5>
          <br />
          <button class="button-blue-yellow"><router-link class="dash-links" to="/editprofile"><font-awesome-icon icon="pen" /> Edit Profile</router-link></button>
    </div> -->
  </div>
</template>

<script>
//import {fb} from '../firebase';
//import firebase from "firebase/app";
//import "firebase/auth";
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
  /*mounted() {
    this.updateAllContent();
  },*/
  methods: {
    /*onInput(event, index) {
      const value = event.target.innerText;
      this.content[index].value = value;
    },
    onRemove(index) {
      if (this.content.length > 1 && this.content[index].value.length === 0) {
        this.$delete(this.content, index);
        this.updateAllContent();
      }
    },
    updateAllContent() {
      this.content.forEach((c, index) => {
        const el = document.getElementById(`content-${index}`);
        el.innerText = c.value;
      });
    },*/
    /*created(){
        let user = firebase.auth().currentUser;
        this.email = user.email;
  }*/
    /*getUserProfile() {
  // [START auth_get_user_profile]
  const user = firebase.auth().currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const username = user.username;
    //const photoURL = user.photoURL;
    //const emailVerified = user.emailVerified;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  // [END auth_get_user_profile]
}*/
  },
};
</script>