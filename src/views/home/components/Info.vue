<style lang="scss" scoped>
@import "../../../assets/styles/responsive";
@import "../../../assets/styles/mixins";

#info-home {
  @include flex(column, flex-start, inherit);

  @media #{$screen-s} {
    @include flex(column, center, inherit);
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
  name: "Info"
};
</script>
