<script setup lang="ts">
import Divider from 'primevue/divider';

const footerItems = [
  '常見問題', '配送與退貨', '售後與維修', '聯絡我們'
];
</script>

<template>
  <footer class="footerContainer">
    <div class="footerInner flex flex-col items-center justify-center w-full px-6">
      
      <!-- 連結區 -->
      <ul class="footerLinks flex flex-col md:flex-row items-center list-none p-0 m-0">
        <template v-for="(item, index) in footerItems" :key="item">
          <!-- 連結項目 -->
          <li class="footerLink py-4 md:py-0">
            {{ item }}
          </li>

          <!-- 垂直分隔線: 強制僅在 md 以上顯示，且完全不佔據手機版空間 -->
          <Divider 
            v-if="index < footerItems.length - 1" 
            layout="vertical" 
            class="!hidden md:!flex mx-4 h-8 self-center" 
          />
        </template>
      </ul>

    </div>
  </footer>
</template>

<style scoped>
@reference "../style.css";

.footerContainer {
  @apply flex w-full min-h-[15em] md:h-[23.25em] bg-[#303133] mt-[5em] justify-center items-center py-8 md:py-0;
}

.footerLinks {
  @apply text-white;
}

.footerLink {
  @apply text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] leading-none cursor-pointer text-center hover:text-gray-300 transition-colors;
}

/* 僅針對電腦版垂直線樣式 */
:deep(.p-divider-vertical) {
  @apply !border-l !border-white !min-h-[2em];
}
</style>
