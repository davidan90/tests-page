<style lang="scss" scoped>
@import "../../../assets/styles/responsive";
@import "../../../assets/styles/colors";

#info-contact {
  picture {
    display: block;
    text-align: center;
  }
}
</style>

<template>
  <article id="info-contact">
    <h2>{{ $t("contact.info.title") }}</h2>
    <p v-html="$t('contact.info.description')" />
    <picture>
      <img src="../../../assets/img/semantia_logo.png">
    </picture>
  </article>
</template>

<script>
export default {
  name: "InfoContact"
};
</script>
