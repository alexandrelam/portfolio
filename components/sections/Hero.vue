<script>
export default {};
</script>

<template lang="pug">
section.hero
  .text-wrapper
    h2 HI
    h2 I'm Alexandre LAM, a developer
    h2 based in Paris
  .icons
    span lang
    span github
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

    span {
      display: block;
    }
  }
}
</style>
