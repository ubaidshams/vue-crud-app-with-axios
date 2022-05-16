<template>
  <NavbarC />
  <router-view></router-view>
</template>

<script>
import NavbarC from "./components/NavbarC.vue";

export default {
  name: "App",
  components: {
    NavbarC,
  },
};
</script>

<style>

</style>
