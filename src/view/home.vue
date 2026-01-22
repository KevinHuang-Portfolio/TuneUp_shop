<script setup lang="ts">
    import { ref } from "vue";
    import Button from 'primevue/button';

    import ProductCard from '../components/product_card.vue'

    const products = [
    { id: 1, name: 'AirPods Pro 3', oldPrice: 7499, newPrice: 3499, img: '/picture/product_card/sales_area/product_card_1.svg' },
    { id: 2, name: 'Sony WH-1000XM5', oldPrice: 11900, newPrice: 9900, img: '/picture/product_card/sales_area/product_card_2.svg' },
    { id: 3, name: 'Bose QC45', oldPrice: 10500, newPrice: 8500, img: '/picture/product_card/sales_area/product_card_3.svg' },
    { id: 4, name: 'TuneUp Pro 1', oldPrice: 5999, newPrice: 2999, img: '/picture/product_card/sales_area/product_card_4.svg' }
    ]
</script>

<template>
    <div class="banner">
        <img src="/picture/banner.svg" alt="banner_1" class="banner_1" />
        <Button label="立即選購"  class="banner_button"/>
    </div>

    <div class="sales_area">
        <a href="#" class="sales_area_title">優惠專區</a>
        <div class="product-grid">
            <ProductCard v-for="item in products" :key="item.id" :info="item" />
        </div>
    </div>


</template>

<style scoped>
.banner{
    position: relative;
    display: flex;
    justify-content: center;
}

.banner_button{
    width: 178px;
    height: 52px;
    position: absolute;
    bottom: 30%;        /* 距離底部 20% 的位置 */
    left:10.5%;
    background: #ffffff;
    border: 1px solid #ffffff;
    letter-spacing: 2px;
}

.banner_button :deep(.p-button-label) {
    color: #000000; /* 你想要的文字顏色，例如白色 */
    font-weight: bold; /* 既然要顯眼，可以加粗 */
    font-size: 20px;
    font-weight: 900;
}

.banner_button:not(:disabled):hover {
    background: #ffffff ;
    border-color: #ffffff ;
}

.sales_area {
    margin-top: 36px;
    padding-left: 116px;
    padding-right: 116px;

}

.sales_area_title {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 24px;
}

.product-grid {
    width: 1496px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;

}
</style>