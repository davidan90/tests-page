<style lang="scss" scoped>
@import "../assets/styles/responsive";
@import "../assets/styles/colors";
@import "../assets/styles/mixins";

#navbar-mobile {
  span {
    cursor: pointer;
    text-transform: uppercase;
  }

  nav {
    display: none;
  }

  &.active {
    nav {
      @include flex(column, flex-start, inherit);

      background-color: $white-color;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 65px;
      width: 100vw;

      span {
        padding: 0.5rem 0 0 0.5rem;
      }
    }
  }
  @media #{$screen-m}, #{$screen-l} {
    display: none;
  }
}
</style>

<template>
  <div id="navbar-mobile" :class="{active: isMenuShow}">
    <span v-if="isMenuShow" class="close" @click="toogleMenu">{{ $t("app.close") }}</span>
    <span v-else class="title" @click="toogleMenu">{{ $t("app.menu") }}</span>
    <nav>
      <span>
        <router-link to="/home">{{ $t("home.title") }}</router-link>
      </span>
      <span>
        <router-link to="/">Nosotros</router-link>
      </span>
      <span>
        <router-link to="/">Contacto</router-link>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarMobile",
  data() {
    return {
      menuShow: false
    };
  },
  computed: {
    isMenuShow() {
      return this.menuShow;
    }
  },
  methods: {
    toogleMenu() {
      this.menuShow = !this.menuShow;
    }
  }
};
</script>
