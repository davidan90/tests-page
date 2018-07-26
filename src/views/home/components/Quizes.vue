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
    className: "intelligence",
    tests: [
      {
        id: "i1",
        title: "Test i 1"
      },
      {
        id: "i2",
        title: "Test i 2"
      }
    ]
  },
  {
    className: "verbal",
    tests: [
      {
        id: "v1",
        title: "Test v 1"
      }
    ]
  },
  {
    className: "numerical",
    tests: [
      {
        id: "n1",
        title: "Test n 1"
      },
      {
        id: "n2",
        title: "Test n 2"
      }
    ]
  },
  {
    className: "perceptive",
    tests: [
      {
        id: "p1",
        title: "Test p 1"
      },
      {
        id: "p2",
        title: "Test p 2"
      }
    ]
  },
  {
    className: "memory",
    tests: [
      {
        id: "m1",
        title: "Test m 1"
      }
    ]
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
