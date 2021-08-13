<template>
    <div class="login">
        <div class="form-signin py-5">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <form class="col-8 mx-auto">
                            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
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

export default {
  name: 'Login',
  components: {
  }
}
</script>