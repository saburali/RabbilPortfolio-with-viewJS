<template>
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
    <swiper-slide v-for="item in CoursePriceCardSlider" :key="item.id">
      <div class="mb-4">
        <CoursePriceCard
            :title="item.title"
            :route="item.route"
            :image="item.image"
            :imageAlt="item.imageAlt"
            :courseType="item.courseType"
            :price="item.price"
            :user="item.users"
            :ratting="item.rating"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import CoursePriceCard from "@/components/CoursePriceCard";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

export default {
  name: "CoursePriceCardSlider",
  components: {
    CoursePriceCard,
    Swiper, SwiperSlide,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  setup() {
    // Carousel Data
    const CoursePriceCardSlider = ref([
      {
        id: 1,
        title: "MERN Stack",
        route: "/",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "dfaasdf",
        price: "334000",
        users: "4.9K",
        rating: "4.9"
      },
      {
        id: 2,
        title: "Full Stack",
        route: "about",
        image: "browser-courses-2.png",
        imageAlt: "Course Images",
        courseType: "asdf",
        price: "330",
        users: "2.9K",
        rating: "4.7"
      },
      {
        id: 3,
        title: "MEdd ck",
        route: "course",
        image: "browser-courses-3.png",
        imageAlt: "Course Images",
        courseType: "what is this",
        price: "34000",
        users: "2.9K",
        rating: "3.9"
      },
      {
        id: 4,
        title: "Contact Stack",
        route: "contact",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "okk",
        price: "3340",
        users: "3.9K",
        rating: "4.6"
      },
      {
        id: 5,
        title: "MERN Stack",
        route: "/",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "dfaasdf",
        price: "334000",
        users: "4.9K",
        rating: "4.9"
      },
      {
        id: 6,
        title: "Full Stack",
        route: "about",
        image: "browser-courses-2.png",
        imageAlt: "Course Images",
        courseType: "asdf",
        price: "330",
        users: "2.9K",
        rating: "4.7"
      },
      {
        id: 7,
        title: "MEdd ck",
        route: "course",
        image: "browser-courses-3.png",
        imageAlt: "Course Images",
        courseType: "what is this",
        price: "34000",
        users: "2.9K",
        rating: "3.9"
      },
      {
        id: 8,
        title: "Contact Stack",
        route: "contact",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "okk",
        price: "3340",
        users: "3.9K",
        rating: "4.6"
      },
      {
        id: 9,
        title: "MERN Stack",
        route: "/",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "dfaasdf",
        price: "334000",
        users: "4.9K",
        rating: "4.9"
      },
      {
        id: 10,
        title: "Full Stack",
        route: "about",
        image: "browser-courses-2.png",
        imageAlt: "Course Images",
        courseType: "asdf",
        price: "330",
        users: "2.9K",
        rating: "4.7"
      },
      {
        id: 11,
        title: "MEdd ck",
        route: "course",
        image: "browser-courses-3.png",
        imageAlt: "Course Images",
        courseType: "what is this",
        price: "34000",
        users: "2.9K",
        rating: "3.9"
      },
      {
        id: 12,
        title: "Contact Stack",
        route: "contact",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "okk",
        price: "3340",
        users: "3.9K",
        rating: "4.6"
      },
      {
        id: 13,
        title: "MERN Stack",
        route: "/",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "dfaasdf",
        price: "334000",
        users: "4.9K",
        rating: "4.9"
      },
      {
        id: 14,
        title: "Full Stack",
        route: "about",
        image: "browser-courses-2.png",
        imageAlt: "Course Images",
        courseType: "asdf",
        price: "330",
        users: "2.9K",
        rating: "4.7"
      },
      {
        id: 15,
        title: "MEdd ck",
        route: "course",
        image: "browser-courses-3.png",
        imageAlt: "Course Images",
        courseType: "what is this",
        price: "34000",
        users: "2.9K",
        rating: "3.9"
      },
      {
        id: 16,
        title: "Contact Stack",
        route: "contact",
        image: "browser-courses-1.png",
        imageAlt: "Course Images",
        courseType: "okk",
        price: "3340",
        users: "3.9K",
        rating: "4.6"
      }
    ]);

    const modules = [Pagination, Autoplay];
    return {modules, CoursePriceCardSlider};
  }
}
</script>

































<!--  <router-link :to="route" class="ht-min-767-animation">-->
<!--    <div class="card mx-2 border-0 border-rounded shadow-sm">-->
<!--      <img class="card-img-top img-fluid rounded-top" :src="require(`../assets/images/${image}`)" :alt="imageAlt" />-->
<!--      <div class="card-body p-2 p-md-3">-->
<!--        <h4 class="card-title bodyLarge bodySmall-MX-767 themeDarkColor fw-bold">{{title}}</h4>-->
<!--        <div class="row">-->
<!--          <div class="col-12 col-md-8 mb-2 mb-md-0">-->
<!--            <div class="d-block bodySmall lightColor d-flex align-items-center">-->
<!--              <div class="d-flex align-items-center">-->
<!--                <div class="flex-shrink-0">-->
<!--                  <img src="@/assets/images/suggested-courses-icon.svg" alt="courses icon" />-->
<!--                </div>-->
<!--                <div class="flex-grow-1 ms-2">-->
<!--                  <div class="d-inline-block bodyXSmall-MX-767"> {{courseType}} </div>-->
<!--                  <div class="bodySmall themeColor fw-bold bodyXSmall-MX-767">{{price}}</div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-12 col-md-4 text-end">-->
<!--            <div class="row gx-0">-->
<!--              <div class="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">-->
<!--                <AiOutlineUser />-->
<!--                <span class="d-inline-block ms-1">{{user}}K</span>-->
<!--              </div>-->
<!--              <div class="col-6 col-md-12 d-block bodyMedium bodyXSmall-MX-767 lightColor d-flex align-items-center justify-content-md-end justify-content-center">-->
<!--                <AiFillStar class="text-warning" />-->
<!--                <span class="d-inline-block ms-1">{{ratting}}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </router-link>-->
<style scoped>

</style>