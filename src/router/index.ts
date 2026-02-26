import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/HomeView.vue';
import CategoryView from '../view/CategoryView.vue';
import ProductDetailView from '../view/ProductDetailView.vue';
import CartView from '../view/CartView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/in-ear',
    name: 'in-ear',
    component: CategoryView,
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetailView,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

