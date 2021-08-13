<template>
    <div id="signup-form" class="form-signin py-5">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <form class="col-8 mx-auto">
                        <h1 class="h3 mb-3 fw-normal">Fill the information below to sign up</h1>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Your name">
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Your Username">
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating" style="margin-top: 3%;">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="row" style="margin-top: 5%;">
                                <button @click="$router.push('quiz-info')" class="w-50 btn btn-lg poke-secondary" type="submit">Next</button>
                                <button class="w-50 btn btn-lg poke-primary" type="reset">Clear</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
  name: 'Sign-Up',
  components: {
  }
}
</script>