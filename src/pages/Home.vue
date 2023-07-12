<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />
    <TopRecommendation />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import Footer from '../components/Footer';
import TopRecommendation from "@/components/TopRecommendation";

export default {
  name: "HomePage",
  components: {
    TopRecommendation,
    Header,
    Hero,
    Footer
  }
}
</script>

<style scoped>

</style>
