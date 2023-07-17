<template>
  <div>
    <Header />
    <!-- Main Content -->
    <Hero />

    <!-- Top Recommendation -->
    <div class="pt-5 pb-5">
      <div class="container">
        <h2 class="section-title mb-4 text-start fw-bold">Top Recommendations</h2>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-992-25" v-for="item in recommended" :key="item.id">
            <TopRecommendation
                :title="item.title"
                :description="item.description"
                :border_color="item.b_color"
            />
          </div>
        </div>
      </div>
    </div>
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
import TopRecommendation from "@/components/TopRecommendation";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialViewer from "@/components/TestimonialViewer";
import Contact from "@/components/Contact";
import BrowseCoursesViewer from "@/components/BrowseCoursesViewer";
import PickedCourseViewer from "@/components/PickedCourseViewer";

export default {
  name: "HomePage",
  components: {
    PickedCourseViewer,
    BrowseCoursesViewer,
    Contact,
    TestimonialViewer,
    TopRecommendation,
    Header,
    Hero,
    WhyChooseUs,
  },
  data() {
    return {
      recommended: [
        {
          id: 1,
          title: "MERN Stack",
          description: "This is some content from a media component. This is some content from a media component.",
          b_color: "success"
        },
        {
          id: 2,
          title: "Express REST",
          description: "This is some content from a media component. This is some content from a media component.",
          b_color: "danger"
        },
        {
          id: 3,
          title: "Realtime WEB",
          description: "This is some content from a media component. This is some content from a media component.",
          b_color: "warning"
        },
        {
          id: 4,
          title: "Lumen REST",
          description: "This is some content from a media component. This is some content from a media component.",
          b_color: "info"
        }
      ],
      pickedCourse: [
        {
          id: 1,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },
        {
          id: 2,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },
        {
          id: 3,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },
        {
          id: 4,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },{
          id: 5,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },
        {
          id: 6,
          title: "Mern Stack Full Web Application",
          image: "course-Image1.png",
          name: "Rabbil Hasan",
          authorImg: "rabbil-vai-avater.png",
          price: "4000",
          review: "4.5",
          reviewCount: "45",
          webVersion: "WEB 3.0",
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Style */
</style>
