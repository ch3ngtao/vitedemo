import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pageOne'
  },
  {
    path: '/pageOne',
    name: 'pageOne',
    component: () => import('@/views/pageOne/pageOne.vue'),
    meta: {
      title: 'pageOne'
    }
  }
]
const router = createRouter({
  history: createWebHistory('/vitedemo/'),
  routes
})
export default router;