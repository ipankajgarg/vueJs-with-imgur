import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store";
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

//default it uses hash history
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    {
      path: "/upload",
      component: UploadForm
    },

    {
      path: "/oauth2/callback",
      component: AuthHandler
    },
    { path: "/try", component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// secret:39a2d5fdbdcca77279af89f9e290b49d06731a99
// id:0954fe0ac8210ad
