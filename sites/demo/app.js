import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../../src/styles/reset.css";
import jzUI from "../../src/jz";

Vue.use(jzUI);

new Vue({
  el: "#demo",
  router,
  components: { App },
  template: "<App/>",
});
