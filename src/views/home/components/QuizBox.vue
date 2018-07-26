<style lang="scss" scoped>
@import "../../../assets/styles/colors";

.quiz-box {
  cursor: pointer;
  margin: 0.5rem 0;
  text-align: center;
  width: 100%;

  &.intelligence {
    background-color: $blue-quiz-color;

    &:hover {
      background-color: $blue-quiz-hover-color;
    }
  }

  &.verbal {
    background-color: $green-quiz-color;

    &:hover {
      background-color: $green-quiz-hover-color;
    }
  }

  &.numerical {
    background-color: $red-quiz-color;

    &:hover {
      background-color: $red-quiz-hover-color;
    }
  }

  &.perceptive {
    background-color: $pink-quiz-color;

    &:hover {
      background-color: $pink-quiz-hover-color;
    }
  }

  &.memory {
    background-color: $yellow-quiz-color;

    &:hover {
      background-color: $yellow-quiz-hover-color;
    }
  }
}
</style>

<template>
  <div v-if="quiz" :class="quiz.className" class="quiz-box">
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: "QuizBox",
  props: {
    quiz: {
      default: undefined,
      type: Object
    }
  },
  computed: {
    title() {
      const quiz = this.quiz.className;
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return quiz ? messages.home.quizes.titles[quiz] : "";
    }
  }
};
</script>
