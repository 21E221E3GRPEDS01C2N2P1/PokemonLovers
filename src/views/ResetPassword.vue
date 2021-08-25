<template>
    <div class="login">
        <div class="form-signin py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form class="col-8 mx-auto" action="" @submit.prevent="forgetPassword" method="POST">
                            <h1 class="h3 mb-3 fw-normal">Well shit</h1>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="email" class="form-control" id="email"  name="email" placeholder="name@example.com" required autofocus v-model="form.email">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <button class="w-100 btn btn-lg poke-secondary" type="submit" style="margin-top: 3%;">Reset My Password</button>
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