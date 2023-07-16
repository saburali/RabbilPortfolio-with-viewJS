<template>
  <div class="small-hero-bg lightDeepBG-2 pb-lg-0 pt-lg-0 pt-5 pb-3 d-flex align-items-center">
    <div class="container-fluid my-50">
      <div class="container">
        <div class="row">
          <div class="mx-auto col-12 col-md-8 col-md-6 text-center">
            <p class="small-section-title mb-2 headline-2 breadcrumb-link">
              <router-link class="darkColor" :to="dir_link">{{ dir_name }}</router-link> / <router-link class="darkColor" :to="current_dir_link">{{ current_dir_name }}</router-link>
            </p>
            <h2 class="themeDarkColor fw-bold headline-1 hero-headline-1-res">
              {{ title }}
              <br />
              <span class="text-uppercase themeColor dot section-title headline-1-important-min-992">{{ name }}</span>
            </h2>
            <p class="themeDarkColor fs-5 my-4 opacity-80 mb-0">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallHero",
  props: {
    title: String,
    name: String,
    dir_name: String,
    dir_link: String,
    current_dir_name: String,
    current_dir_link: String,
    description: String
  }
};
</script>

<style scoped>
/* Include Style */
.small-hero-bg {
  min-height: 50vh;

  background-image: url("../assets/images/sm-hero-shadow.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.small-hero-bg::after,
.small-hero-bg::before {
  content: '';
  top: 0;
  z-index: 0;
  width: 36%;
  height: 50%;
  position: absolute;
  background-repeat: no-repeat;
}

.small-hero-bg::after {
  content: '';
  right: 0;
  background-image: url("../assets/images/sm-hero-bg.svg");
}

.small-hero-bg::before {
  content: '';
  left: 0;
  background-image: url("../assets/images/sm-hero-shape.svg");
}

@media only screen and (max-width: 768px) {
  .small-hero-bg::before {
    display: none;
  }
}
</style>
