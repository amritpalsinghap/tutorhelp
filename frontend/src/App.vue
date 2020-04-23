<template>
  <div id="app">
    <div class="blur-bg"></div>
    <cstm-navbar></cstm-navbar>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
.blur-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-filter: blur(8px);
  filter: blur(8px);
  background: url("assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

body,
html {
  height: 100%;
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial", "sans-serif";
}
</style>
