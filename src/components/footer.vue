<script setup lang="ts">

import Divider from 'primevue/divider';
</script>

<template>
    <div class="footer">
        <ul class="nav-links">
            <li>常見問題</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>配送與退貨</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>售後與維修</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>聯絡我們</li>
        </ul>
    </div>
</template>

<style scoped>
    .footer{
        display: flex;
        width: 100%;
        height: 372px;
        background: #303133;
        margin-top: 80px;
        justify-content: center;
        align-items: center;
    }
    .nav-links{
        color: #FFFFFF;
        display: flex;          /* 3. 讓 <li> 橫著排 */
        gap: 2px;              /* 5. 讓列表項目之間有固定間距 */
        font-size: 32px;
 
    }
    .h-divider{
        color: #FFFFFF;
        height: 40px;
    }
</style>
