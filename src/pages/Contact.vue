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

  <!-- Testimonials -->
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
</template>

<script>
import ContactComponents from "@/components/Contact";
import SmallHero from "@/components/SmallHero";
import Testimonial from "@/components/Testimonial";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

export default {
  name: "ContactPage",
  components: {SmallHero, ContactComponents, Testimonial, Swiper, SwiperSlide},
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  setup() {
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
    return { modules, swiperTestimonial };
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