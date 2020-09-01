<template>
  <div class="HomePage">
    <div class="imageslider">
      <cstmimageslider></cstmimageslider>
    </div>
    <div class="imageslidervertical">
      <cstmimageslidervertical></cstmimageslidervertical>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cstmimageslider from "@/components/ImageSlider";
import cstmimageslidervertical from "@/components/ImageSliderVertical";
export default {
  name: "Home",
  components: {
    cstmimageslider,
    cstmimageslidervertical,
  },
};
</script>
<style lang="scss" scoped>
@import "src/custom.scss";

.imageslidervertical {
  display: none;
}

@include media-breakpoint-down(md) {
  .imageslider {
    display: none;
  }
  .imageslidervertical {
    padding-top: 60px;
    display: block;
  }
}
</style>
