<script>
import IGithub from "~/components/icons/Github";

export default {
  components: {
    IGithub,
  },
};
</script>

<template lang="pug">
section.hero
  .text-wrapper
    h2 HI
    h2 I'm Alexandre LAM, a developer
    h2 based in Paris
  .icons
    a(href="#")
      span EN
    a(href="https://github.com/alexandrelam" target="_blank")
      IGithub.git
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  position: relative;

  .text-wrapper {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    font-size: 2rem;
  }

  .icons {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    span {
      display: block;
    }
  }
}
</style>
