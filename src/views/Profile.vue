<template>
  <div>
    <!--<p
      v-for="(value, index) in content"
      :id="`content-${index}`"
      :key="index"
      contenteditable
      @input="event => onInput(event, index)"
      @keyup.delete="onRemove(index)"
    />-->
  </div>
</template>

<script>
//import {fb} from '../firebase';
//import firebase from "firebase/app";
//import "firebase/auth";

export default {
  name: 'Profile',
  components: {
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