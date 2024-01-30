import * as VueRouter from 'vue-router'
import routes from './routes'

const basePath = '/remote3'

const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  // history: VueRouter.createWebHistory(),
  routes: routes.map((route) => ({
    ...route,
    path: `${basePath}${route.path}`,
  })),
});

export default router