import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'none',
        }
    }
});

app.use(router);
app.mount('#app');

