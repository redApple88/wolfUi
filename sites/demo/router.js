import Vue from "vue";
import VueRouter from "vue-router";
import Config from "../../src/config";

const Index = () => import("./views/index.vue");
const DemoNav = () => import("./views/demoNav.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/index",
    components: {
      demoNav: DemoNav,
      main: Index,
    },
  },
  {
    path: "/index",
    components: {
      demoNav: DemoNav,
      main: Index,
    },
  },
];

Config.packages.map((item) => {
  if (item.showDemo === false) {
    return;
  }
  const pkgName = item.name.toLowerCase();
  routes.push({
    path: "/" + pkgName,
    components: {
      demoNav: DemoNav,
      main: (resolve) => require([`@/packages/${pkgName}/demo.vue`], resolve),
    },
    name: item.name,
  });
});

const router = new VueRouter({
  routes,
});

export default router;
