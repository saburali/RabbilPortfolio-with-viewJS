<template>
  <router-link :to="route" class="ht-min-767-animation">
    <div class="card mx-2 border-0 border-rounded shadow-sm">
      <img class="card-img-top img-fluid rounded-top" :src="require(`../assets/images/${image}`)" :alt="imageAlt" />
      <div class="card-body p-2 p-md-3">
        <h4 class="card-title bodyLarge bodySmall-MX-767 themeDarkColor fw-bold">{{title}}</h4>
        <div class="row">
          <div class="col-12 col-md-8 mb-2 mb-md-0">
            <div class="d-block bodySmall lightColor d-flex align-items-center">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src="@/assets/images/suggested-courses-icon.svg" alt="courses icon" />
                </div>
                <div class="flex-grow-1 ms-2">
                  <div class="d-inline-block bodyXSmall-MX-767"> {{courseType}} </div>
                  <div class="bodySmall themeColor fw-bold bodyXSmall-MX-767">BDT. {{price}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 text-end">
            <div class="row gx-0">
              <div class="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">
                <AiOutlineUser />
                <span class="d-inline-block ms-1">{{user}}K</span>
              </div>
              <div class="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">
                <AiFillStar class="text-warning" />
                <span class="d-inline-block ms-1">{{ratting}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CoursePriceCard",
  props: {
    title: String,
    route: String,
    image: String,
    imageAlt: String,
    courseType: String,
    price: String,
    user: String,
    ratting: String,
  }
}

</script>

<style scoped>

</style>