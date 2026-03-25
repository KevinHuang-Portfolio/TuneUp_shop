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
    <div v-if="info.isLarge" class="w-[25em] h-[14.5em] md:w-[46em] md:h-[26.75em] bg-[#f2f3f5] rounded-lg relative flex mt-0 md:mt-0 items-center px-[1em] md:px-0">
      <img :src="info.flag" class="absolute top-0 left-[0.6em] md:left-[1.125em] w-[2em] md:w-auto h-auto" />
      <div class="flex-1 md:flex-none flex justify-center items-center h-full">
        <img :src="info.img" class="mr-[1em] md:mr-[1.875em] max-w-full md:max-w-none h-auto md:h-auto object-contain" />
      </div>

      <div class="w-[9em] md:w-[10.25em] h-auto md:h-[6em] grid gap-1 md:gap-3 flex-col text-center flex-shrink-0">
        <p class="text-[0.85em] md:text-[1.5em] min-[1496px]:text-[2.2em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="text-[0.75em] md:text-[1.25em] min-[1496px]:text-[1.8em] font-semibold m-0 text-red-500">TWD {{ info.price }}元</p>
        <p class="text-[0.65em] md:text-[1em] min-[1496px]:text-[1.2em] text-[#666] m-0">已售出 8888 件</p>
      </div>
    </div>

    <div v-else class="flex flex-col relative w-[12.25em] h-[14.8em] md:w-[22.25em] md:h-[26.75em] bg-[#f2f3f5] items-center text-center rounded-lg mt-0 md:mt-0 p-[1em] md:p-0">
      <img :src="info.flag" class="absolute top-0 left-[0.6em] md:left-[1.125em] w-[2em] md:w-auto h-auto" />
      <div class="flex-1 md:flex-none flex items-center justify-center w-full">
        <img :src="info.img" class="max-w-full md:max-w-none h-auto md:h-auto object-contain mb-2 md:mb-5 md:mt-5" />
      </div>

      <div class="w-full md:w-[10.25em] h-auto md:h-[6em] grid gap-1 md:gap-3 flex-col text-center">
        <p class="text-[0.85em] md:text-[1.5em] min-[1496px]:text-[1.8em] font-medium m-0 truncate min-h-[1.5em]">{{ info.name }}</p>
        <p class="text-[0.75em] md:text-[1.25em] min-[1496px]:text-[1.5em] font-semibold m-0 text-red-500">TWD {{ info.price }}元</p>
        <p class="text-[0.65em] md:text-[1em] min-[1496px]:text-[1.2em] text-[#666] m-0">已售出 8888 件</p>
      </div>
    </div>
  </div>
</template>
