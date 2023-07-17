<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />
    <TopRecommendation />
    <WhyChooseUs />
    <TopPikedCourse />
    <BrowseCourses />
    <Testimonial />
    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import TopRecommendation from "@/components/TopRecommendation";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopPikedCourse from "@/components/TopPickedCourse";
import BrowseCourses from "@/components/BrowseCourse";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export default {
  name: "HomePage",
  components: {
    Contact,
    Testimonial,
    BrowseCourses,
    TopRecommendation,
    Header,
    Hero,
    WhyChooseUs,
    TopPikedCourse,
  }
}
</script>

<style scoped>

</style>
