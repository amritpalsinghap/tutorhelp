<template>
  <div class="pagesliderVertical">
    <div class="mousescroller">
      <!-- <cstm-mouserscroller></cstm-mouserscroller> -->
    </div>
    <div class="page1"></div>
    <div class="page2">
      <div id="teachingSection">
        <router-link to="/submitRequest">
          <button class="btn SubmitProblemButtonmb">
            <img
              src="../assets/submitProblemButton.svg"
              alt="SubmitProblemButton"
            />
          </button>
        </router-link>
      </div>
    </div>
    <div class="page3"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.page1 {
  background: url("../assets/backgroundImageLanguageListVertical.svg") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 730px;            
}
.page2 {
  background: url("../assets/backgroundImageTeachingVertical.png") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 730px;
}
.SubmitProblemButtonmb {
  padding: 140% 60%;
}

img {
  width: 5rem;
}
.page3 {
  background: url("../assets/backgroundImageAboutUsVertical.svg") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 730px;
}
</style>
