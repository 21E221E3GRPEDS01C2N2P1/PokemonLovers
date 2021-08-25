<template>
    <div id="signup-form" class="form-signin py-5">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                  <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <form class="col-8 mx-auto" action="" @submit.prevent="submit" method="POST">
                        <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="text" class="form-control" name="name" id="name" placeholder="Your name" value required autofocus v-model="form.name">
                                <label for="email">Name</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" value required autofocus v-model="form.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="text" class="form-control" id="username" placeholder="Your Username" required autofocus v-model="form.username">
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="password" class="form-control" id="password" placeholder="Password" required autofocus v-model="form.password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="row" style="margin-top: 5%;">
                                <button class="w-50 btn btn-lg poke-secondary" type="submit" @click="redirect()">Next</button>
                                <button class="w-50 btn btn-lg poke-primary" type="reset">Clear</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Sign-Up',
  components: {
  },
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
        });
    },
    /*redirect(){
      this.$router.push('PersonalityTest');
      location.reload();
    }*/
  }
}
</script>