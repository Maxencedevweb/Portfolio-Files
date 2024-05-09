<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import HomeView from './views/HomeView.vue'
import RealisationsView from './views/RealisationsView.vue'


</script>

<template>
  <header><HeaderComponent/></header>

<main>
  <RouterView/>
</main>
      

 
</template>

<style scoped>

</style>
