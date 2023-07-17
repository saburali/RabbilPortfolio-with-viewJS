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
    <div class="pt-5 pb-5 themeBG position-relative testimonials testimonialsBG">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-6 mb-5 mb-md-0">
            <div class="h-100 d-flex align-items-center">
              <div class="d-inline-block">
                <p class="small-section-title sm-sec-bg fw-bold themeColor text-start mb-2 headline-2 text-white-50"> Testimonial </p>
                <h2 class="fw-bold mb-3 text-white"> What say Students <br class="d-none d-md-block"/> Community
                  About <br class="d-none d-md-block"/> Rabbil Hasan </h2>
                <p class="bodyLarge fw-bold text-white"> 12.56k+ Students Joined Us </p>
                <div class="d-flex justify-content-start">
                  <img
                      class="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-info"
                      src="../assets/images/test-1.png" alt="react icon"/>
                  <img
                      class="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-success ml--25"
                      src="../assets/images/test-2.png" alt="react icon"/>
                  <img
                      class="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-dark ml--25"
                      src="../assets/images/test-3.png" alt="react icon"/>
                  <img
                      class="themeWhiteBG img-fluid h-60 w-60 p-2 rounded-circle border-2 border-warning ml--25"
                      src="../assets/images/test-4.png" alt="react icon"/>
                  <span
                      class="themeWhiteBG h-60 w-60 p-12 rounded-circle border border-success bw-2 ml--25 d-inline-block headline-4 fw-bold bodyXLarge">20+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
            <div>
              <swiper
                  :modules="modules"
                  :slides-per-view="1"
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
                <div class="swiper-button-next slick-carousel-arrow slick-next mx-1">➜</div>
                <div class="swiper-button-prev slick-carousel-arrow slick-prev mx-1">➜</div>

                <swiper-slide v-for="item in swiperTestimonial" :key="item.id">
                  <Testimonial
                      :name="item.name"
                      :image="item.img"
                      :position="item.position"
                      :description="item.description"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header';
import Hero from "@/components/Hero";
import TopRecommendation from "@/components/TopRecommendation";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrowseCourses from "@/components/BrowseCourse";
import Testimonial from "@/components/Testimonial";
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
    Testimonial,
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
    const swiperTestimonial = ref([
      {
        id: '01',
        name: 'Elon Musk',
        position: 'UX Designer',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img: 'test-user.png'
      },
      {
        id: '02',
        name: 'Bill Gates',
        position: 'Web Developer',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img: 'test-user.png'
      },
      {
        id: '03',
        name: 'Jeff Bezos',
        position: 'Software Engineer',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img: 'test-user.png'
      },
      {
        id: '04',
        name: 'Mr. Bean',
        position: 'Manager',
        description: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
        img: 'test-user.png'
      }
    ]);

    const modules = [Pagination, Autoplay];
    return { modules, swiperBrowseItem, swiperTestimonial };
  }
}
</script>

<style scoped>
/* For Testimonial */
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

/* Circle Background */
.testimonialsBG::after {
  content: '';
  z-index: 1;
  bottom: -10%;
  right: 11%;
  width: 300px;
  height: 300px;
  position: absolute;
  background-size: 300px 300px;
  background-image: url("../assets/images/themeCircle.svg");
}

.testimonials .slick-dots li button:before {
  opacity: 1;
  color: var(--themeWhiteColor);
}

.testimonials .slick-dots li.slick-active button:before {
  border: 1px solid var(--themeWhiteColor);;
  border-radius: 50%;
}

.testimonials .slick-prev,
.testimonials .slick-next {
  top: 30%;

  background-color: #ffffffc2;
  border: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #21bf73;

}

.testimonials .slick-prev {
  left: 17%;
  z-index: 2;
  transform: rotate(180deg);
}

.testimonials .slick-next {
  left: 24%;
  z-index: 1;
}

@media only screen and (min-width: 769px) {
  .testimonials .slick-dots {
    left: 35px;
    top: 15%;
    width: auto;
  }
}

@media only screen and (max-width: 1200px) {
  .testimonials .slick-prev,
  .testimonials .slick-next {
    top: 20%;
  }

  .testimonials .slick-next {
    left: 25%;
  }
}

@media only screen and (max-width: 992px) {
  .testimonials .slick-prev,
  .testimonials .slick-next {
    top: 6%;
  }

  .testimonials .slick-next {
    left: 27%;
  }

  .testimonials .slick-prev {
    left: 19%
  }
}

@media only screen and (max-width: 768px) {
  .testimonials .slick-dots {
    bottom: -35px;
  }

  .testimonials .slick-prev, .testimonials .slick-next {
    top: 96%;
  }

  .testimonials .slick-next {
    left: 51%;
  }

  .testimonials .slick-prev {
    left: 42%;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 25px;
  }
}
</style>
