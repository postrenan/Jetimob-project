<template>
  <nav class="navbar">
    <div class="navbar-brand" >
      <div class="navbar-item ">
        <img src="">
      </div>
      <a class="navbar-burger" id="burger">
        <span ></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div class="navbar-menu" id="nav-links">
      <ul class="navbar-end" id="navbarForms">
        <li class="navbar-item"><router-link to="/home">Home</router-link></li>
        <li class="navbar-item"><router-link to="/about">Sobre</router-link></li>
        <li class="navbar-item"><router-link to="/blog">Blog</router-link></li>
        <li class="navbar-item"><router-link to="/service">Serviços</router-link></li>
        <li class="navbar-item"><router-link to="/WorkWithUs">Trabalhe conosco</router-link></li>
        <li class="navbar-item"><router-link to="/home">Contato</router-link></li>
        <li class="navbar-item" id="clientArea">
          <router-link to="/ClientArea">Area do cliente</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "HeaderSite",
};
</script>

<style scoped>
ul {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
