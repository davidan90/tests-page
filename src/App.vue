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

<template>
  <div class="main-container">
    <div id="app">
      <Header />
      <main class="main-container">
        <router-view/>
      </main>
      <Footer />
    </div>
    <Modal v-if="isModalShow">
      <ModalContent v-if="hasModalContent"/>
    </Modal>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Footer, Modal } from "./components";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Modal
  },
  computed: {
    isModalShow() {
      return this.$store.getters.getModalShow;
    },
    hasModalContent() {
      const content = this.$store.getters.getModalContent;
      this.registryVueComponent(content);
      return content ? true : false;
    }
  },
  methods: {
    registryVueComponent(component) {
      Vue.component("ModalContent", Vue.extend(component));
    }
  }
};
</script>
