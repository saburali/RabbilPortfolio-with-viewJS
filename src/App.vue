<template>
  <HeaderComponent />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "@/components/Header";
export default {
  name: 'App',
  components: {HeaderComponent},
}
</script>

<style>

</style>