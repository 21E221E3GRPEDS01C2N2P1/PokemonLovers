<template>
    <div class="login">
        <div class="form-signin py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form class="col-8 mx-auto" action="" @submit.prevent="submit" method="POST">
                            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
                            <div class="form-floating">
                                <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" v-model="form.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" name="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                                <label for="floatingPassword">Password</label>
                            </div>
        
                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"> Remember me
                                </label>
                            </div>
                            <button class="w-100 btn btn-lg poke-secondary" type="submit">Sign in</button>
                        </form>
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
            console.log(data);
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>