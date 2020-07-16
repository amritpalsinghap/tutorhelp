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
    <div class="page3">
      <div class="problemTextSection">
        <p>
          The Idea of teaching kids who really need help with their acadamics
          came from analysing hardworking students, who wanted more than what
          college provides, while maintaining their work/study schedule. Had
          been in the same shoes, the CEO felt the neccesity to find a way and
          provide FREE acadamic HELP. Our Tutors are Gradutated from well
          established/known Colleges/Universities with more than 3.5 GPA or
          Honor
        </p>
      </div>
    </div>
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
}
.problemTextSection {
  font-size: 3rem;
  color: #e8e8e8;
  font-family: "Walter Turncoat";
  display: block;
  width: 80%;
  height: 80%;
  min-height: auto;
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
