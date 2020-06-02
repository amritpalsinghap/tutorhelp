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
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial", "sans-serif";
}
</style>
