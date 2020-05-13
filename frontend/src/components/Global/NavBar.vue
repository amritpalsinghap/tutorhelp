<template>
  <div>
    <b-navbar class="navArea" toggleable="md" type="dark" variant="info">
      <b-navbar-brand to="/" class="logobtn">
        <img
          src="../../assets/flyerPic.png"
          width="30px"
          height="40px"
          class="d-inline-block align-top"
          alt="TutorHelp"
        />PeopleTutor
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/submitRequest" class="btn btn-2">SubmitProblem</b-nav-item>
          <b-nav-item to="/about" class="btn btn-2">About us</b-nav-item>
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
<style lang="scss" scoped>
@import "src/custom.scss";
@include media-breakpoint-up(lg) {
  .navArea {
    padding-left: 15rem;
    padding-right: 15rem;
    height: 4rem;
  }
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(255, 255, 255);
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(255, 255, 255);
}
.logobtn:hover:after {
  font-size: 1.5rem;
}
.btn {
  font-weight: 600;
  color: #ffffff;
}
.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 100%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 100%;
}
</style>
