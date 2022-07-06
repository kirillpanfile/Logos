<template>
  <app-navbar></app-navbar>
  <main class="main__container">
    <router-view></router-view>
  </main>
  <product-card></product-card>
  <app-footer></app-footer>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
import ProductCard from "./components/UI/ProductCard.vue";
</script>

<style lang="scss"></style>
