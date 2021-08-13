<template>
  <router-link to="/" class="router-link">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom poke-primary">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none px-2">
            <img src="https://i.ibb.co/sgjWN9T/image.png" alt="" style="height:80px">
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><router-link to="/" class="nav-link px-2">Home</router-link></li>
            <li><a href="#" class="nav-link px-2">Features</a></li>
            <li><a href="#" class="nav-link px-2">Pricing</a></li>
            <li><a href="#" class="nav-link px-2">FAQs</a></li>
            <li><router-link to="/about" class="nav-link px-2">About</router-link></li>
        </ul>

        <div class="col-md-3 text-end px-2">
            <router-link to="/login"><button type="button" class="btn poke-secondary me-2">Login</button></router-link>
            <router-link to="/signup"><button type="button" class="btn poke-secondary">Sign Up</button></router-link>
        </div>
    </header>
  </router-link>
</template>

<script>
export default {
  name: "Header"
};
</script>