import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"

const startsWithSlash = (path = "") => path.startsWith("/") ? path : `/${path}`

export const makeRouter = ({ basename = 'remote2', mode = "history" } = {}) => {
  Vue.use(VueRouter);

  const routesWithBase = basename ? routes.map((route) => ({
    ...route,
    path: `${startsWithSlash(basename)}${route.path}`,
  })) : routes;

  return new VueRouter({
    mode,
    routes: routesWithBase,
  });
}

