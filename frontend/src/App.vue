<template>
  <div id="app">
    <cstm-navbar></cstm-navbar>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style style lang="scss">
body,
html {
  background-color: #00d0d0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial", "sans-serif";
}
</style>
