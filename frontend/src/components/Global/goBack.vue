<template>
  <div>
    <button @click="goBack" class="btn goBackbtn">
      <img
        src="../../assets/backButton.svg"
        class="goBackbtnImgSize"
        alt="BackButton"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: "goBack",
  methods: {
    goBack() {
      //check if the current route.path is home/root >if it is then stop the router from going back, not sure if the function should be added
      // if( (this.$route.path ) = "/")
      return this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.goBackbtn {
  margin-left: -15rem;
}

.goBackbtnImgSize {
  width: 2rem;
  height: 2rem;
}
</style>
