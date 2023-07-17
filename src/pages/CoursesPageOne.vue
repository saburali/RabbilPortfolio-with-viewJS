<template>
  <!-- Small Hero -->
  <SmallHero
      dir_name="Home"
      dir_link="/"
      current_dir_name="Course Page 01"
      current_dir_link="courses-page-one"
      title="Explore our"
      name="PREMIUM COURSES"
      description="Are you looking for amazing e-course platform? Don't worry! We got it for you!"
  />

  <!-- Top Recommendation -->
  <TopRecommendationViewer />
</template>

<script>
import SmallHero from "@/components/SmallHero";
import TopRecommendationViewer from "@/components/TopRecommendationViewer";

export default {
  name: "CoursesPageOne",
  components: {SmallHero, TopRecommendationViewer}
}
</script>

<style scoped>
</style>