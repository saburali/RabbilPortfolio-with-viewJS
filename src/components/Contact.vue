<template>
  <div class="pt-5 pb-5 lightDeepBG-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-6 mb-4 mb-md-0">
          <h2 class="section-title text-start p-1 fw-bold mb-2"> Send A Message </h2>
          <p class="themeDarkColor mb-5">
            Pellentesque felis cursus. Proin lacus magna, lobortis vel quam ac, dignissim dapibus odio. Pellentesque vulputate
          </p>
          <form>
            <div class="row">
              <div class="col-sm-6">
                <input class="mb-4 bg-white border-0 py-3 px-4 rounded-0 w-100" type="text" placeholder="Your Name" />
              </div>
              <div class="col-sm-6">
                <input class="mb-4 bg-white border-0 py-3 px-4 rounded-0 w-100" type="email" placeholder="Email Address" />
              </div>
              <div class="col-sm-6">
                <input class="mb-4 bg-white border-0 py-3 px-4 rounded-0 w-100" type="number" placeholder="Phone Number" />
              </div>
              <div class="col-sm-6">
                <input class="mb-4 bg-white border-0 py-3 px-4 rounded-0 w-100" type="text" placeholder="Subject" />
              </div>
              <div class="col-sm-12">
                <textarea class="form-control mb-4 bg-white border-0 py-3 px-4 rounded-0" rows="4" cols="50" placeholder="Your Message"></textarea>
              </div>
            </div>
            <button class="themeBG border-0 rounded-0 py-3 px-4 w-100 themeDeepDark-h text-white" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="themeBG h-100 p-4 d-flex align-items-center">
            <div>
              <h3 class="text-light fw-bold mb-4"> Contact Info </h3>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <div class="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                    <img src="../assets/images/location-icon.svg" alt="icon" />
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="d-block text-white fw-bold">Location</span>
                  <span class="d-block text-white-50">Dhaka Bangladesh</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <div class="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                    <img src="../assets/images/mail.svg" alt="icon" />
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="d-block text-white fw-bold"> Email </span>
                  <span class="d-block text-white-50"> rabbil@gmail.com </span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <div class="h-60 w-60 bg-white rounded-circle d-flex justify-content-center align-items-center">
                    <img src="../assets/images/phone.svg" alt="icon" />
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="d-block text-white fw-bold">Phone No</span>
                  <span class="d-block text-white-50">+11) 256 658 957 658</span>
                </div>
              </div>
              <div class="d-block">
                <h6 class="text-light fw-bold mb-3 mt-5"> Follow Us </h6>
                <div class="d-flex">
                  <div class="d-flex align-items-center me-3">
                    <a href="#">
                      <div class="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                        <img class="h-15" src="../assets/images/facebook.svg" alt="icon" />
                      </div>
                    </a>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <a href="#">
                      <div class="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                        <img class="h-15" src="../assets/images/twitter.svg" alt="icon" />
                      </div>
                    </a>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <a href="#">
                      <div class="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                        <img class="h-15" src="../assets/images/linkend.svg" alt="icon" />
                      </div>
                    </a>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <a href="#">
                      <div class="h-40 w-40 themeLightBG rounded-circle d-flex justify-content-center align-items-center themeDeepDark-h">
                        <img class="h-15" src="../assets/images/instagram.svg" alt="icon" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponents',
};
</script>

<style scoped>
/* Include Style */
</style>