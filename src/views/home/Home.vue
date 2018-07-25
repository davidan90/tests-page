<style lang="scss" scoped>
@import "../../assets/styles/colors";
@import "../../assets/styles/responsive";

#home {
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
  <section id="home">
    <div class="container">
      <Info />
    </div>
    <div class="container">
      <Quizes />
    </div>
  </section>
</template>

<script>
import { Info, Quizes } from "./components";
export default {
  name: "Home",
  components: {
    Info,
    Quizes
  }
};
</script>
