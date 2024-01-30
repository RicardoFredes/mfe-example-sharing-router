import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("./components/Home"),
    name: "remote3.home",
  },
  {
    path: "/page",
    component: () => import("./components/Page"),
    name: "remote3.page",
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app-remote3');
