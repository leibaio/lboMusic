import { createRouter, createWebHistory } from 'vue-router'
import content from '../views/content.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    }
  ]
})

export default router
