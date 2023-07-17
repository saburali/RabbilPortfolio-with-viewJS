<template>
  <div class="mt-100-mx-768 pb-50-mx-768 position-relative">
    <div class="row h-400 height-auto-mx-768">
      <div class="col-md-6 d-flex align-items-end">
        <div class="card position-relative rounded-3 position-right--40 position-right-0 z-index-2 position-static-mx-768 px-10-mx-768">
          <div class="d-flex justify-content-center pt-150-mx-768">
            <!-- Use 290*350 size image to keep the design right. Do not fix the height and width of the image. -->
            <img class="card-img-top d-block d-md-none rounded-circle-mx-768 h-250-mx-768 w-250-mx-768 img-thumbnail position-absolute-mx-768 position-top--100-mx-768"
                 :src="require(`../assets/images/${image}`)" alt="ReviewUser" />
          </div>
          <div class="card-body">
            <p class="headline-4 fw-bold m-0"> {{ name }} </p>
            <span class="small-section-title d-inline-block mb-2 themeColor"> {{position}} </span>
            <span class="bodySmall d-block text-justify">
                {{description}}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex d-md-block justify-content-center d-none-mx-768">
        <!-- Use 290*350 size image to keep the design right. Do not fix the height and width of the image. -->
        <img class="img-fluid rounded-3 position-relative position-left--40 z-index-1"
             :src="require(`../assets/images/${image}`)" alt="ReviewUser" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialComponent",
  props: {
    name: String,
    image: String,
    position: String,
    description: String,
  }
};
</script>

<style>

</style>