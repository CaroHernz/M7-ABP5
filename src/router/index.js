import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bootstrap',
    name: 'bootstrap',
    component: () => import('../views/BootstrapView.vue')
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import('../views/VuetifyView.vue')
  },
  {
    path: '/buefy',
    name: 'buefy',
    component: () => import('../views/BuefyView.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('../views/ElementView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router