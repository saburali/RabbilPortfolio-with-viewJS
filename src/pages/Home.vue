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
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import Footer from '../components/Footer';
import TopRecommendation from "@/components/TopRecommendation";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopPikedCourse from "@/components/TopPickedCourse";
import BrowseCourses from "@/components/BrowseCourse";
import Testimonial from "@/components/Testimonial";

export default {
  name: "HomePage",
  components: {
    Testimonial,
    BrowseCourses,
    TopRecommendation,
    Header,
    Hero,
    WhyChooseUs,
    TopPikedCourse,
    Footer
  }
}
</script>

<style scoped>

</style>
