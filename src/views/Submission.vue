<template>
  <div>
    <b-container>
      <b-row id="popupsection">
        <b-col cols="6">
          <div id="row-2">
            <img src="../assets/flyerPic.png" width="300px" height="700px" />
          </div>
        </b-col>
        <b-col cols="6">
          <cstmForm></cstmForm>
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
<style >
#popupsection {
  background-color: aqua;
}
</style>