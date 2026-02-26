<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  info: {
    id: string;
    name: string;
    oldPrice: number;
    newPrice: number;
    img: string;
    Price?: number;
  };
  type: 'default' | 'discount';
}>();

const router = useRouter();
const goToDetail = () => {
  router.push(`/product/${props.info.id}`);
};
</script>

<template>
  <div 
    class="flex flex-col cursor-pointer transition-transform hover:scale-105 flex-shrink-0 mx-auto max-w-full" 
    :class="type === 'default' ? 'w-[17.9375em]' : 'w-[22.25em]'"
    @click="goToDetail"
  >
    <div v-if="type === 'default'" class="flex flex-col bg-[#f2f3f5] w-full h-[21.5em] rounded-lg p-0 items-center">
      <img :src="info.img" class="mt-0" />
      <div class="w-[10.25em] grid gap-3 text-center items-center mt-[1.25em]">
        <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="text-[1.25em] font-semibold text-red-500 m-0 ">TWD {{ info.Price }}元</p>
        <p class="text-[1em] text-[#666] m-0">點我看詳情</p>
      </div>
    </div>

    <div v-else-if="type === 'discount'" class="flex flex-col relative w-full h-[26.75em] bg-[#f2f3f5] items-center text-center rounded-lg mt-[1.75em]">
      <img src="/src/assets/image/icon/discount_icon.svg" class="absolute top-[1.125em] left-[1.125em]" />
      <img :src="info.img" class="mt-5 mb-5" />
      <div class="w-[10.25em] grid gap-3 text-center items-center mt-0">
        <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="line-through text-gray-500 m-0">TWD {{ info.oldPrice }}元</p>
        <p class="text-red-500 font-bold m-0">TWD {{ info.newPrice }}元</p>
      </div>
    </div>
  </div>
</template>
