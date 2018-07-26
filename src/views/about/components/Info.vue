<style lang="scss" scoped>
@import "../../../assets/styles/responsive";
@import "../../../assets/styles/colors";

#info-about {
  p {
    &.columns {
      column-count: 2;
      column-gap: 4rem;
      column-rule: 1px solid $black-color;
    }
  }
}
</style>

<template>
  <article id="info-about">
    <h2>{{ $t("about.info.title") }}</h2>
    <div>
      <h3>{{ $t("about.info.description.head1") }}</h3>
      <p>{{ $t("about.info.description.text1") }}</p>
    </div>
    <div>
      <h3>{{ $t("about.info.description.head2") }}</h3>
      <p class="columns">{{ $t("about.info.description.text2") }}</p>
    </div>
    <div>
      <h3>{{ $t("about.info.description.head3") }}</h3>
      <p class="columns">{{ $t("about.info.description.text3") }}</p>
    </div>
    <div>
      <h3>{{ $t("about.info.description.head4") }}</h3>
      <p class="columns">{{ $t("about.info.description.text4") }}</p>
    </div>
    <div>
      <h3>{{ $t("about.info.description.head5") }}</h3>
      <p class="columns">{{ $t("about.info.description.text5") }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "InfoAbout"
};
</script>
