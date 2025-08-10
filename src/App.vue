<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Pointer from './components/Pointer.vue';
import SiteLoder from './components/SiteLoder.vue';
</script>

<template>
<Header />

<div content>

  <SiteLoder />
  <Pointer />
  <RouterView />
</div>
<Footer />
</template>

<style scoped>

</style>
