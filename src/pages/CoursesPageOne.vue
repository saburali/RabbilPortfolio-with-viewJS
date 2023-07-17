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

  <!-- Suggested Courses -->
  <div class="pt-5 lightDeepBG-2 slick-carousel-arrow position-relative top-left-circleBG suggested-course-components">
    <div class="container mb-4">
      <div class="d-flex justify-content-center">
        <h2 class="section-title fw-bold mb-2"> Suggested Courses </h2>
      </div>
      <div class="d-flex justify-content-center mb-4">
        <div class="dropdown">
          <button
              class="btn btn-secondary dropdown-toggle small-section-title fw-bold themeColor mb-2 headline-2 bg-transparent themeColor border-0 p-0 themeColor-h themeColor-f"
              type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Best Seller
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>

      <CoursePriceCardSlider />
    </div>
  </div>

  <!-- Picked Course -->
  <PickedCourseViewer />

  <!-- Testimonial -->
  <TestimonialViewer />

  <!-- Contact -->
  <ContactComponents />
</template>

<script>
import SmallHero from "@/components/SmallHero";
import TestimonialViewer from "@/components/TestimonialViewer";
import TopRecommendationViewer from "@/components/TopRecommendationViewer";
import CoursePriceCardSlider from "@/components/CoursePriceCardSlider";
import PickedCourseViewer from "@/components/PickedCourseViewer";
import ContactComponents from "@/components/Contact";

export default {
  name: "CoursesPageOne",
  components: {
    ContactComponents,
    TestimonialViewer, PickedCourseViewer, CoursePriceCardSlider, SmallHero, TopRecommendationViewer}
}
</script>

<style scoped>
</style>