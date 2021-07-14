<script>
import IGithub from "~/components/icons/Github";
import IHandWave from "~/components/icons/HandWave";

export default {
  components: {
    IGithub,
    IHandWave
  }
};
</script>

<template lang="pug">
section.hero
  .text-wrapper
    .hi-wrapper
      h2 HI
      IHandWave.emoji
    h2 I'm Alexandre LAM, a developer
    h2 based in Paris
  .icons
    a(href="#")
      span EN
    a(href="https://github.com/alexandrelam", target="_blank")
      IGithub.git
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  position: relative;

  .hi-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .emoji {
      width: 3rem;
    }
  }

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
