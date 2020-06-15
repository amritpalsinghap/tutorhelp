<template>
  <div id="app">
    <cstm-navbar></cstm-navbar>
    <cstmModal></cstmModal>
    <router-view />
  </div>
</template>
<script>
import cstmModal from "@/components/ModalTest";
export default {
  name: "App",
  components:{
    cstmModal
  }
};
</script>

<style style lang="scss" scoped>
body,
html {
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial", "sans-serif";
}
</style>
