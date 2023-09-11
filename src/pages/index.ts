import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./main/ui/MainPage.vue')
  },
  {
    path: '/:id',
    name: 'chat',
    component: () => import('./chat/ui/ChatPage.vue')
  },
]