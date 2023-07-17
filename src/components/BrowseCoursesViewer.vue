<template>
  <!-- Browse Courses -->
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
</template>

<script>
import BrowseCourses from "@/components/BrowseCourse";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

export default {
  name: "BrowseCoursesViewer",
  components: {
    BrowseCourses,
    Swiper, SwiperSlide,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
  .swiper-button-next::after,
  .swiper-button-prev:after {
    content: '';
  }

  @media only screen and (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
</style>