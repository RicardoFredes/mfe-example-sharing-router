export default [
  { path: '/', component: () => import('./components/Home') },
  { path: '/page', component: () => import('./components/Page') },
]
