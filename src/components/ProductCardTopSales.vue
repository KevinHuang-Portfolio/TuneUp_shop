<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  info: {
    id: string;
    name: string;
    price: number;
    img: string;
    flag: string;
    isLarge: boolean;
  };
}>();

const router = useRouter();
const goToDetail = () => {
  router.push(`/product/${props.info.id}`);
};
</script>

<template>
  <div class="product-card-top cursor-pointer transition-transform hover:scale-105" @click="goToDetail">
    <div v-if="info.isLarge" class="w-[46em] h-[26.75em] bg-[#f2f3f5] rounded-lg relative flex mt-[1.75em] items-center">
      <img :src="info.flag" class="absolute top-0 left-[1.125em]" />
      <img :src="info.img" class=" mr-[1.875em]" />

      <div class="w-[10.25em] h-[6em] grid gap-3 flex-col text-center">
        <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="text-[1.25em] font-semibold m-0 text-red-500">TWD {{ info.price }}元</p>
        <p class="text-[1em] text-[#666] m-0">已售出 8888 件</p>
      </div>
    </div>

    <div v-else class="flex flex-col relative w-[22.25em] h-[26.75em] bg-[#f2f3f5] items-center text-center rounded-lg mt-[1.75em]">
      <img :src="info.flag" class="absolute top-0 left-[1.125em]" />
      <img :src="info.img" class="mt-5 mb-5" />

      <div class="w-[10.25em] h-[6em] grid gap-3 flex-col text-center">
        <p class="text-[1.5em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="text-[1.25em] font-semibold m-0 text-red-500">TWD {{ info.price }}元</p>
        <p class="text-[1em] text-[#666] m-0">已售出 8888 件</p>
      </div>
    </div>
  </div>
</template>
