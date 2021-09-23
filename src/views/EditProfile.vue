<template>
    <div class="container">
          <div class="poke-breadcrumb">
            <router-link class="sublinhado" to="/dashboard/profile">{{ user.data.displayName }}</router-link>
            <span> &#8250; </span>
            <router-link class="sublinhado" to="/dashboard/editprofile">Edit Profile</router-link>
          </div>
          <div class="accordion faq" role="tablist">
            <h1 class="alignment h1 mb-3 fw-normal">Edit Profile</h1>
            <br/>
          </div>
          <form class="col-8 mx-auto" action="" @submit.prevent="onFormSubmit" method="POST" autocomplete="off">
              <div class="form-floating form-spacing">
                  <input type="text" class="form-control" name="name" id="name" placeholder="New user" value autofocus v-model="editprofile.name">
                  <label for="email">New user</label>
              </div>
              <div class="form-floating form-spacing">
                  <b-form-file v-model="file" class="mt-3" plain></b-form-file>
              </div>
              <br/>
              <div class="row form-spacing2">
                <div class="col-md-6">
                  <button class="btn btn-lg poke-secondary enter-btn " type="submit" ><router-link to="/dashboard/profile">Save Changes</router-link></button>
                </div>
              </div>
      </form>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { db } from '../main';
export default {
  name: "EditProfile",
  components: {},
  computed: {
      ...mapGetters({
      user: "user"
  }),
  },
  data() {
    return {
      displayName: "",
      email: "",
      username: "",
      editprofile: {},
      file: null
    };
  },
  methods: {
    onFormSubmit(event) {
        event.preventDefault()
        db.collection('editprofile').add(this.editprofile).then(() => {
            alert("Profile edited successfully!");
            this.editprofile.name = ''
            this.editprofile.email = ''
            this.editprofile.avatar = ''
        }).catch((error) => {
            console.log(error);
        });
    }
  },
};
</script>