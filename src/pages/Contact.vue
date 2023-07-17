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
  <TestimonialViewer />
</template>

<script>
import ContactComponents from "@/components/Contact";
import SmallHero from "@/components/SmallHero";
import TestimonialViewer from "@/components/TestimonialViewer";
export default {
  name: "ContactPage",
  components: {TestimonialViewer, SmallHero, ContactComponents}
}
</script>

<style scoped>

</style>