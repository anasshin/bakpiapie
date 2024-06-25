import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/product/IndexProduct.vue')
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: () => import('../views/product/DetailProduct.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/cart/checkout.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/cart/payment.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('../views/cart/confirmation.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/auth/signin.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/signup.vue')
  }
  // {
  //   path: '/sample',
  //   name: 'sample',
  //   component: () => import('../views/product/AppProduct.vue')
  // }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
