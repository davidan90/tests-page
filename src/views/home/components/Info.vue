<style lang="scss" scoped>
@import "../../../assets/styles/responsive";
@import "../../../assets/styles/colors";
@import "../../../assets/styles/mixins";

#info-home {
  @include flex(column, flex-start, inherit);

  @media #{$screen-s} {
    @include flex(column, center, inherit);
  }

  @media #{$screen-m}, #{$screen-l} {
    p {
      column-count: 2;
      column-gap: 4rem;
      column-rule: 1px solid $black-color;
    }
  }
}
</style>

<template>
  <article id="info-home">
    <h2 class="section-title">
      {{ $t("home.info.title") }}
    </h2>
    <p>{{ $t("home.info.description") }}</p>
  </article>
</template>

<script>
export default {
  name: "InfoHome"
};
</script>
