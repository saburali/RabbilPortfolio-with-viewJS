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
    <div class="pt-5 pb-5">
      <div class="container position-relative">
        <p class="small-section-title fw-bold themeColor mb-2 headline-2"> Our Course </p>
        <div class="d-flex justify-content-center">
          <h2 class="section-title fw-bold mb-4"> Our Top-Picked Courses </h2>
        </div>
        <div class="row coursesBG">
          <div class="col-6 col-md-6 mb-3 mb-md-4 px-6-mx-5758" v-for="item in pickedCourse" :key="item.id">
            <OurCoursesCard
                :title="item.title"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :review="item.review"
                :reviewCount="item.reviewCount"
                :authorImg="item.authorImg"
                :webVersion="item.webVersion"
            />
          </div>
        </div>
      </div>
    </div>

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
import OurCoursesCard from "@/components/OurCoursesCard";
import BrowseCoursesViewer from "@/components/BrowseCoursesViewer";

export default {
  name: "HomePage",
  components: {
    BrowseCoursesViewer,
    OurCoursesCard,
    Contact,
    TestimonialViewer,
    TopRecommendation,
    Header,
    Hero,
    WhyChooseUs,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
