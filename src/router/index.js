import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealisationsView from '../views/RealisationsView.vue'

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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: HomeView
    }
  ]
})

export default router
