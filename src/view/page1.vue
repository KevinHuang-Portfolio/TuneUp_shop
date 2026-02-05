<script setup lang="ts">
    import Slider from 'primevue/slider';
    import { ref } from 'vue';
    const priceRange = ref([300, 30000]);
    import Footer from '../components/footer.vue';
    import ProductLists from '../components/product_list.vue';
    import ProductCardDefault from '../components/product_card.vue';

    const product_list = [
        { id: 1, name: 'AirPods Pro 3', price: 7499,  img: '/src/picture/product_list/product_list_1.svg', amount: 8888 },
        { id: 2, name: 'AirPods Pro 3', price: 7499,  img: '/src/picture/product_list/product_list_2.svg', amount: 8888 }
    ]

    const NewProducts = [
    { id: 1, name: 'AirPods Pro 3', Price: 7499,  img: '/src/picture/product_card/sales_area/product_card_1.svg' },
    { id: 2, name: 'Sony WH-1000XM5', Price: 11900,  img: '/src/picture/product_card/sales_area/product_card_2.svg' },
    { id: 3, name: 'Bose QC45', Price: 10500,  img: '/src/picture/product_card/sales_area/product_card_3.svg' },
    { id: 4, name: 'TuneUp Pro 1', Price: 5999,  img: '/src/picture/product_card/sales_area/product_card_4.svg' }    
    ]

    const DefaultCards = [
    { id: 1, name: 'AirPods Pro 3', Price: 7499,  img: '/src/picture/product_card/default/default_card_1.svg', type:"default" },
    { id: 2, name: 'Sony WH-1000XM5', Price: 11900,  img: '/src/picture/product_card/default/default_card_1.svg', type:"default" },
    { id: 3, name: 'Bose QC45', Price: 10500,  img: '/src/picture/product_card/default/default_card_1.svg', type:"default" },
    { id: 4, name: 'TuneUp Pro 1', Price: 5999,  img: '/src/picture/product_card/default/default_card_1.svg', type:"default" }    
    ]
</script>

<template>
  <div class="page-container">
    <div class="r_list">
        <div class="price_range">
            <a href="#" class="price_range_title">價格區間</a>
            <div class="price-content">
                <div>
                    <label>Min</label>
                    <p id="min-value">${{ priceRange[0] }}</p>
                </div>
                <div>
                    <label>Max</label>
                    <p id="max-value">${{ priceRange[1] }}</p>  
                </div>             
            </div>
            <Slider 
            v-model="priceRange" 
            :min="0" 
            :max="30000" 
            :step="100"
            range 
            />
        </div>

        <div class="product_list_area">
            <a href="#" class="product_list_title">特色商品</a>
            <ProductLists v-for="item in product_list" :key="item.id" :info="item" />
        </div>
    </div>

    <div class="product_card_area">
        <a href="#" class="product_card_title">所有商品</a>
        <div class="prodcuct_card_list">
            <ProductCardDefault v-for="item in DefaultCards" :key="item.id" :info="item" type="default"/>
        </div>
    </div>


  </div>
</template>

<style scoped>
.page-container {
  padding-right: 116px;
  display: flex;
}

.r_list {
    width: 595px;
    height: 5000px;
    background: #EDEDED;
    padding-top: 60px;
    padding-left: 116px;
    padding-right: 60px;
}

.price_range_title {
    display: inline-block;
    margin-bottom: 48px;
    font-size: 36px;
    color: #000000;
}

/* 1. 把上方那個顯示金額的小標籤換成橘黃色 */
:deep(.p-slider-range) {
    background: #FFB600; /* 換成你的橘黃色 */
}

/* 2. 把那個黑色的圓點 (Handle) 換色 */
:deep(.p-slider-handle) {
    background: #000000;      /* 變成黑色圓點 */
    border: 2px solid #fff;   /* 加個白邊讓它更清晰 */
    width: 20px;
    height: 20px;
    border-radius: 50%;       /* 確保它是圓的 */
}

/* 3. 當滑鼠移上去或是點擊時，去掉原本預設的藍色光暈 */
:deep(.p-slider-handle:focus) {
    box-shadow: 0 0 0 0.2rem rgba(255, 182, 0, 0.4); /* 換成淡淡的橘黃光 */
}

/* 4. 底下的橫線顏色 */
:deep(.p-slider) {
    background: #e0e0e0; /* 底色換成淺灰色 */
    height: 4px;         /* 讓線條細一點比較精緻 */
}

.price-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
}

label {
    font-size: 24px;
    font-weight: 500;
}

p {
    font-size: 20px;
    font-weight: 600;
}

.product_list_title {
    display: inline-block;
    margin-top: 64px;
    font-size: 36px;
    color: #000000;
}

.product_card_area {
    padding-right: 116px;
    padding-left: 116px;
}

.product_card_title {
    display: inline-block;
    margin-top: 64px;
    font-size: 36px;
    color: #000000;
}

.prodcuct_card_list{
    display: flex;
    gap: 24px 20px;
    width: 901px;
    flex-wrap: wrap;
}
</style>