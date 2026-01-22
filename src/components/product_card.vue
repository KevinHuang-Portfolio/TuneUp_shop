
<script setup lang="ts">
    import { ref } from "vue";
    defineProps<{
    info: {
        id: number;
        name: string;
        oldPrice: number;
        newPrice: number;
        img: string;
    }
    }>();
</script>


<template>
  <div class="card">
    <img src="/picture/icon/discount_icon.svg" class="discount_icon" />
    
    <img :src="info.img" class="product-img" />
    
<div class="info">
      <p class="name">{{ info.name }}</p>
      <p class="old-price">TWD {{ info.oldPrice }}元</p>
      <p class="new-price">TWD {{ info.newPrice }}元</p>
    </div>
  </div>
</template>

<style scoped>
    .card {
        position: relative;
        width: 356px;
        height: 428px;
        background: #F2F3F5;
        align-items: center;
        text-align: center;
        border-radius: 8px;
    }
    
    .info {
        weight: 164px;
        display: grid;
        gap: 12px;
    }

    .product-img {
        margin-top: 20px;
        margin-left: 25px;
        margin-bottom: 41px;
    }

    .discount_icon {
        position : absolute;
        top: 5%;      
        left: 5%;
    }
</style>

