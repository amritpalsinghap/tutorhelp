export const store = {
    debug: true,
    state: {
      SlideIndex: 0,
    },
    setSlideIndex(newValue) {
      if (this.debug) console.log("setSlideIndex triggered with", newValue);
      this.state.SlideIndex = newValue;
    },
    clearSlideIndex() {
      if (this.debug) console.log("clearSlideIndex triggered");
      this.state.SlideIndex = "";
    },
  };