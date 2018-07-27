<style lang="scss" scoped>
@import "../../../assets/styles/colors";
@import "../../../assets/styles/mixins";

.quiz-box {
  margin: 0.5rem 0;
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

  .tests-title {
    @include flex(row, center, center);

    cursor: pointer;
    height: 3rem;
    text-align: center;

    h3 {
      margin: 0;
    }
  }

  .tests-container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;

    &.active {
      max-height: 100vh;
      transition: max-height 0.7s ease-in;
    }

    .test {
      padding: 0 0.5rem;
      text-align: left;

      h4 {
        display: inline-block;
      }
    }
  }
}
</style>

<template>
  <div v-if="quiz" :class="quiz.className" class="quiz-box">
    <div class="tests-title" @click="toogleContainer">
      <h3>{{ title }}</h3>
    </div>
    <div :class="{active: isContainerShow}" class="tests-container">
      <div v-for="test in quiz.tests" :key="test.id" class="test" @click="openModal(test)">
        <h4>{{ test.title }}</h4>
      </div>
    </div>
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
  data() {
    return {
      isContainerShow: false
    };
  },
  computed: {
    title() {
      const quiz = this.quiz.className;
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return quiz ? messages.home.quizes.titles[quiz] : "";
    }
  },
  methods: {
    toogleContainer() {
      this.isContainerShow = !this.isContainerShow;
    },
    openModal(test) {
      const content = this.createModalContent(test);
      this.$store.dispatch("setModalContent", content);
      this.$store.dispatch("showModal");
    },
    createModalContent(test) {
      return {
        name: "ModalContent",
        template: `
          <div>
            <span>${test.id}</span>
          </div>
        `,
        data() {
          return {
            styles: {
              content: `
              background-color: white;
              height: 50px;
              width: 100px;
            `
            }
          };
        }
      };
    }
  }
};
</script>
