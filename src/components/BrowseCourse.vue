<template>
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

      <div>
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
          <swiper-slide v-for="item in swiperTextBase" :key="item.id">
            <div>
              <div class="mb-0 mb-md-4">
                  <router-link :to="item.distention">
                    <div class="card mx-2 border-0 border-rounded shadow-sm">
                      <img :src="item.img" class="card-img-top img-fluid rounded-top"
                           :alt="item.title + 'image'" />
                      <div class="card-body p-2 p-md-3">
                        <h5 class="card-title bodySmall-MX-767 fw-semibold text-dark">{{ item.title }}</h5>
                        <p class="card-text bodyXSmall-MX-767 text-dark">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </router-link>
                </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

// import 'swiper/components/pagination/pagination.css';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css'
// import 'swiper/modules/pagination/pagination.min.css'
import { ref } from 'vue';

export default {
  components: { Swiper, SwiperSlide },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  setup() {
    const swiperTextBase = ref([
      {
        id: '01',
        title: 'Elon Musk',
        distention: '/',
        description:
            'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img:
            'https://i.postimg.cc/wjgNZKpR/browser-courses-1.png'
      },
      {
        id: '02',
        title: 'Bill Gates',
        distention: 'contact',
        description:
            'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img:
            'https://i.postimg.cc/QMMTNpVX/browser-courses-2.png'
      },
      {
        id: '03',
        title: 'Jeff Bezos',
        distention: 'mentor',
        description:
            'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img:
            'https://i.postimg.cc/bvF2Zs21/browser-courses-3.png'
      },
      {
        id: '04',
        title: 'Mr. Bean',
        distention: 'Course',
        description:
            'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img:
            'https://i.postimg.cc/85JfMNh9/browser-courses-4.png'
      }
    ]);

    const modules = [Pagination, Autoplay];

    return { modules, swiperTextBase };
  }
};
</script>

<style>
  .swiper-container {
    padding-bottom: 50px;
  }

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