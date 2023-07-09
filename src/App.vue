<template>
  <router-link to="/"> Home </router-link>
  <router-link to="/about"> About </router-link>
  <router-link to="/course"> Course </router-link>
  <router-link to="/mentor"> Mentor </router-link>
  <router-link to="/contact"> Contact </router-link>
  <router-link to="/join"> Join </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>