<template>
  <div>
    <!-- Hero Section -->
    <SmallHero
        dir_name="Home"
        dir_link="/"
        current_dir_name="Mentor"
        current_dir_link="mentor"
        title="Meet your MENTOR"
        name="RABBIL HASAN"
        description="Are you looking for amazing e-course platform? Don't worry! We got it for you!"
    />

    <!-- Main Content -->
    <div class="container">
      <div class="py-3 py-md-5">
        <div class="row">
          <div class="col-md-12 col-lg-3">
            <div class="position-sticky position-top-15 shadow-sm rounded p-3 mb-4">
              <div class="text-center">
                <img class="img-fluid img-thumbnail" :src="user" alt="user-avatar" style="max-width: 224px" />
                <h4 class="bodyLarge fw-bold text-uppercase mt-3"> Rabbil Hasan </h4>
                <h4 class="bodySmall mb-4"> Sr. Software Engineer @ IDLC </h4>
              </div>
              <div class="d-flex justify-content-between text-center">
                <div>
                  <h3 class="bodyLarge fw-bold"> 786K </h3>
                  <p class="m-0"> Students </p>
                </div>
                <div>
                  <h3 class="bodyLarge fw-bold"> 234 </h3>
                  <p class="m-0"> Courses </p>
                </div>
                <div>
                  <h3 class="bodyLarge fw-bold"> 438 </h3>
                  <p class="m-0"> Reviews </p>
                </div>
              </div>
              <div class="btn-group w-100 mt-3" role="group" aria-label="Basic example">
                <router-link to="/home" type="button" class="themeBtn me-2">Send Mail</router-link>
                <router-link to="/home" type="button" class="themeBtn ms-2">Message</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-9">
            <div class="row">
              <div class="col-6 col-md-4 mb-3 mb-md-4 px-6-mx-5758" v-for="item in items" :key="item.id">
                <CoursePriceCard
                    :title="item.title"
                    :route="item.route"
                    :image="item.image"
                    :imageAlt="item.title"
                    :courseType="item.courseType"
                    :price="item.price"
                    :user="item.users"
                    :ratting="item.rating"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallHero from "../components/SmallHero";
import CoursePriceCard from "@/components/CoursePriceCard";

export default {
  name: "MentorPage",
  components: {
    CoursePriceCard,
    SmallHero,
  },
  data() {
    return {
      user: require("../assets/images/rabbil-user.png"),
      items: [
        {
          id: 1,
          title: "MERN Stack",
          route: "/",
          image: "browser-courses-1.png",
          courseType: "dfaasdf",
          price: "BDT. 334000",
          users: "4.9K",
          rating: "4.9"
        },
        {
          id: 2,
          title: "Full Stack",
          route: "about",
          image: "browser-courses-2.png",
          courseType: "asdf",
          price: "BDT. 330",
          users: "2.9K",
          rating: "4.7"
        },
        {
          id: 3,
          title: "MEdd ck",
          route: "course",
          image: "browser-courses-3.png",
          courseType: "what is this",
          price: "BDT. 34000",
          users: "2.9K",
          rating: "3.9"
        },
        {
          id: 4,
          title: "Contact Stack",
          route: "contact",
          image: "browser-courses-1.png",
          courseType: "okk",
          price: "BDT. 3340",
          users: "3.9K",
          rating: "4.6"
        },
        {
          id: 5,
          title: "MERN Stack",
          route: "/",
          image: "browser-courses-1.png",
          courseType: "dfaasdf",
          price: "BDT. 334000",
          users: "4.9K",
          rating: "4.9"
        },
        {
          id: 6,
          title: "Full Stack",
          route: "about",
          image: "browser-courses-2.png",
          courseType: "asdf",
          price: "BDT. 330",
          users: "2.9K",
          rating: "4.7"
        },
        {
          id: 7,
          title: "MEdd ck",
          route: "course",
          image: "browser-courses-3.png",
          courseType: "what is this",
          price: "BDT. 34000",
          users: "2.9K",
          rating: "3.9"
        },
        {
          id: 8,
          title: "Contact Stack",
          route: "contact",
          image: "browser-courses-1.png",
          courseType: "okk",
          price: "BDT. 3340",
          users: "3.9K",
          rating: "4.6"
        },
        {
          id: 9,
          title: "MERN Stack",
          route: "/",
          image: "browser-courses-1.png",
          courseType: "dfaasdf",
          price: "BDT. 334000",
          users: "4.9K",
          rating: "4.9"
        },
        {
          id: 10,
          title: "Full Stack",
          route: "about",
          image: "browser-courses-2.png",
          courseType: "asdf",
          price: "BDT. 330",
          users: "2.9K",
          rating: "4.7"
        },
        {
          id: 11,
          title: "MEdd ck",
          route: "course",
          image: "browser-courses-3.png",
          courseType: "what is this",
          price: "BDT. 34000",
          users: "2.9K",
          rating: "3.9"
        },
        {
          id: 12,
          title: "Contact Stack",
          route: "contact",
          image: "browser-courses-1.png",
          courseType: "okk",
          price: "BDT. 3340",
          users: "3.9K",
          rating: "4.6"
        },
        {
          id: 13,
          title: "MERN Stack",
          route: "/",
          image: "browser-courses-1.png",
          courseType: "dfaasdf",
          price: "BDT. 334000",
          users: "4.9K",
          rating: "4.9"
        },
        {
          id: 14,
          title: "Full Stack",
          route: "about",
          image: "browser-courses-2.png",
          courseType: "asdf",
          price: "BDT. 330",
          users: "2.9K",
          rating: "4.7"
        },
        {
          id: 15,
          title: "MEdd ck",
          route: "course",
          image: "browser-courses-3.png",
          courseType: "what is this",
          price: "BDT. 34000",
          users: "2.9K",
          rating: "3.9"
        },
        {
          id: 16,
          title: "Contact Stack",
          route: "contact",
          image: "browser-courses-1.png",
          courseType: "okk",
          price: "BDT. 3340",
          users: "3.9K",
          rating: "4.6"
        }
      ]
    };
  },
};
</script>

<style scoped>
/* Include Style */
</style>