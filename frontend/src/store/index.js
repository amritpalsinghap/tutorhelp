import Vue from "vue";
import Vuex from "vuex";
import slideIndex from "./modules/SlideIndex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    slideIndex,
  },
  strict: debug
});
