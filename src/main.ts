import { createApp } from 'vue';
import PrimeVue from 'primevue/config'; // Gemini 說你沒寫這行
// 將原本報錯的那行改成這樣試試看
import Aura from '@primevue/themes/aura';
import './style.css'; 
import App from './App.vue';
import router from './router'

const app = createApp(App);

// 這裡就是 Gemini 提到的「app.use(PrimeVue)」初始化
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.use(router) // 告訴 Vue 我要使用路由功能
app.mount('#app');