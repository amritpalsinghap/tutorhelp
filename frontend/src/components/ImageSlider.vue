<template>
  <div class="imageSliderSection">
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../assets/backgroundImageLanguageList.svg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/backgroundImageTeaching.svg">
        <template>
          <div id="teachingSection">
            <router-link to="/submitRequest">
              <button class="btn SubmitProblemButton">
                <img
                  src="../assets/submitProblemButton.svg"
                  alt="SubmitProblemButton"
                />
              </button>
            </router-link>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/backgroundImageAboutUs.svg"
        ><p></p
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

.carousel-caption {
  top: 10rem;
  bottom: auto;
}
.SubmitProblemButton {
  width: 180px;
  height: 90px;
}
</style>
