<script setup lang="ts">
    import Divider from 'primevue/divider';
    import { ref } from "vue";
    defineProps<{
        info: {
            id: number;
            name: string;
            price: number;
            img: string;
            amount: number;
        }
    }>();
</script>

<template>

    <div class="product_list">
        <img :src="info.img" alt="product_list_img" class="product_list_img" />
        <div class="info">
            <p class="name">{{ info.name }}</p>
            <p class="price">TWD {{ info.price }}元</p>
            <p class="sold-count">已售出{{ info.amount }}件</p>
        </div>
    </div>
    <Divider 
        style="margin: 24px 0;"
        :pt="{
            root: { 
                style: {
                    borderTop: '1px solid #ABABAB',
                    borderColor: '#ABABAB'
                }
            }
        }"
    />

</template>

<style scoped>
    .product_list {
        margin-top: 24px;
        display: flex;
        width: 419px;
        height: 151px;
    }

    .info {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        padding-top: 15px;
        gap: 12px;
    }

</style>

