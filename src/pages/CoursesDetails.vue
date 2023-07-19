<template>
  <!-- Hero Section -->
  <SmallHero
      dir_name="Home"
      dir_link="/"
      current_dir_name="Mentor"
      current_dir_link="course-details"
      title="The Premium MERN COURSE"
      name="RABBIL HASAN"
      description="Are you looking for an amazing e-course platform? Don't worry! We got it for you!"
  />
</template>


<script>
import SmallHero from "@/components/SmallHero";

export default {
  name: "CourseDetails",
  components: {
    SmallHero
  }
}
</script>

<style scoped>
</style>