<template>
  <div id="app">
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
body,
html {
  height: 100%;
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial", "sans-serif";
}
</style>
