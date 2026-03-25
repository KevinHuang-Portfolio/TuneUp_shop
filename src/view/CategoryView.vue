<script setup lang="ts">
import Slider from 'primevue/slider';
import { ref, onMounted, onUnmounted, computed } from 'vue';
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

// --- 縮放邏輯開始 ---
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1728);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

// 計算縮放比例
const scaleStyle = computed(() => {
  // 設計稿基準寬度：108em * 16px = 1728px
  const designWidth = 1728; 
  
  if (windowWidth.value < designWidth) {
    const ratio = windowWidth.value / designWidth;
    return {
      zoom: ratio, // 核心魔法：強制等比例縮放整個佈局
      width: `${designWidth}px`,
      margin: '0 auto'
    };
  }
  
  // 螢幕夠大時，維持原樣並置中
  return {
    width: `${designWidth}px`,
    margin: '0 auto'
  };
});
// --- 縮放邏輯結束 ---

onMounted(async () => {
  window.addEventListener('resize', updateWidth);
  
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

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <!-- 最外層加上 overflow-x-hidden 防止出現底部的橫向捲軸 -->
  <div class="w-full bg-white overflow-x-hidden">
    <!-- 將計算好的縮放樣式綁定在這個容器上 -->
    <div :style="scaleStyle">
      
      <!-- 以下為完全沒動過的原始佈局結構 -->
      <div class="flex w-full">
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
        <div class="px-[7.25em] flex-grow">
          <a href="#" class="inline-block text-[2.25em] text-black no-underline mt-15">所有商品</a>
          <div class="grid grid-cols-3 gap-x-[20px] gap-y-[1.5em] mt-8 w-fit min-[1496px]:w-[901px] mx-auto lg:mx-0 pb-20">
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
