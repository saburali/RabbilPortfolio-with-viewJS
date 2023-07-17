<template>
    <div class="mb-0 mb-md-4 pb-2">
        <router-link :to="distention">
          <div class="card mx-2 border-0 border-rounded shadow-sm">
            <img :src="require(`../assets/images/${image}`)" class="card-img-top img-fluid rounded-top"
                 :alt="imgAlt" />
            <div class="card-body p-2 p-md-3">
              <h5 class="card-title bodySmall-MX-767 fw-semibold text-dark">{{ title }}</h5>
              <p class="card-text bodyXSmall-MX-767 text-dark">
                {{ description }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
</template>

<script>
export default {
  name: "BrowseCourse",
  props: {
    image: String,
    imgAlt: String,
    title: String,
    distention: String,
    description: String,
  },
};
</script>

<style>
  .swiper-container {
    padding-bottom: 50px;
  }

  .swiper-button-next::after,
  .swiper-button-prev:after {
    content: '';
  }

  @media only screen and (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
</style>