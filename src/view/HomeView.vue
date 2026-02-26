<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';

import ProductCard from '../components/ProductCard.vue';
import ProductCardTopSales from '../components/ProductCardTopSales.vue';
import ProductCardNew from '../components/ProductCardNew.vue';
import AppFooter from '../components/AppFooter.vue';

// 從資料層匯入 API 函式
import { 
  getHomeProducts, 
  getTopSalesProducts, 
  getTopSalesProducts2, 
  getHomeNewProducts 
} from '../data/api';

const products = ref<any[]>([]);
const topSalesProducts = ref<any[]>([]);
const topSalesProducts2 = ref<any[]>([]);
const NewProducts = ref<any[]>([]);

onMounted(async () => {
  try {
    const results = await Promise.allSettled([
      getHomeProducts(),
      getTopSalesProducts(),
      getTopSalesProducts2(),
      getHomeNewProducts()
    ]);
    
    // 分配結果，若失敗則給予空陣列
    products.value = results[0].status === 'fulfilled' ? results[0].value : [];
    topSalesProducts.value = results[1].status === 'fulfilled' ? results[1].value : [];
    topSalesProducts2.value = results[2].status === 'fulfilled' ? results[2].value : [];
    NewProducts.value = results[3].status === 'fulfilled' ? results[3].value : [];
    
    console.log('首頁資料加載完成');
  } catch (error) {
    console.error('抓取資料時發生嚴重錯誤：', error);
  }
});
</script>

<template>
  <div class="home-wrapper overflow-x-hidden w-full flex flex-col items-center">
    
    <!-- Banner Section -->
    <section class="w-full flex justify-center px-0 lg:px-0 mt-4 lg:mt-9 min-[1496px]:!mt-0">
      <div class="relative w-full max-w-[93.5em]">
        <router-link to="/cart">
          <Button 
            label="立即選購" 
            class="!absolute bottom-[28%] left-[5%] !w-[7em] md:!w-[9em] lg:!w-[11.125em] !h-[2.2em] md:!h-[2.8em] lg:!h-[3.25em] !bg-white !border-white !tracking-[0.125em] !font-black !text-[0.65em] md:!text-[0.9em] lg:!text-[1.25em] !text-black shadow-lg z-10" 
          />
        </router-link>
        <img 
          src="/src/assets/image/banner.svg" 
          alt="banner_1" 
          class="w-full h-auto min-h-[12em] min-[1496px]:h-[45em] object-cover rounded-none lg:rounded-[8px]" 
        />
      </div>
    </section>

    <!-- Discounts Section -->
    <section class="w-full max-w-[93.5em] mt-9 px-4 min-[1496px]:px-0 flex flex-col items-center">
      <div class="w-full flex justify-center min-[1496px]:justify-start">
        <a href="#" class="text-[2.25em] font-medium no-underline text-black block mb-4">優惠專區</a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 min-[1496px]:flex min-[1496px]:flex-nowrap gap-[24px] w-full max-w-[46em] min-[1496px]:max-w-none justify-items-center mx-auto">
        <ProductCard
          v-for="item in products"
          :key="item.id"
          :info="item"
          type="discount"
        />
      </div>
    </section>

    <!-- Best Sellers Section -->
    <section class="w-full max-w-[93.5em] mt-9 px-4 min-[1496px]:px-0 flex flex-col items-center">
      <div class="w-full flex justify-center min-[1496px]:justify-start">
        <a href="#" class="text-[2.25em] font-medium no-underline text-black block mb-4">售出最多</a>
      </div>
      <div class="flex flex-wrap justify-center min-[1496px]:flex-nowrap gap-[24px] w-full mt-4">
        <div class="flex justify-center flex-shrink-0">
          <ProductCardTopSales
            v-for="item in topSalesProducts"
            :key="'top1-' + item.id"
            :info="item"
          />
        </div>
        <div class="flex flex-wrap justify-center min-[1496px]:flex-nowrap gap-[24px]">
          <ProductCardTopSales
            v-for="item in topSalesProducts2"
            :key="'top2-' + item.id"
            :info="item"
          />
        </div>
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section class="w-full max-w-[93.5em] mt-9 px-4 min-[1496px]:px-0 flex flex-col items-center mb-12">
      <div class="w-full flex justify-center min-[1496px]:justify-start">
        <a href="#" class="text-[2.25em] font-medium no-underline text-black block mb-4">新品上市</a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 min-[1496px]:flex min-[1496px]:flex-nowrap gap-[24px] w-full max-w-[46em] min-[1496px]:max-w-none justify-items-center mx-auto mt-4">
        <ProductCardNew v-for="item in NewProducts" :key="item.id" :info="item" />
      </div>
    </section>

  </div>

  <AppFooter />
</template>

<style scoped>
/* Ensure no horizontal scroll on mobile */
.home-wrapper {
  width: 100%;
}
</style>
