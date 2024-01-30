import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import RenderComponentFile from "./components/RenderComponentFile.vue";

Vue.config.productionTip = false;

import RoutesRemote1 from "remote1/routes";

function normalizePath(routerArr) {
  return routerArr.map(item => {
    item.path = item.path.replace('/', '')
    return item
  })
}

const createRoutes = () => [
  { path: "/", name: "home", component: () => import("./components/Home.vue") },
  {
    path: "/page",
    name: "page",
    component: () => import("./components/Page.vue"),
  },

  // slots para apps remotos
  {
    path: "/remote1",
    component: RenderComponentFile,
    children: [...Array.from(normalizePath(RoutesRemote1))],
  },
  { path: "/remote2*", component: () => import("./components/Remote2.vue") },
  { path: "/remote3*", component: () => import("./components/Remote3.vue") },
  { path: "/remote4*", component: () => import("./components/Remote4.vue") },
];

export const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: createRoutes(),
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app-host");
