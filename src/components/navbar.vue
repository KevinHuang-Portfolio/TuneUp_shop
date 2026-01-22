<script setup>
import { ref } from "vue";
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
</script>

<template class="body">
    <div class="navbar">
        <img src="/picture/logo.svg" alt="Logo" class="logo" />

        <ul class="nav-links">
            <li>首頁</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>入耳式</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>耳塞式</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>耳罩式</li>
            <div class="h-divider">
                <Divider layout="vertical" />
            </div>
            <li>其他耳機</li>
        </ul>

        <div class="search-bar">
            <IconField iconPosition="right" class="search-field">
                <InputText 
                v-model="value" 
                placeholder="#耳機關鍵字" 
                class="search-input" />
                <InputIcon class="icon-wrapper">
                    <img src="/picture/icon/search.svg" 
                    class="search-icon-img" />
                </InputIcon>
            </IconField>
        </div>

        <Button 
        class="login-button"
        type="button" 
        label="Log in / Sign up" 
        :loading="loading" 
        @click="load" />
    </div>


</template>

<style scoped>


.navbar{
    background-color:#ffffff;
    width: 1728px;
    height: 206px;
    display: flex;
    align-items: center;
}

.logo{
    margin-left: 116px;
    width: 216px;
    height: 112px;
}

.nav-links{
    display: flex;          /* 3. 讓 <li> 橫著排 */
    gap: 10px;              /* 5. 讓列表項目之間有固定間距 */
    margin-left: 66px;      /* 跟 Logo 保持距離 */
    margin-top: 10px;
    font-size: 24px;
    height: 42px;
    width: 576px;
}

:deep(.p-divider-vertical) {
    border-left: 1px solid #333; /* 把顏色變深 */
    height: 18px;                /* 控制長度 */
    align-self: center;          /* 垂直置中 */
}

.search-input {
    width: 360px;     /* 寬度隨你調整 */
    height: 56px;       /* 固定高度 56px */
    margin-left: 66px;
}

/* Icon 容器 */
.search-field :deep(.p-inputicon) {
    transform: translateY(-33%);
}

.login-button {
    width: 178px;
    height: 56px;
    margin-left: 35px;
    background: #000;
    border: 1px solid #000;
}

.login-button:not(:disabled):hover {
    background: #000;
    border-color: #000 ;
}
</style>


