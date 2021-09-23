<template>
  <div id="signup-form" class="form-signin">
    <div class="container-fluid">
      <div class="container">
        <div class="poke-breadcrumb">
          <router-link class="sublinhado" to="/">Home</router-link>
          <span> &#8250; </span>
          <router-link class="sublinhado" to="/signup">Sign Up</router-link>
        </div>
        <div class="row m-0 py-5">
          <div id="errorMessage" v-if="error" class="alert alert-danger">
            <div class="pre-formatted">{{error}}</div>
          </div>
          <form class="col-lg-6 mx-auto" action="" @submit.prevent="submit" method="POST" autocomplete="off">
            <h1 class="h3 mb-3">Sign Up</h1>
            <div class="form-floating form-spacing">
              <input type="text" class="form-control" name="name" id="name" placeholder="Your name" value required autofocus v-model="form.name">
              <label for="email">Name</label>
            </div>
            <div class="form-floating form-spacing">
              <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" value required autofocus v-model="form.email">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating form-spacing">
              <input type="text" class="form-control" id="username" placeholder="Your Username" required autofocus v-model="form.username">
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating form-spacing">
              <input type="password" class="form-control" id="password" placeholder="Password" required autofocus v-model="form.password">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="row form-spacing2">
              <div class="col-md-6">
                <button class="btn btn-lg poke-secondary enter-btn" type="submit" @click="redirect()">Next</button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-lg poke-primary enter-btn" type="reset">Clear</button>
              </div>
            </div>
            <br/>
            <p class="alignment">Already have an account? <router-link to="/login">Sign in here</router-link></p>
          </form>
          <div class="col-lg-3 poke-bg-portrait-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Sign-Up',
  components: {},
  data() {
    return {
      form: {
        errors: [],
        name: "",
        email: "",
        username: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      if (!this.validUsername(this.form.username)) {
        let username_error = `          
          The username must abide to the following criteria:\n
          - Number of characters must be at least 8, and up to 20 characters long
          - Must only contain alphanumeric characters, underscore and dot
          - Underscore and dot can't be at the end or start of a username
          - Underscore and dot can't be next to each other (e.g user_.name)
          - Underscore or dot can't be used two or more times in a row (e.g user__name / user..name)
          `
        ;
        this.error = username_error;
        this.form.name = ''
        this.form.email = ''
        this.form.username = ''
        this.form.password = ''
      } else {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
            .then(this.$router.replace({ name: "PersonalityTest" }));
        })
        .catch(err => {
          this.error = err.message;
          this.form.name = ''
          this.form.email = ''
          this.form.username = ''
          this.form.password = ''
        });
      }
    },
    validUsername: function (username) {
      var re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
      return re.test(username);
    },
  }
}
</script>