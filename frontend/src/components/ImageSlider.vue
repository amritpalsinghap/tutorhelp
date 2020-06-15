<template>
  <div class="imageSliderSection">
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/backgroundImageLanguageList.svg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/backgroundImageTeaching.png">
        <template>
          <div class="teachingSection">
            <div class="SubmitProblemButton">
              <router-link to="/submitRequest">
              <p>
                
              </p>
                <button class="btn ">
                  <img
                    src="../assets/submitProblemButton.svg"
                    alt="SubmitProblemButton"
                  />
                </button>
              </router-link>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="../assets/backgroundImageAboutUs.svg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "imageSlide",
};
</script>
<style lang="scss">
@import "src/custom.scss";

.teachingSection {
  background-color: rgba(0, 0, 0, 0.4);
  border-style: solid;
  border-width: 2px 0px;
  border-color: rgba(255, 255, 255, 1);
  position: absolute;
  width: 100%;
  padding: 20px;
  margin: -400px 0px;
}
.SubmitProblemButton {
  z-index: 2;
  position: initial;
  text-align: center;
}
.carousel-control-prev,
.carousel-control-next {
  background: rgba(132, 235, 253, 0.3);
  width: 10%;
}
</style>
