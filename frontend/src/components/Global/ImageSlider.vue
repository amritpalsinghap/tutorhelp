<template>
  <div class="imageSliderSection">
    <b-carousel id="carousel-1" :interval="4000" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../../assets/backgroundImageLanguageList.svg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../../assets/backgroundImageTeaching.svg">
        <template>
          <div id="teachingSection">
            <p>Got a problem send it to me</p>
            <router-link to="/submitRequest">
              <button>click here</button>
            </router-link>
          </div>
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="../../assets/backgroundImageAboutUs.svg"
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
// @include media-breakpoint-down(lg) {
//   .carousel-1 {
//     img-width: 1024;
//     img-height: 980;
//   }
// }
</style>
