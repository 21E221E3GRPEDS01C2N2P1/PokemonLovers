<template>
    <div class="login">
        <div class="form-signin">
            <div class="container-fluid">
                <div class="container">
                    <div class="poke-breadcrumb">
                      <router-link class="sublinhado" to="/">Home</router-link>
                      <span> &#8250; </span>
                      <router-link class="sublinhado" to="/login">Login</router-link>
                    </div>
                    <div class="row m-0 py-5">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <div class="col-lg-6 mx-auto">
                            <h1 class="h3 mb-3">Please Sign In</h1>
                            <div class="form-floating form-spacing">
                                <input type="email" class="form-control" id="email"  name="email" placeholder="name@example.com" required autofocus v-model="form.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating form-spacing">
                                <input type="password" class="form-control" id="password" name= "password" placeholder="Password" required v-model="form.password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="checkbox mb-3 form-spacing">
                                <label>
                                    <input type="checkbox" value="remember-me"> Remember me
                                </label>
                            </div>
                            <div class="row form-spacing2">
                              <div class="col-md-12 my-2">
                                <button class="btn btn-lg poke-secondary enter-btn" @click="submit" type="submit">Sign in</button>
                              </div>
                              <div class="col-md-12 my-2">
                                <button class="btn btn-lg enter-btn social-btn" type="submit" @click="socialLogin">
                                  <img alt="Google Logo" src="../assets/google-logo.png" class="g-logo" /> Sign in with Google
                                </button>
                              </div>
                            </div>
                            <br/>
                            <p class="alignment"><router-link to="/login/resetpassword">Forgot your password?</router-link></p>
                            <p class="alignment">Don't have an account yet? <router-link to="/signup">Register here</router-link></p>
                        </div>
                    <div class="col-lg-3 poke-bg-portrait-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
            this.$router.replace({ name: "Dashboard" });
            console.log(data);
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    socialLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(() => {
        this.$router.replace({ name: "Dashboard" });
      })
      .catch(err => {
        this.error = err.message;
      });
    }
  }
}
</script>