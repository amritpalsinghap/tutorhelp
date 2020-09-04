<template>
  <div>
    <b-navbar class="navArea" toggleable="md" type="dark" variant="info">
      <cstmGoBackBtn></cstmGoBackBtn>
      <b-navbar-brand to="/" class="logobtn">
        <img
          src="../../assets/Logo.svg"
          class="logoSize d-inline-block align-top"
          alt="PeopleTutor"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="btn btn-2">Home</b-nav-item>
          <b-nav-item to="/submitRequest" class="btn btn-2"
            >SubmitProblem</b-nav-item
          >
          <b-nav-item @click="goToAboutUsSlide" class="btn btn-2"
            >About us</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import cstmGoBackBtn from "@/components/Global/GoBack";
export default {
  name: "NavBar",
  components: {
    cstmGoBackBtn,
  },
  methods: {
    goToAboutUsSlide() {
      //1 if not on home page -> route to home page
      //2 set SlideIndex prop
      if (this.$route.name != "Home") {
        this.$router.push({ path: "/", params: { SlideIndex: "2" } });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "src/custom.scss";

@include media-breakpoint-down(sm) {
  .navArea {
    overflow: hidden;
    position: fixed;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    z-index: 1;
  }

  .navbar-collapse[data-v-6d3345fc] {
    background: #125762;
  }
}
@include media-breakpoint-up(lg) {
  .navArea {
    padding-left: 15rem;
    padding-right: 15rem;
    height: 4rem;
  }
}
.logoSize {
  width: 10rem;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(255, 255, 255);
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgb(255, 255, 255);
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
