<style lang="scss" scoped>
@import "../assets/styles/colors";
@import "../assets/styles/responsive";
@import "../assets/styles/mixins";

.modal {
  @include flex(column, center, center);

  background-color: rgba(50, 50, 50, 0.7);
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;

  .modal-box {
    background-color: $white-color;
    height: 60%;
    width: 60%;

    @media #{$screen-m}, #{$screen-s} {
      height: 90%;
      width: 90%;
    }
  }
}
</style>

<template>
  <div ref="modal" :class="{ active: isActive }" class="modal" @click="closeModal($event)">
    <div class="modal-box">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    isActive() {
      return this.$store.getters.getModalShow;
    }
  },
  created() {
    this.defaultScroll("hidden");
  },
  destroyed() {
    this.defaultScroll("inherit");
  },
  methods: {
    defaultScroll(status) {
      const html = document.getElementsByTagName("html")[0];
      const body = document.getElementsByTagName("body")[0];
      html.style.overflow = status;
      body.style.overflow = status;
    },
    closeModal(e) {
      const target = e.target;
      const modal = this.$refs.modal;
      if (target !== modal) {
        return;
      }
      this.$store.dispatch("hideModal");
    }
  }
};
</script>
