<template>
  <div class="Error">
      <img src="../assets/surprised.png" alt="Surprised Pikachu" class="img-404">
    <h1 class="alignment h1 mb-3">(404) Page Not Found</h1>
    <br/>
    <h3 class="alignment h3 mb-3">Oh oh, looks like that elusive Mew escaped again...</h3>
    <br/>
    <p class="alignment">You can keep searching by either <router-link to="/signup">creating an account</router-link> or <router-link to="/login">signing into yours</router-link> </p>
    <br/>
    <button @click="$router.push('/')" class="quiz-btn w-30 btn btn-lg poke-secondary">Back to Main Page</button>
  </div>
</template>
<script>
export default {
    name: 'ErrorPage',
    components: {},
};
</script>