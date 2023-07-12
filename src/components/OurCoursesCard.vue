<template>
  <div class="col-6 col-md-6 mb-3 mb-md-4 px-6-mx-5758">
    <div class="row gx-0 shadow-sm border-bottom-rounded-mx-767">
      <div class="col-12 col-md-6 lightDeepBG-2 shadow rounded">
        <img class="img-fluid rounded-start border-top-rounded-mx-767" :src="course_img_1" alt="course_user" />
      </div>
      <div class="col-12 col-md-6 pb-1 pt-3 py-md-3 lightDeepBG-2 rounded-end border-bottom-rounded-mx-767">
        <div class="h-100 px-2 px-md-3 position-relative">
          <img class="d-none d-md-block" :src="background" alt="mark-icon" />
          <span class="d-inline-block position-absolute position-relative-mx-768 bodySmall bodyXSmall-MX-767 position-top-7 position-top-mx-767--13 position-left-30 position-mx-left-0 text-uppercase"> WEB 3.0 </span>
          <h4 class="bodyLarge fw-bold mb-0 mt-0 mt-md-2 bodySmall-MX-767 position-relative-mx-768 position-top-mx-767--10"> Mern Stack Full Web Application </h4>
          <div class="position-absolute position-relative-mx-768 position-left-0 position-right-0 position-bottom-0 px-0 px-md-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img class="img-fluid rounded-circle border border-success h-30-mx-768" :src="user_avatar" alt="course_user" />
              </div>
              <div class="flex-grow-1 ms-2 ms-md-3 my-2 py-md-4">
                <h4 class="bodyMedium fw-bold m-0 bodyXSmall-MX-767"> Rabbil Hasan </h4>
              </div>
            </div>
            <hr class="my-2 my-md-0" />
            <div class="d-flex justify-content-between bodyXSmall-MX-767">
              <span class="text-uppercase themeColor fw-bold"> BDT. 5000 </span>
              <span> 5 (120) </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurCoursesCard',
  data() {
    return {
      course_img_1: require('../assets/images/course-Image1.png'),
      background: require('../assets/images/mark-icon.svg'),
      user_avatar: require('../assets/images/rabbil-vai-avater.png'),
    };
  },
};
</script>

<style scoped>
/*.coursesBG::before,*/
/*.coursesBG::after {*/
/*  content: '';*/
/*  z-index: -1;*/
/*  width: 300px;*/
/*  height: 300px;*/
/*  position: absolute;*/
/*  background-size: 300px 300px;*/
/*  background-image: url("../../assets/images/circle-bg.svg");*/
/*}*/

/*.coursesBG::before {*/
/*  top: 0;*/
/*  left: -8%;*/
/*}*/

/*.coursesBG::after {*/
/*  right: -8%;*/
/*  bottom: -14%;*/
/*}*/

/*@media only screen and (max-width: 768px) {*/
/*  .courses-img-responsive {*/
/*    height: 230px;*/
/*  }*/

/*  .courses-creator-img-res {*/
/*    height: 35px;*/
/*    width: 35px;*/
/*  }*/

/*  .coursesBG::before,*/
/*  .coursesBG::after {*/
/*    display: none;*/
/*  }*/
/*}*/
</style>