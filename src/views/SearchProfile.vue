<template>
 <div class="container">
    <p><router-link class="sublinhado" to="/dashboard">Dashboard</router-link> &#8250; <router-link class="sublinhado" to="/dashboard/profile/searchprofile">Search Profile</router-link></p>
    <div class="accordion faq" role="tablist">
      <h1 class="alignment h1 mb-3 fw-normal">Search Profile</h1>
    </div>
    <br/>
    
    <b-input-group size="sm" class="mb-2">
      <b-form-input type="search" placeholder="Username" class="input-search"></b-form-input>
      <b-input-group-prepend is-text >
        <b-icon icon="search" @click="show = !show"></b-icon>
      </b-input-group-prepend>
    </b-input-group>

    <p style="display:none" v-if="show">Encontre um usuário</p>
    <p v-else>Nenhum usuário encontrado!</p>
 
  </div>
</template>

<script>

export default {
  name: "SearchProfile",
  components: {},
  computed: {
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
  },
};
</script>