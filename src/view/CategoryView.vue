<script setup lang="ts">
import Slider from 'primevue/slider';
import { ref, onMounted } from 'vue';
import AppFooter from '../components/AppFooter.vue';
import ProductList from '../components/ProductList.vue';
import ProductCard from '../components/ProductCard.vue';

// 從資料層匯入 API 函式
import { 
  getCategoryProductList, 
  getCategoryDefaultCards 
} from '../data/api';

const priceRange = ref([300, 30000]);

const product_list = ref([]);
const DefaultCards = ref([]);

onMounted(async () => {
  try {
    const [listData, defaultData] = await Promise.all([
      getCategoryProductList(),
      getCategoryDefaultCards()
    ]);
    
    product_list.value = listData;
    DefaultCards.value = defaultData;
  } catch (error) {
    console.error('抓取資料失敗：', error);
  }
});
</script>

<template>
  <div class="flex justify-center w-full bg-white">
    <div class="flex w-full max-w-[108em]">
      <!-- 左側側邊欄 -->
      <div class="w-[37.1875em] min-h-screen bg-[#ededed] pt-[3.75em] pl-[7.25em] pr-[3.75em] flex-shrink-0">
        <div class="mb-12">
          <a href="#" class="inline-block text-[2.25em] text-black no-underline mb-12">價格區間</a>
          <div class="flex items-center justify-between mb-8">
            <div>
              <label class="text-[1.5em] font-medium">Min</label>
              <p id="min-value" class="text-[1.25em] font-semibold">${{ priceRange[0] }}</p>
            </div>
            <div>
              <label class="text-[1.5em] font-medium">Max</label>
              <p id="max-value" class="text-[1.25em] font-semibold">${{ priceRange[1] }}</p>
            </div>
          </div>
          <Slider v-model="priceRange" :min="0" :max="30000" :step="100" range class="!h-1 !bg-gray-300" />
        </div>

        <div class="mt-16">
          <a href="#" class="inline-block text-[2.25em] text-black no-underline mt-16">特色商品</a>
          <ProductList
            v-for="item in product_list"
            :key="item.id"
            :info="item"
          />
        </div>
      </div>

      <!-- 右側商品展示 -->
      <div class="pl-[7.25em] flex-grow">
        <a href="#" class="inline-block text-[2.25em] text-black no-underline mt-15">所有商品</a>
        <div class="flex flex-wrap gap-[1.5em_1.25em] mt-8 justify-start">
          <ProductCard
            v-for="item in DefaultCards"
            :key="item.id"
            :info="item"
            type="default"
          />
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style scoped>
:deep(.p-slider-range) { background: #ffb600; }
:deep(.p-slider-handle) {
  background: #000;
  border: 0.125em solid #fff;
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
}
:deep(.p-slider-handle:focus) { box-shadow: 0 0 0 0.2rem rgba(255, 182, 0, 0.4); }
</style>
