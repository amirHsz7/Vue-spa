<template>
  <Header />

<router-view></router-view>
</template>

<script>
import Header from './components/sections/Header.vue'
export default {
  name: "App",
  components : {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
