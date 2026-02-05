
<script setup lang="ts">
    import { ref } from "vue";
    defineProps<{
    info: {
        id: number;
        name: string;
        oldPrice: number;
        newPrice: number;
        img: string;
        Price?: number;
    }
    type: 'default' | 'discount';
    }>();
</script>


<template>
    <div class="product_card">

        <div v-if="type === 'default'" class="default_card">
            
            <img :src="info.img" class="default_product_img" />
            
            <div class="default_info">
            <p class="name">{{ info.name }}</p>
            <p class="price">TWD {{ info.Price }}元</p>
            <p class="note">點我看詳情</p>
            </div>

        </div>

        <div v-else-if="type === 'discount'" class="discount_card">
            <img src="/src/picture/icon/discount_icon.svg" class="discount_icon" />
            
            <img :src="info.img" class="product-img" />
            
            <div class="info">
            <p class="name">{{ info.name }}</p>
            <p class="old-price">TWD {{ info.oldPrice }}元</p>
            <p class="new-price">TWD {{ info.newPrice }}元</p>
            </div>
        </div>



    </div>

  
</template>

<style scoped>

    .default_card {
        display: flex;
        flex-direction: column;
        background: #F2F3F5;
        width: 287px;
        height: 344px;
        border-radius: 8px;
        justify-content: center;
    }



    .discount_card {
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

    .discount_icon {
        position : absolute;
        top: 18px;      
        left: 18px;
    }

    .new-price {
        color: red;
    }
</style>

