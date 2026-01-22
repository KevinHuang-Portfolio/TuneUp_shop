<script setup lang="ts">
// 1. 引入你剛做好的組件
import navbar from './components/navbar.vue';
import home from './view/home.vue';

</script>

<template>
  <navbar />
  <home />

</template>

<style>
/* 可以在這裡寫全域的規範，例如背景色或字體 */
body {
  margin: 0;
  background-color: #ffffff; /* 這是常見的 PrimeVue 乾淨背景色 */
}
</style>