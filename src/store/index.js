import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";
import images from "./modules/images";

Vue.use(Vuex);
//so now vue can talk to vuex because is not only for view its a standalone library
export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});
