<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  info: {
    id: string;
    name: string;
    Price: number;
    img: string;
  };
}>();

const router = useRouter();
const goToDetail = () => {
  router.push(`/product/${props.info.id}`);
};
</script>

<template>
  <div 
    class="flex flex-col relative w-[22.25em] h-[26.75em] bg-[#f2f3f5] items-center text-center rounded-lg mt-[1.75em] cursor-pointer transition-transform hover:scale-105 flex-shrink-0 mx-auto max-w-full"
    @click="goToDetail"
  >
    <img src="/src/assets/image/icon/new_icon.svg" class="absolute top-[1.125em] left-[1.125em]" />
    <img :src="info.img" class="mt-5 mb-5" />

    <div class="w-[10.25em] grid gap-3 text-center items-center">
      <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
      <p class="text-red-500 font-bold m-0">TWD {{ info.Price }}元</p>
      <p class="text-[1em] text-[#666] m-0">點我看詳情</p>
    </div>
  </div>
</template>
