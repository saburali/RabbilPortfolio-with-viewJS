<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />
    <TopRecommendation />
    <WhyChooseUs />
    <TopPikedCourse />
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

export default {
  name: "HomePage",
  components: {
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
