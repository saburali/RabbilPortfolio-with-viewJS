<template>
  <SmallHero
      dir_name="Home"
      dir_link="/"
      current_dir_name="Contact"
      current_dir_link="contact"
      title="Have Questions?"
      name="CONTACT US"
      description="Are you looking for amazing e-course platform? Don't worry! We got it for you!"
  />
  <ContactComponents />
  <TestimonialComponent />
</template>

<script>
import ContactComponents from "@/components/Contact";
import TestimonialComponent from "@/components/Testimonial";
import SmallHero from "@/components/SmallHero";
export default {
  name: "ContactPage",
  components: {SmallHero, TestimonialComponent, ContactComponents}
}
</script>

<style scoped>

</style>