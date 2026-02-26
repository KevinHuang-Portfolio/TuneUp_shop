<script setup lang="ts">
import Divider from 'primevue/divider';

const footerItems = [
  '常見問題', '配送與退貨', '售後與維修', '聯絡我們'
];
</script>

<template>
  <div class="footerContainer">
    <div class="footerInner flex flex-col md:flex-row items-center justify-center w-full px-4">
      <ul class="footerLinks flex flex-col md:flex-row items-center list-none p-0">
        <template v-for="(item, index) in footerItems" :key="item">
          <li class="footerLink py-2 md:py-0">{{ item }}</li>
          <div v-if="index < footerItems.length - 1" class="dividerWrapper hidden md:flex">
            <Divider layout="vertical" />
          </div>
          <!-- Mobile Divider (optional spacer) -->
          <div v-if="index < footerItems.length - 1" class="md:hidden h-2"></div>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@reference "../style.css";

.footerContainer {
  @apply flex w-full min-h-[15em] md:h-[23.25em] bg-[#303133] mt-[5em] justify-center items-center py-8 md:py-0;
}

.footerLinks {
  @apply text-white text-[1rem];
}

.footerLink {
  @apply text-[1.5em] lg:text-[2em] leading-none px-[0.25em] cursor-pointer text-center;
}

.dividerWrapper {
  @apply flex items-center h-full px-[0.25em];
}

:deep(.p-divider-vertical) {
  @apply !border-l !border-white !h-[2.5em] self-center;
}
</style>
