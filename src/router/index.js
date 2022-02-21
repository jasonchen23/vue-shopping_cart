import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/ProductView.vue'
import Product from '../views/ProductDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
