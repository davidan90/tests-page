<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/responsive";
@import "../assets/styles/colors";

#main-header {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.75);
  padding: 0.5rem 0;

  .section-inner {
    @include flex(row, center, space-between);

    padding: 0 1rem;

    picture {
      display: inline-block;

      img {
        height: 90px;
        width: 250px;

        @media #{$screen-s} {
          height: 45px;
          width: 125px;
        }
      }
    }
  }

  @media #{$screen-s} {
    background-color: $white-color;
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>

<template>
  <header id="main-header">
    <div class="section-inner">
      <picture class="logo-container">
        <img src="../assets/img/logo_header.png">
      </picture>
      <NavBar />
      <NavBarMobile />
    </div>
  </header>
</template>

<script>
import NavBar from "./Navbar";
import NavBarMobile from "./NavbarMobile";

export default {
  name: "Header",
  components: {
    NavBar,
    NavBarMobile
  }
};
</script>
