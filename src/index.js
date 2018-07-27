import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";

new Vue({
  el: "#bequizApp",
  router,
  store,
  i18n,
  render: h => h(App)
});
