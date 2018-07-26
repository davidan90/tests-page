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
      margin-bottom: 0.5rem;

      a {
        border-right: 1px solid;
        cursor: pointer;
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
        <a href="http://blog.bequiz.net/" target="_blank">{{ $t("app.blog") }}</a>
        <a href="https://society6.com/bequiz" target="_blank">{{ $t("app.shop") }}</a>
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
