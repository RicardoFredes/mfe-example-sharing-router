import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./components/Home.vue')
const Page = () => import('./components/Page.vue')

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/page', component: Page },
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});

export default routes