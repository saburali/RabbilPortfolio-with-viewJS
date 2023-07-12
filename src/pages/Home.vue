<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import Footer from '../components/Footer';

export default {
  name: "HomePage",
  components: {
    Header,
    Hero,
    Footer
  }
}
</script>

<style scoped>

</style>
