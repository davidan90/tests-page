<style lang="scss" scoped>
@import "../../../assets/styles/mixins";
@import "../../../assets/styles/responsive";

#quizes {
  @include flex(column, flex-start, inherit);

  @media #{$screen-s} {
    @include flex(column, center, inherit);
  }
}
</style>

<template>
  <article id="quizes">
    <h2 class="section-title">
      {{ $t("home.quizes.title") }}
    </h2>
    <QuizBox v-for="(quiz, index) in quizes" :key="`quiz_title_${index}`" :quiz="quiz"/>
  </article>
</template>
<script>
import QuizBox from "./QuizBox";

const quizes = [
  {
    className: "intelligence"
  },
  {
    className: "verbal"
  },
  {
    className: "numerical"
  },
  {
    className: "perceptive"
  },
  {
    className: "memory"
  }
];

export default {
  name: "Quizes",
  components: {
    QuizBox
  },
  computed: {
    quizes() {
      return quizes;
    }
  }
};
</script>
