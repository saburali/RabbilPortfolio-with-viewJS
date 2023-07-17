<template>
      <div class="card shadow-sm rounded border-0">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <div :class="['border-2', 'border-' + border_color, 'rounded-circle', 'h-60', 'w-60', 'd-flex', 'justify-content-center', 'align-items-center']">
                <span class="border border-5 borderSecondary rounded-circle h-20 w-20 d-inline-block"></span>
              </div>
            </div>
            <div class="flex-grow-1 ms-3">
              <h2 class="headline-4 fw-bold">{{ title }}</h2>
              <p class="themeDarkColor mb-0 text-overflow-hidden" style="height: 48px;">
                {{description}}
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'TopRecommendation',
  props: {
    title: String,
    description: String,
    border_color: String,
  }
};
</script>

<style scoped>
</style>
