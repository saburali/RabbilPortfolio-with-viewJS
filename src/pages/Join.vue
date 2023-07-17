<template>
  <div class="join secondaryBG" style="padding-top: 6rem;">
    <div class="container">
      <div class="themeWhiteBG rounded-3">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center justify-content-center">
            <div class="pt-5 pb-0 pb-md-5 w-75 ps-0 ps-md-3">
              <h2 class="themeDarkColor fw-bold">Interested to join?</h2>
              <p class="lightColor mb-4">Get started with us</p>

              <form class="mb-3 mt-3">
                <div class="position-relative mb-4">
                  <label class="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Email</label>
                  <input class="form-control p-3 border-theme bodySmall rounded-3" type="email" placeholder="example@gmail.com" />
                  <span class="position-absolute p-2 d-inline-block bg-white position-right-6 position-top-6 darkDeepColor-1">@</span>
                </div>
                <div class="position-relative mb-3">
                  <label class="position-absolute bodyXSmall bg-white px-1 position-left-10 position-top--8">Password</label>
                  <input class="form-control p-3 border-theme bodySmall rounded-3" type="password" placeholder="hTVY^$467" />
                  <button class="position-absolute p-2 d-inline-block bg-white position-right-6 position-top-6 border-0">
                    <i class="far fa-eye darkDeepColor-1"></i>
                  </button>
                  <div class="text-end">
                    <router-link to="/" class="text-danger bodyXSmall">Forget Password?</router-link>
                  </div>
                </div>
                <button class="btn p-2 rounded-3 themeBtn">Login</button>
              </form>

              <div class="position-relative my-4">
                <hr />
                <p class="position-absolute m-0 bg-white bodyXSmall" style="top: -8px; padding: 0 5px; left: 50%; transform: translateX(-50%)">or sign in with</p>
              </div>

              <div class="row">
                <div class="col">
                  <a href="#">
                    <div class="w-100 p-2 border borderLight border-2 rounded text-center">
                      <img class="w-20 mb-1" src="@/assets/images/apple.png" alt="apple" />
                    </div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <div class="w-100 p-2 border borderLight border-2 rounded text-center">
                      <img class="w-20 mb-1" src="@/assets/images/google.png" alt="google" />
                    </div>
                  </a>
                </div>
                <div class="col">
                  <a href="#">
                    <div class="w-100 p-2 border borderLight border-2 rounded text-center">
                      <img class="w-20 mb-1" src="@/assets/images/facebook.png" alt="facebook" />
                    </div>
                  </a>
                </div>
              </div>

              <p class="m-0 text-center mt-3 mt-md-5 mb-5 mb-md-0">Don’t have an account? <router-link to="/signup" class="themeColor">Sign up</router-link></p>
            </div>
          </div>
          <div class="col-md-6 mh-80vh position-relative d-none d-md-block">
            <div class="secondaryBG rounded-3 m-4 position-absolute position-relative-mx-767 position-top-0 position-bottom-0 position-right-10 position-left-0">
              <div class="h-100 w-100 d-flex align-items-center justify-content-center">
                <img class="img-fluid" src="@/assets/images/rabbil-vai.png" alt="Circle path" />
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
  name: "JoinPage"
}
</script>

<style scoped>

</style>