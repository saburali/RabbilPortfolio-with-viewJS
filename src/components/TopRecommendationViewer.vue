<template>
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
</template>

<script>
import TopRecommendation from "@/components/TopRecommendation";

export default {
  name: "TopRecommendationViewer",
  components: {
    TopRecommendation,
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
    }
  },
}
</script>

<style scoped>

</style>