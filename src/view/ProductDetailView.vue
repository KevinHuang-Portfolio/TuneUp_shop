<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';
import AppFooter from '../components/AppFooter.vue';
import ProductCardNew from '../components/ProductCardNew.vue';
import { getAllProducts, getHomeNewProducts } from '../data/api';

const route = useRoute();
const productId = ref(route.params.id as string);
const product = ref<any>(null);
const allProducts = ref<any[]>([]);
const homeNewProductsList = ref<any[]>([]);
const loading = ref(true);
const quantity = ref(1);

// 確保顯示 4 個商品，優先從 homeNewProducts 抓取，不夠再從 allProducts 補
const similarProducts = computed(() => {
  const list: any[] = [];
  const seenIds = new Set();
  
  // 1. 先從新品推薦中抓取（排除當前商品）
  homeNewProductsList.value.forEach((p: any) => {
    const id = String(p.id);
    if (id !== productId.value && !seenIds.has(id)) {
      seenIds.add(id);
      list.push({ ...p, Price: p.Price || p.newPrice || p.price });
    }
  });

  // 2. 如果不夠 4 個，從所有商品中補齊（排除已有的 ID 和當前 ID）
  if (list.length < 4) {
    allProducts.value.forEach((p: any) => {
      const id = String(p.id);
      if (list.length < 4 && id !== productId.value && !seenIds.has(id)) {
        seenIds.add(id);
        list.push({ ...p, Price: p.Price || p.newPrice || p.price });
      }
    });
  }

  return list.slice(0, 4);
});

const fetchProduct = async (id: string) => {
  loading.value = true;
  try {
    const [all, homeNew] = await Promise.all([
      getAllProducts(),
      getHomeNewProducts()
    ]);
    allProducts.value = all;
    homeNewProductsList.value = homeNew;
    
    // 根據 ID 找到對應商品
    product.value = all.find((p: any) => String(p.id) === id);
  } catch (error) {
    console.error('抓取商品失敗：', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProduct(productId.value);
});

watch(() => route.params.id, (newId) => {
  productId.value = newId as string;
  fetchProduct(productId.value);
});
</script>

<template>
  <div class="product-detail-container px-[5%] lg:px-[7.25em] mt-9 min-h-[80vh] max-w-[120rem] mx-auto animate-fade-in">

    <!-- 載入中狀態 -->
    <div v-if="loading" class="mt-20 text-center">
      <div class="inline-block w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4"></div>
      <p class="text-2xl font-medium text-gray-400">正在準備您的商品...</p>
    </div>

    <!-- 商品大卡片容器 -->
    <div v-else-if="product" class="product-card-wrapper bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 mb-20">
      
      <!-- 左側：商品圖片區塊 -->
      <div class="w-full md:w-1/2 bg-[#f8f9fa] flex items-center justify-center p-12 min-h-[30rem] lg:min-h-[45rem]">
        <div class="image-container relative w-full h-full flex items-center justify-center">
          <img 
            :src="product.img" 
            :alt="product.name" 
            class="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
          />
        </div>
      </div>

      <!-- 右側：商品資訊區塊 -->
      <div class="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white">
        <div class="brand-tag text-gray-400 font-bold uppercase tracking-widest text-[0.9em] mb-4">TUNEUP PREMIUM</div>
        <h1 class="text-[3em] lg:text-[3.5em] font-bold leading-tight text-gray-900 mb-6">
          {{ product.name }}
        </h1>
        
        <div class="price-section flex items-baseline gap-4 mb-10">
          <span class="text-[2.5em] font-extrabold text-red-600">
            TWD {{ product.newPrice || product.price || product.Price }}
          </span>
          <span v-if="product.oldPrice" class="text-[1.5em] text-gray-400 line-through">
            TWD {{ product.oldPrice }}
          </span>
        </div>
        
        <p class="text-gray-500 text-[1.1em] leading-relaxed mb-10 border-l-4 border-black pl-6">
          {{ product.description || '這款耳機具備業界領先的降噪功能與無與倫比的音質清晰度。無論是通勤還是專業錄音，都能提供最極致的聽覺享受。' }}
        </p>

        <!-- 數量與操作 -->
        <div class="action-section flex flex-col gap-6">
          <div class="flex items-center gap-6">
            <span class="font-bold text-[1.1em]">數量：</span>
            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden h-[3.5rem] w-fit shadow-sm bg-gray-50">
              <button @click="quantity > 1 ? quantity-- : null" class="w-[3.5rem] h-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer border-none">-</button>
              <div class="w-[5rem] h-full bg-white flex items-center justify-center text-[1.25rem] font-bold border-x border-gray-200">{{ quantity }}</div>
              <button @click="quantity++" class="w-[3.5rem] h-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer border-none">+</button>
            </div>
          </div>

          <div class="flex gap-4 mt-4">
            <Button label="加入購物車" icon="pi pi-shopping-cart" class="!h-[4em] !w-1/2 !text-[1.1em] !bg-gray-100 !border-gray-100 !text-black hover:!bg-gray-200" />
            <router-link to="/cart" class="w-1/2">
              <Button label="立即購買" icon="pi pi-bolt" class="!h-[4em] !w-full !text-[1.1em] !bg-black !border-black hover:!opacity-90" />
            </router-link>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-100 flex gap-8">
          <div class="flex items-center gap-2 text-gray-500 text-[0.9em]"><i class="pi pi-truck"></i> 免運費</div>
          <div class="flex items-center gap-2 text-gray-500 text-[0.9em]"><i class="pi pi-verified"></i> 原廠保固</div>
        </div>
      </div>
    </div>

    <!-- 錯誤處理 -->
    <div v-else class="mt-20 text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
      <i class="pi pi-search text-6xl text-gray-300 mb-6 block"></i>
      <h2 class="text-3xl font-bold text-gray-800">喔喔！找不到該商品</h2>
      <p class="mt-4 text-gray-500 text-xl">商品可能已下架，或 ID ({{ productId }}) 不正確。</p>
      <router-link to="/" class="mt-8 inline-block">
        <Button label="回首頁逛逛" class="!bg-black !border-black" />
      </router-link>
    </div>

    <!-- 其他類似商品區塊 -->
    <div v-if="similarProducts.length > 0" class="similar-products-section mt-32 mb-20">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-4xl font-black tracking-tight">其他類似商品</h2>
        <div class="h-[2px] flex-grow bg-gray-100 ml-8"></div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCardNew 
          v-for="p in similarProducts" 
          :key="p.id" 
          :info="p" 
        />
      </div>
    </div>
  </div>

  <AppFooter />
</template>

<style scoped>
@reference "../style.css";

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.product-card-wrapper {
  transition: all 0.3s ease;
}
</style>

<style scoped>
@reference "../style.css";
</style>
