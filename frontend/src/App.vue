<template>
  <app-navbar></app-navbar>
  <main class="main__container">
    <router-view></router-view>
  </main>
  <app-footer></app-footer>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
</script>

<style lang="scss"></style>
