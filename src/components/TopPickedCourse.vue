<template>
  <div class="pt-5 pb-5">
    <div class="container position-relative">
      <p class="small-section-title fw-bold themeColor mb-2 headline-2">Our Course</p>
      <div class="d-flex justify-content-center">
        <h2 class="section-title fw-bold mb-4">Our Top-Picked Courses</h2>
      </div>
      <div class="row coursesBG">
        <OurCoursesCard />
        <OurCoursesCard />
        <OurCoursesCard />
        <OurCoursesCard />
      </div>
    </div>
  </div>
</template>

<script>
import OurCoursesCard from './OurCoursesCard';

export default {
  name: 'OurCourse',
  components: {
    OurCoursesCard,
  },
};
</script>

<style scoped>
</style>
