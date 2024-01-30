import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

export default ({ el, basename }) => {
  const app = createApp(App);
  app.use(router);
  app.mount(el);

  app.$destroy = app.unmount;
  app.$router = router;

  return app;
};
