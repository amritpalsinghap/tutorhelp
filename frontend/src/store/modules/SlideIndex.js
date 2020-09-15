//state
const state = {
  SlideIndex: 0,
};
//getters
const getters = {
  slideIndexValue: (state) => {
    return state.SlideIndex;
  },
};

//actions
const actions = {
  SlideIndex(commit, slideIndexValue, callback) {
    if (slideIndexValue >= 0 && slideIndexValue <= 2) {
      commit("setSlideIndex", slideIndexValue);
      callback("slideIndex Set to : ", slideIndexValue);
    } else {
      callback("ERROR while setting the slideIndex");
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
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

// setSlideIndex(newValue) {
//   if (this.debug) console.log("setSlideIndex triggered with", newValue);
//   this.state.SlideIndex = newValue;
// }
// clearSlideIndex() {
//   if (this.debug) console.log("clearSlideIndex triggered");
//   this.state.SlideIndex = "";
// }
