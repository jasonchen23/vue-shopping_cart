import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductDetailView.vue'
import CheckoutView from '../views/CheckoutView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: ProductView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
