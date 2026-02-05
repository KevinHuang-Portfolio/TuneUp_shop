import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import page1 from '../view/page1.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/in-ear',
    name: 'in-ear',
    component: page1
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router