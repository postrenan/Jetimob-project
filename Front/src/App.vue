<template>
  <div id="app">
    <HeaderSite />
    <router-view />
    <FooterSite />
  </div>
</template>

<script lang="ts">
import HeaderSite from "./views/Header.vue";
import Home from "./views/Home.vue";
import FooterSite from "./views/Footer.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import ClientArea from "./views/ClientArea.vue";
import Service from "./views/Service.vue";
import Blog from "./views/Blog.vue";

export default {
  name: "App",
  components: {
    HeaderSite,
    FooterSite,
  },
};
</script>

<style scoped></style>
