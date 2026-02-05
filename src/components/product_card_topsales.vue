
<script setup lang="ts">
    defineProps<{
    info: {
        id: number;
        name: string;
        price: number;
        img: string;
        flag: string;
        isLarge: boolean;
    }
    }>();
</script>


<template>
    <div v-if="info.isLarge" class="card_top">
        <img :src="info.flag" class="product_card_flag is-featured" />  
        <img :src="info.img" class="topsales-img" />

        <div class="info">
            <p class="name">{{ info.name }}</p>
            <p class="price">TWD {{ info.price }}元</p>
            <p class="sold-count">已售出 8888 件</p>
        </div>
    </div>

    <div v-else class="card">
        <img :src="info.flag" class="product_card_flag" />
        <img :src="info.img" class="product-img" />

        <div class="info">
            <p class="name">{{ info.name }}</p>
            <p class="price">TWD {{ info.price }}元</p>
            <p class="sold-count">已售出 8888 件</p>
        </div>
    </div>
</template>

<style scoped>
    .card_top {
        width: 736px;
        height: 428px;
        background-color: #F2F3F5;
        border-radius: 8px; /* 圓角框 */
        position: relative; /* 讓旗幟可以相對於這個框定位 */
        display: flex;
        margin-top: 28px;
        align-items: center;
    }

    .product_card_flag {
        position: absolute;
        top: 0%;      
        left: 18px;
    }

    .info {
        width: 164px;
        height: 96px;
        display: grid;
        gap: 12px;
        flex-direction: column;
        text-align: center;
    }

    .card{
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

    .product-img {
        margin-top: 20px;
        margin-bottom: 41px;
    }

    .topsales-img {
        margin-left: 48px;
        margin-right: 44px;
    }
</style>

