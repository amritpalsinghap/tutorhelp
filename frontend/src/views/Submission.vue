<template>
  <div>
    <b-container fluid="md">
      <b-row id="popupsection" class="justify-content-center align-items-center">
        <b-col cols="6">
          <b-row align-h="center">
            <img src="../assets/flyerPic.png" id="img-section" />
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-row align-h="center">
            <cstmForm></cstmForm>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import cstmForm from "@/components/form";
export default {
  name: "Submission",
  components: {
    cstmForm
  }
};
</script>
<style>
#img-section {
  width: 400px;
  height: 700px;
}
#popupsection {
  margin-top: 10%;
  background-color: rgba(81, 207, 245, 0.5);
  border-radius: 40px;
}
</style>