<template>
  <div id="app">
    <div class="bakcgroundImg"></div>
    <cstm-navbar></cstm-navbar>
    <router-view class="content" />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
.bakcgroundImg {
  background: url("assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.content {
 position: fixed;

}

body,
html {
  height: 100%;
  margin: 0;
}
</style>
