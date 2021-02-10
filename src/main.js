import { createApp } from "vue";
import "./tailwind.css";
import { routes } from "./router";
import { createRouter, createWebHistory } from "vue-router";

import Amplify, { Auth } from "aws-amplify";
Amplify.configure({});

import App from "./App.vue";

let app = createApp(App);

let router = createRouter({
  history: createWebHistory(),
  //linkActiveClass: 'bg-black bg-opacity-25',
  routes: import.meta.hot ? [] : routes,
});

if (import.meta.hot) {
  let removeRoutes = [];

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

  import.meta.hot.accept("./routes.js", ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute();
    removeRoutes = [];
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace("");
  });
}

app.use(router);
app.mount("#app");
