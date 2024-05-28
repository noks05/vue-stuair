<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="site-container">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
