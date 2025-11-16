<script setup>
  import { RouterView } from 'vue-router';
  import Header from './layout/Header.vue';
  import Footer from './layout/Footer.vue';
</script>

<template>
  <Header />
  <div class="flex-grow">
    <RouterView />
  </div>
  <Footer />
</template>

