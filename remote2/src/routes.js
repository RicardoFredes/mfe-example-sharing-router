export default [
  {
    path: "/",
    component: () => import("./components/Home.vue"),
    children: [
      { path: "home", component: () => import("./components/HomeChild.vue") },
    ],
  },
  {
    path: "/page",
    name: "PAGE2",
    component: () => import("./components/Page.vue"),
  },
];
