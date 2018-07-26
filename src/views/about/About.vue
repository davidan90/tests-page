<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/responsive";

#about {
  .container {
    @media #{$screen-s} {
      background-color: $gray-color;
      border-radius: 5px;
      margin: 0.5rem 0;
      padding: 0 0.5rem;
    }
  }
}
</style>

<template>
  <section id="about">
    <div class="container">
      <Info />
    </div>
  </section>
</template>

<script>
import { Info } from "./components";

export default {
  name: "About",
  components: {
    Info
  }
};
</script>
