import Vue from "vue";
import Router from "vue-router";
import TablePage from "@/views/TablePage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: TablePage,
    },
    {
      path: "/previews",
      component: () => import("./views/PreviewsPage.vue"),
    },
  ],
});
