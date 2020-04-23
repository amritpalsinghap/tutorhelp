<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand to="/">
        <img src="../../assets/flyerPic.png"  width= "30px" height= "40px" class="d-inline-block align-top" alt="TutorHelp">TutorHelp
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/submitRequest">SubmitProblem</b-nav-item>
          <b-nav-item href="#">Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style>
</style>
