<template>
    <div class="login">
        <div class="form-signin py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <div class="col-8 mx-auto">
                            <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
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
                              <div class="col-md-6">
                                <button class="btn btn-lg poke-secondary enter-btn" @click="submit" type="submit">Sign in</button>
                              </div>
                              <div class="col-md-6">
                                <button class="btn btn-lg enter-btn social-btn" type="submit" @click="socialLogin">
                                  <img alt="Google Logo" src="../assets/google-logo.png" class="g-logo" /> Sign in with Google
                                </button>
                              </div>
                            </div>
                            <br/>
                            <p class="alignment"><router-link to="/ResetPassword">Forgot your password?</router-link></p>
                        </div>
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
  components: {
  },
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