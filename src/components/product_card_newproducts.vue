
<script setup lang="ts">
    import { ref } from "vue";
    defineProps<{
    info: {
        id: number;
        name: string;
        Price: number;
        img: string;
    }
    }>();
</script>


<template>
  <div class="card">
    <img src="/src/picture/icon/new_icon.svg" class="new_icon" />
    
    <img :src="info.img" class="product-img" />
    
    <div class="info">
      <p class="name">{{ info.name }}</p>
      <p class="price">TWD {{ info.Price }}元</p>
      <p class="note">點我看詳情</p>
    </div>

  </div>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 356px;
        height: 428px;
        background: #F2F3F5;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        margin-top: 28px;
    }
    
    .info {
        width: 164px;
        display: grid;
        gap: 12px;
        text-align: center;
        align-items: center;
    }

    .product-img {
        margin-top: 20px;
        margin-bottom: 41px;
    }

    .new_icon {
        position : absolute;
        top: 18px;      
        left: 18px;
    }

    .price {
        color: red;
    }
</style>

