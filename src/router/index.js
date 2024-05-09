import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealisationsView from '../views/RealisationsView.vue'
import ProjetBtsPoView from '@/views/ProjetBtsPoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Realisations',
      name: 'realisations',
      component: RealisationsView
    },
    {
      path: '/Projet-PO',
      name: 'projet-po',
      component: ProjetBtsPoView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: HomeView
    }
  ]
})

export default router
