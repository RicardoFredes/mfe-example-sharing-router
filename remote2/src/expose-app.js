import Vue from "vue";
import App from "./App.vue";

import { makeRouter } from "./router";

Vue.config.productionTip = false;

export default ({ el, basename }) => {
  const router = makeRouter({ basename, mode: "abstract" });
  const app = new Vue({ router, render: (h) => h(App) });
  app.$mount(el);
  return app;
};
