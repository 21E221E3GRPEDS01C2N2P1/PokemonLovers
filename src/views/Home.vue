<template>
  <div class="container-fluid p-0">
    <div class="row m-0 poke-cover">
      <!-- Flickity HTML init -->
      <div class="carousel p-0" data-flickity='{ "setGallerySize": false, "wrapAround": true, "autoPlay": true, "pageDots": false }'>
        <div class="carousel-cell backgrond-slide-1">
          <div class="container py-5">
            <div class="row m-0">
              <div class="col-sm-6">
                <div class="poke-content-aligner">
                  <h1 class="fw-light text-light">Become a master!</h1>
                  <p class="lead text-light">Are you ready to become the greatest pokemon master ever?</p>
                  <p>
                    <router-link to="/signup">
                      <button href="#" class="btn-lg poke-primary my-5 border-0">Get Started</button>
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
        </div>
        <div class="carousel-cell backgrond-slide-2">
          <div class="container py-5">
            <div class="row m-0">
              <div class="col-sm-6">
                <div class="poke-content-aligner">
                  <h1 class="fw-light text-light">Become a master!</h1>
                  <p class="lead text-light">Are you ready to become the greatest pokemon master ever?</p>
                  <p>
                    <router-link to="/signup">
                      <button href="#" class="btn-lg poke-secondary my-5 border-0">Get Started</button>
                    </router-link>
                  </p>
                </div>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://npmcdn.com/flickity@2/dist/flickity.pkgd.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>