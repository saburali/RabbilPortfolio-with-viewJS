<template>
  <div>
    <!-- Navbar / Appbar -->
    <Header/>

    <!-- Hero / Banner -->
    <Hero/>

    <!-- Top Recommendation -->
    <TopRecommendationViewer/>

    <!-- Why Choose US -->
    <WhyChooseUs/>

    <!-- Top Picked Course -->
    <PickedCourseViewer/>

    <!-- Browse Course -->
    <BrowseCoursesViewer/>

    <!-- Testimonial -->
    <TestimonialViewer/>

    <!-- Contact -->
    <Contact/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Header from '../components/Header';
import Contact from "@/components/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialViewer from "@/components/TestimonialViewer";
import PickedCourseViewer from "@/components/PickedCourseViewer";
import BrowseCoursesViewer from "@/components/BrowseCoursesViewer";
import TopRecommendationViewer from "@/components/TopRecommendationViewer";

export default {
  name: "HomePage",
  components: {
    Hero,
    Header,
    Contact,
    WhyChooseUs,
    TestimonialViewer,
    PickedCourseViewer,
    BrowseCoursesViewer,
    TopRecommendationViewer,
  }
}
</script>

<style scoped>
/* Style */
</style>