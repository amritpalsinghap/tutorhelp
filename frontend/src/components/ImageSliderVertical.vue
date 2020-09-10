<template>
  <div class="pagesliderVertical">
    <div class="mousescroller">
      <!-- <cstm-mouserscroller></cstm-mouserscroller> -->
    </div>
    <div class="page1"></div>
    <div class="page2">
      <div id="teachingSection">
        <p class="textSection">
          Got an Assignment ! <br />
          STUCK some where !
        </p>
        <div class="SubmitProblemButton">
          <router-link to="/submitRequest" class="btn ">
            <button class="btn submitBtn">
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
      <div class="textSection">
        <div class="aboutUsSection">
          <textarea
            id="textarea-no-resize"
            class="aboutUsArea"
            rows="20"
            cols="25"
            v-model="text"
            readonly
            no-resize
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myJSON from "@/components/Global/aboutUs.json";
var textObj = JSON.stringify(myJSON.aboutUs);
export default {
  data() {
    return {
      text: textObj,
    };
  },
};
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
.submitBtn {
  margin-top: 270px;
  margin-left: 45px;
}
img {
  width: 7rem;
}
.SubmitProblemButton {
  position: absolute;
  text-align: center;
  padding: 10px 0px;
}
.textSection {
  font-size: 2rem;
  color: #e8e8e8;
  font-family: "Walter Turncoat";
  display: block;
  width: 80%;
  height: 80%;
  min-height: auto;
  margin: 0px;
}

.aboutUsArea {
  margin-top: 40px;
  margin-left: 5px;
  color: white;
  background: transparent;
  border: transparent;
}

.aboutUsSection {
  font-size: 1.2rem;
  padding: 20px;
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
