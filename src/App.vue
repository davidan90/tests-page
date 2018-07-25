<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "./components";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/styles/global";
@import "./assets/styles/colors";
@import "./assets/styles/responsive";

#app {
  color: $black-color;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0 auto;
  max-width: 1250px;

  main {
    section {
      padding: 1rem;
    }
    @media #{$screen-s} {
      padding-top: 60px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
