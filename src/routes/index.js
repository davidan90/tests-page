import Vue from "vue";
import Router from "vue-router";
import { homeRoutes } from "./home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [...homeRoutes]
});
