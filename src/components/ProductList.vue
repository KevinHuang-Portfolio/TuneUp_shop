<script setup lang="ts">
import Divider from 'primevue/divider';
import { ref } from 'vue';
defineProps<{
  info: {
    id: string;
    name: string;
    price: number;
    img: string;
    amount: number;
  };
}>();
</script>

<template>
  <div class="mt-6 flex w-[26.1875em] h-[9.4375em]">
    <img :src="info.img" alt="product_list_img" />
    <div class="flex flex-col ml-[2.5em] pt-[1em] gap-3">
      <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
      <p class="text-[1.25em] font-semibold text-[#333] m-0">TWD {{ info.price }}元</p>
      <p class="text-[1em] text-[#666] m-0">已售出：{{ info.amount }}件</p>
    </div>
  </div>
  <!-- 使用更簡單的樣式，確保 1px 顯示正確 -->
  <Divider class="!m-[1.5em_0] !h-[0.0625em] !bg-[#ABABAB]" />
</template>
