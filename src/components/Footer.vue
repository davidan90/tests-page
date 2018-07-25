<style lang="scss" scoped>
@import "../assets/styles/mixins";
@import "../assets/styles/responsive";
@import "../assets/styles/colors";

#main-footer {
  padding: 0.5rem 0;

  .section-inner {
    @include flex(column, center, space-between);
    padding: 0 1rem;

    .links {
      span {
        border-right: 1px solid;
        padding: 0 0.5rem;

        &:last-child {
          border-right: 0;
        }
      }
    }

    .legal {
      font-size: 0.7rem;
    }
  }
}
</style>

<template>
  <footer id="main-footer">
    <div class="section-inner">
      <div class="links">
        <span>Blog</span>
        <span>Tienda</span>
      </div>
      <p class="legal">
        {{ $t("app.info.legal") }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
