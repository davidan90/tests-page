<style lang="scss" scoped>
@import "../assets/styles/responsive";

#navbar {
  span {
    border-right: 1px solid;
    font-size: 1.2rem;
    padding: 0 5px;
    text-transform: uppercase;

    &:last-child {
      border-right: 0;
    }
  }

  @media #{$screen-s} {
    display: none;
  }
}
</style>

<template>
  <nav id="navbar">
    <span>
      <router-link to="/home">{{ $t("home.title") }}</router-link>
    </span>
    <span>
      <router-link to="/about">{{ $t("about.title") }}</router-link>
    </span>
    <span>
      <router-link to="/contact">{{ $t("contact.title") }}</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
