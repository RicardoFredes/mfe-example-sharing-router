export default [
  { path: '/', component: () => import('./components/Home.vue') },
  { path: '/page', component: () => import('./components/Page.vue') },
]