<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />

    <!-- Top Recommendation -->
    <TopRecommendationViewer />

    <!-- Why Choose US -->
    <WhyChooseUs />

    <!-- Top Picked Course -->
    <PickedCourseViewer />

    <!-- Browse Course -->
    <BrowseCoursesViewer />

    <!-- Testimonial -->
    <TestimonialViewer />

    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialViewer from "@/components/TestimonialViewer";
import Contact from "@/components/Contact";
import BrowseCoursesViewer from "@/components/BrowseCoursesViewer";
import PickedCourseViewer from "@/components/PickedCourseViewer";
import TopRecommendationViewer from "@/components/TopRecommendationViewer";

export default {
  name: "HomePage",
  components: {
    TopRecommendationViewer,
    PickedCourseViewer,
    BrowseCoursesViewer,
    Contact,
    TestimonialViewer,
    Header,
    Hero,
    WhyChooseUs,
  }
}
</script>

<style scoped>
/* Style */
</style>