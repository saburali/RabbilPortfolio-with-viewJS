<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />
    <TopRecommendation />
    <WhyChooseUs />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import Footer from '../components/Footer';
import TopRecommendation from "@/components/TopRecommendation";
import WhyChooseUs from "@/components/WhyChooseUs";

export default {
  name: "HomePage",
  components: {
    WhyChooseUs,
    TopRecommendation,
    Header,
    Hero,
    Footer
  }
}
</script>

<style scoped>

</style>
