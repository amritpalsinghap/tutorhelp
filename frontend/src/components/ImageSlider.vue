<template>
  <div class="imageSliderSection">
    <b-carousel id="carousel-animation" :interval="50000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/backgroundImageLanguageList.svg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/backgroundImageTeaching.svg">
        <template>
          <div class="teachingSection">
            <p class="textSection">
              Got a EXAM ! <br />
              STUCK some where !
            </p>
            <div class="SubmitProblemButton">
              <router-link to="/submitRequest" class="btn ">
                <img
                  src="../assets/submitProblemButton.svg"
                  alt="SubmitProblemButton"
                />
              </router-link>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/backgroundImageAboutUs.svg">
        <template>
          <div class="textSection">
            <div class="aboutUsSection">
              <p>
                The Idea of teaching students who really need help with their
                acadamics came from analysing hardworking students, who wanted
                more than what college provides, while maintaining their
                work/study schedule. Had been in the same shoes, the CEO felt
                the neccesity to find a way and provide FREE acadamic HELP. Our
                Tutors are Gradutated from well established/known
                Colleges/Universities with more than 3.5 GPA or Honor
              </p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "imageSlide",
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Walter+Turncoat);
@import "src/custom.scss";

.carousel-caption {
  position: absolute;
  padding: 0px;
  z-index: 10;
  color: #fff;
  text-align: center;
  right: 10%;
  bottom: 20px;
  left: 10%;
  top: 0;
}

img {
  vertical-align: middle;
  border-style: none;
  width: 150px;
}

.SubmitProblemButton {
  position: absolute;
  text-align: center;
  padding: 10px 0px;
  margin: 20% 40%;
}
.textSection {
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

.aboutUsSection {
  padding-top: 30px;
  font-size: 2rem;
}

@include media-breakpoint-down(lg) {
  .aboutUsSection {
    font-size: 1.2rem;
    padding: 20px;
  }
}
@include media-breakpoint-down(lg) {
  .textSection {
    font-size: 2rem;
  }
}
.carousel-control-prev,
.carousel-control-next {
  background: rgba(132, 235, 253, 0.3);
  width: 10%;
}
</style>
