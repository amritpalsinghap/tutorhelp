<template>
  <div>
    <b-container fluid="sm">
      <b-row
        id="popupsection"
        class="justify-content-center align-items-center"
      >
        <b-col cols="sm-6" class="leftCol">
          <b-row align-h="center">
            <b-img
              :src="require('../assets/flyerPic.png')"
              class="img-section rounded mx-auto d-block"
            ></b-img>
          </b-row>
        </b-col>
        <b-col cols="sm-6">
          <b-row align-h="center">
            <cstmForm></cstmForm>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import cstmForm from "@/components/Form";
export default {
  name: "Submission",
  components: {
    cstmForm,
  },
};
</script>
<style lang="scss" scoped>
@import "src/custom.scss";
.img-section {
  @include media-breakpoint-down(md) {
    width: auto;
    height: auto;
    max-width: 80px;
    max-height: 120px;
  }
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 400px;
}
#popupsection {
  margin-top: 10%;
  background-color: #1493c2;
  border-radius: 10px;
}
.container-sm {
  max-width: 800px;
}

@include media-breakpoint-down(md) {
  .leftCol {
    display: none;
  }
}
</style>
