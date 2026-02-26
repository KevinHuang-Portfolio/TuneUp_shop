<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
</script>

<template>
  <!-- 這裡的 text-[16px] (1em) 是基準，試著把它改成 text-[20px] 或 text-[12px] -->
  <div class="m-0 bg-white min-h-screen text-[16px]">
    <AppNavbar />
    <router-view />
  </div>
</template>

