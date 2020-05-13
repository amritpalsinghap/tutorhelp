<template>
  <div class="blur-bg">
    
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped lang="scss">
.blur-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-filter: blur(8px);
  filter: blur(8px);
  background: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
</style>
