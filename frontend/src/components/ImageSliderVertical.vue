<template>
  <div class="pagesliderVertical">
    <div class="mousescroller">
      <!-- <cstm-mouserscroller></cstm-mouserscroller> -->
    </div>
    <div class="page1"></div>
    <div class="page2">
      <div id="teachingSection">
        <p class="problemTextSection">
          Got a EXAM ! <br />
          STUCK some where !
        </p>
        <div class="SubmitProblemButton">
          <router-link to="/submitRequest">
            <button class="btn ">
              <img
                src="../assets/submitProblemButton.svg"
                alt="SubmitProblemButton"
              />
            </button>
          </router-link>
        </div>
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
  width: 100%;
  height: 730px;
}
.page2 {
  background: url("../assets/backgroundImageTeachingVertical.svg") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 730px;
}
.SubmitProblemButtonmb {
  padding: 140% 60%;
}
.SubmitProblemButton {
  position: absolute;
  text-align: center;
  padding: 10px 0px;
  margin: 40% 60%;
}
.problemTextSection {
  font-size: 3rem;
  color: #e8e8e8;
  font-family: "Walter Turncoat";
  display: block;
  width: 80%;
  height: 80%;
  min-height: auto;
  margin: 30px auto 0 auto;
  padding: 20px 30px;
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
  width: 100%;
  height: 730px;
}
</style>
