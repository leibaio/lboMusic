import { createRouter, createWebHistory } from 'vue-router'
import content from '../views/content.vue'
import search from '../views/search.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})

export default router
