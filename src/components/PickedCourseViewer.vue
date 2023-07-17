<template>
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
</template>

<script>
import OurCoursesCard from "@/components/OurCoursesCard";

export default {
  name: "PickedCourseViewer",
  components: {
    OurCoursesCard,
  },
  data() {
    return {
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

</style>