<template>
  <div class="pt-5 pb-5 lightDeepBG-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-items-center d-none d-md-block" :style="bgStyle">
          <img src="../assets/images/chat.png" alt="image" class="img-fluid" />
        </div>
        <div class="col-md-6 my-0 my-md-4 pt-4 pt-md-0 position-relative">
          <p class="small-section-title fw-bold themeColor text-start mb-2 headline-2">Why Choose Us</p>
          <h2 class="fw-bold mb-3">
            <span class="themeColor">LIVE</span> Class, <span class="themeColor">LIVE</span> Support with <br />
            recorded version of every lessons
          </h2>
          <img src="../assets/images/chat.png" alt="image" class="img-fluid d-block d-md-none" />
          <div class="pb-ce-55-last-child">
            <p class="lightColor lh-160 pb-40 mb-12 pt-3 pt-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut magna aliquet pharetra. Sed ipsum
              velit, mollis fermentum metus consequat, mollis suscipit diam. Phasellus interdum pharetra mi, et ultrices
              libero tincidunt vitae. Fusce volutpat nisi vitae arcu accumsan tempus. Quisque commodo commodo tellus, sed
              commodo nisl maximus in. Integer mattis finibus lorem sit amet efficitur. Sed id viverra eros, id malesuada
              elit. Proin vulputate eu lorem ac lacinia.
            </p>
            <p class="lightColor lh-160 pb-40 mb-12 pt-3 pt-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus ut magna aliquet pharetra. Sed ipsum
              velit, mollis fermentum metus consequat, mollis suscipit diam. Phasellus interdum pharetra mi, et ultrices
              libero tincidunt vitae. Fusce volutpat nisi vitae arcu accumsan tempus. Quisque commodo commodo tellus, sed
              commodo nisl maximus in. Integer mattis finibus lorem sit amet efficitur. Sed id viverra eros, id malesuada
              elit. Proin vulputate eu lorem ac lacinia.
            </p>
          </div>
          <div class="position-absolute position-bottom-0 lightDeepBG-2 pt-3 pt-md-0">
            <router-link to="/join" class="btn rounded-pill text-white themeBG btn-outline-success border-1 px-4 py-2">Join Today</router-link>
            <router-link to="/" class="btn rounded-pill darkColor btn-outline-success border border-success px-4 py-2 ms-3">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyChooseUs',
  data() {
    return {
      bgStyle: {
        backgroundImage: "url('../assets/images/why_choose_us-bg.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
      },
    };
  },
};
</script>

<style scoped>
</style>