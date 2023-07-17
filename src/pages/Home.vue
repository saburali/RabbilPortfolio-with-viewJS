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

    <!-- BrowseCourses -->
    <div class="pt-5 lightDeepBG-2 slick-carousel-arrow browse-courses position-relative top-left-circleBG">
      <div class="container">
        <div class="d-flex justify-content-center">
          <h2 class="section-title fw-bold mb-2"> Browse Courses </h2>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <div class="dropdown">
            <button
                class="small-section-title fw-bold themeColor mb-2 headline-2 bg-transparent themeColor border-0 p-0 themeColor-h themeColor-f dropdown-toggle"
                type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
        <swiper
            :modules="modules"
            :slides-per-view="4"
            :slides-per-group="1"
            :space-between="20"
            :loop="true"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :autoplay="{
              delay: 7000,
              // disableOnInteraction: false,
              // pauseOnMouseEnter: false
            }"
        >
          <div class="swiper-button-next slick-carousel-arrow slick-next"></div>
          <div class="swiper-button-prev slick-carousel-arrow slick-prev"></div>
          <swiper-slide v-for="item in swiperBrowseItem" :key="item.id">
            <BrowseCourses
              :distention="item.distention"
              :image="item.img"
              :titleAlt="item.imgAlt"
              :title="item.title"
              :description="item.description"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

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
import BrowseCourses from "@/components/BrowseCourse";
import TestimonialViewer from "@/components/TestimonialViewer";
import Contact from "@/components/Contact";
import OurCoursesCard from "@/components/OurCoursesCard";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
// import 'swiper/components/pagination/pagination.css';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css'
// import 'swiper/modules/pagination/pagination.min.css'

export default {
  name: "HomePage",
  components: {
    OurCoursesCard,
    Contact,
    TestimonialViewer,
    BrowseCourses,
    TopRecommendation,
    Header,
    Hero,
    WhyChooseUs,
    Swiper, SwiperSlide,
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
  setup() {
    // Carousel Data
    const swiperBrowseItem = ref([
      {
        id: '01',
        title: 'Elon Musk',
        distention: '/',
        imgAlt: 'Browser Courses 1',
        img: 'browser-courses-1.png',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
      },
      {
        id: '02',
        title: 'Bill Gates',
        distention: 'contact',
        imgAlt: 'Browser Courses 2',
        img: 'browser-courses-2.png',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
      },
      {
        id: '03',
        title: 'Jeff Bezos',
        distention: 'mentor',
        imgAlt: 'Browser Courses 3',
        img: 'browser-courses-3.png',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
      },
      {
        id: '04',
        title: 'Mr. Bean',
        distention: 'Course',
        imgAlt: 'Browser Courses 4',
        img: 'browser-courses-4.png',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
      }
    ]);

    const modules = [Pagination, Autoplay];
    return { modules, swiperBrowseItem };
  }
}
</script>

<style scoped>
/* Style */
</style>
