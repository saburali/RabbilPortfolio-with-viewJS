<template>
  <div class="py-5 secondaryBG">
    <div class="container">
      <div class="row text-center text-sm-start">
        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h4 class="text-dark fw-bold mb-2 mb-sm-4">About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolor eveniet exercitationem minima
            non obcaecati, perspiciatis porro quibusdam quis sapiente, tempora temporibus ullam vitae, voluptatem.
            Accusamus impedit natus repellat.
          </p>
          <div class="d-flex justify-content-center justify-content-sm-start">
            <div class="d-flex align-items-center me-3">
              <a href="#">
                <div class="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                  <img class="h-15" src="@/assets/images/facebook.svg" alt="icon" />
                </div>
              </a>
            </div>
            <div class="d-flex align-items-center me-3">
              <a href="#">
                <div class="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                  <img class="h-15" src="@/assets/images/twitter.svg" alt="icon" />
                </div>
              </a>
            </div>
            <div class="d-flex align-items-center me-3">
              <a href="#">
                <div class="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                  <img class="h-15" src="@/assets/images/linkend.svg" alt="icon" />
                </div>
              </a>
            </div>
            <div class="d-flex align-items-center me-3">
              <a href="#">
                <div class="h-40 w-40 themeWhiteBG rounded-circle d-flex justify-content-center align-items-center themeBG-h filter-invert-1 filter-invert-0-h">
                  <img class="h-15" src="@/assets/images/instagram.svg" alt="icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h4 class="text-dark fw-bold mb-2 mb-sm-4">Our Courses</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Mearn Stack</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">React Native</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Rest API</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Full Stack Web</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Angular JS</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h4 class="text-dark fw-bold mb-2 mb-sm-4">Legal</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Privacy</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Terms</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Refunds</router-link>
            </li>
            <li>
              <router-link to="/" class="lh-160 themeDarkColor themeColor-h">Returns</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h4 class="text-dark fw-bold mb-2 mb-sm-4">Subscribe Now</h4>
          <p>Aliquam vel elit dolor. Vivamus iaculis finibus rutrum.</p>
          <div class="d-flex justify-content-center justify-content-sm-start">
            <form class="row" action="">
              <input type="text" class="col-10 form-control rounded-0 w-auto" placeholder="Email Address" />
              <button type="submit" class="col-2 btn rounded-0 themeBG themeDeepDark-h">
                <img src="@/assets/images/location-icon-white.svg" alt="icon" />
              </button>
            </form>
          </div>

          <div class="mt-3" style="marginLeft: '-12px'">
            <img class="d-inline-block" src="@/assets/images/map-location.svg" alt="Map Location" />
            <span class="d-inline-block themeDarkColor ms-2">Dhaka Bangladesh</span>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <p class="col-12 col-md-8 m-0 fw-bold themeDarkColor text-center text-md-start mb-3 mb-md-0">
          &copy; {{ getYear() }}. Rabbil Hasan - All rights reserved.
        </p>
        <div class="col-12 col-md-4">
          <div class="d-flex text-center text-md-start">
            <div class="me-3 w-50 h-25 py-2 px-3 bg-white">
              <img class="img-fluid" src="@/assets/images/copyright_image/apple_pay.svg" alt="app_pay" />
            </div>
            <div class="me-3 w-50 h-25 py-2 px-3 bg-white">
              <img class="img-fluid" src="@/assets/images/copyright_image/google_pay.svg" alt="google_pay" />
            </div>
            <div class="me-3 w-50 h-25 py-2 px-3 bg-white">
              <img class="img-fluid" src="@/assets/images/copyright_image/amazon.svg" alt="amazon" />
            </div>
            <div class="me-3 w-50 h-25 py-2 px-3 bg-white">
              <img class="img-fluid" src="@/assets/images/copyright_image/affirm.svg" alt="affirm" />
            </div>
            <div class="w-50 h-25 py-2 px-3 bg-white">
              <img class="img-fluid" src="@/assets/images/copyright_image/shop_pay.svg" alt="shop_pay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
/* Add any custom styles specific to this component */
</style>
