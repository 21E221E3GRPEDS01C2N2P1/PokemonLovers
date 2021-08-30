<template>
    <div class="login container">
      <p><router-link class="sublinhado" to="/">Home</router-link> &#8250; <router-link class="sublinhado" to="/login">Login</router-link> &#8250; <router-link class="sublinhado" to="/resetpassword">Forgot My Password</router-link></p>
        <div class="form-signin py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form class="col-8 mx-auto" action="" @submit.prevent="forgetPassword" method="POST" autocomplete="off">
                            <h1 class="h3 mb-3 fw-normal">Reset Password</h1>
                            <p class="alignment">Please enter your registered e-mail address below, so a recovery e-mail can be sent.</p>
                            <p class="alignment">If you don't receive the recovery e-mail in a short while, please check your spam box.</p>
                            <div class="form-floating form-spacing">
                                <input type="email" class="form-control" id="email"  name="email" placeholder="name@example.com" required autofocus v-model="form.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <button class="w-50 btn btn-lg poke-primary form-spacing quiz-btn" type="submit">Reset My Password</button>
                            <br/>
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
  name: 'ResetPassword',
  components: {
  },
data() {
    return {
      form: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.form.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>