//state
const state = {
  SlideIndex: 0,
};
//getters
const getters = {
  getSlideIndex: () => {
    return state.SlideIndex;
  },
};

//actions
const actions = {
  SlideIndex({ commit }, slideIndexValue) {
    if (slideIndexValue >= 0 && slideIndexValue <= 2) {
      // mutating SlideIndex value
      commit("setSlideIndex", slideIndexValue);
      // callback("slideIndex Set to : ", slideIndexValue);
    } else {
      // callback("ERROR while setting the slideIndex");
      console.log("SlideIndex value change Successfully");
    }
  },
};

//mutations
const mutations = {
  setSlideIndex(state, slideIndexValue) {
    state.SlideIndex = slideIndexValue;
  },
};

//export
export default {
  state,
  getters,
  actions,
  mutations,
};
