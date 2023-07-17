<template>
  <div class="min-100-vh d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row w-100">
        <div class="col-md-4 mb-4 mb-md-0">
          <router-link to="/courses-page-one">
            <div class="w-100 bg-warning p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 01 </div>
          </router-link>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <router-link to="/courses-page-two">
            <div class="w-100 bg-info p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 02 </div>
          </router-link>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <router-link to="/courses-page-three">
            <div class="w-100 bg-success p-5 text-center text-white fw-bold fs-2 text-uppercase rounded"> Courses Page 03 </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursePage"
}
</script>

<style scoped>

</style>