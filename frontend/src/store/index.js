import Vue from "vue";
import vuex from "vuex";
import slideIndex from "./modules/SlideIndex";

Vue.use(vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    slideIndex,
  },
  strict: debug
});
