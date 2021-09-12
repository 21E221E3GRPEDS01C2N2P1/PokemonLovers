<template>
    <!-- <div style="text-align: center;">
      <router-link class="sublinhado" to="/profile">{{ user.data.displayName }}</router-link> &#8250; <router-link class="sublinhado" to="/editprofile">Edit Profile</router-link>
    </div> -->

    <!-- <div class="profile-container">
      <div class="profile-container-content">
        <div class="profile-container-content-avatar">
          <h3 class="h6 fw-normal profile-container-status">Mestre Pokémon</h3>
          <img class="user-icon" src="../assets/user-icon.svg" />
        </div>
        <div class="profile-container-content-text">
          <h3 class="h3 fw-normal">{{ user.data.displayName }}</h3>
          <h5 class="h5
           fw-normal">Level: Rookie</h5>
          <button class="button-blue-yellow"><router-link to="/editprofile"><font-awesome-icon icon="pen" /> Edit Profile</router-link></button>
        </div>
      </div>
    </div> -->

    <div class="container">
          <p><router-link class="sublinhado" to="/profile">{{ user.data.displayName }}</router-link> &#8250; <router-link class="sublinhado" to="/editprofile">Edit Profile</router-link></p>
          <div class="accordion faq" role="tablist">
            <h1 class="alignment h1 mb-3 fw-normal">Edit Profile</h1>
            <br/>
          </div>
          
          <form class="col-8 mx-auto" action="" @submit.prevent="onFormSubmit" method="POST" autocomplete="off">
              <div class="form-floating form-spacing">
                  <input type="text" class="form-control" name="name" id="name" placeholder="New user" value autofocus v-model="editprofile.name">
                  <label for="email">New user</label>
              </div>
              <div class="form-floating form-spacing">
                  <b-form-file v-model="file" class="mt-3" plain></b-form-file>
              </div>
              <br/>
              <div class="row form-spacing2">
                <div class="col-md-6">
                  <button class="btn btn-lg poke-secondary enter-btn " type="submit" ><router-link to="/profile">Save Changes</router-link></button>
                </div>
              </div>
      </form>
    </div>

    

</template>

<script>
//import {fb} from '../firebase';
//import firebase from "firebase/app";
//import "firebase/auth";
import { mapGetters } from "vuex";
import { db } from '../main';

export default {
  name: "EditProfile",
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
      editprofile: {

      },
      file: null
    };
  },
  /*mounted() {
    this.updateAllContent();
  },*/
  methods: {
    onFormSubmit(event) {
        event.preventDefault()
        db.collection('editprofile').add(this.editprofile).then(() => {
            alert("Profile edited successfully!");
            this.editprofile.name = ''
            this.editprofile.email = ''
            this.editprofile.avatar = ''
            
        }).catch((error) => {
            console.log(error);
        });
    }
  },
};
</script>