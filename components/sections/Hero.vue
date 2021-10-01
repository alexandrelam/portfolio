<script>
import IGithub from "~/components/icons/Github";
import IHandWave from "~/components/icons/HandWave";
import { disableScrolling, enableScrolling } from "~/utils/stopScroll";
import { mapMutations } from "vuex";

export default {
  components: {
    IGithub,
    IHandWave,
  },
  mounted() {
    disableScrolling();
    this.$nextTick(function () {
      let tl = this.$gsap.timeline({
        onComplete: enableScrolling,
      });
      tl.from("#hi", { opacity: 0, y: 300, duration: 0.8 });
      tl.from(".emoji", { opacity: 0, duration: 1 }, "<0.8");
      tl.from("#header1", { opacity: 0, y: 300, duration: 1 }, "0.7");
      tl.from("#header2", { opacity: 0, y: 300, duration: 1 }, "<0.2");
      tl.from("#lang", { opacity: 0, x: 300, duration: 1 }, "<0.3");
      tl.from("#git", { opacity: 0, x: 300, duration: 1 }, "<0.2");
    });
  },
  methods: {
    ...mapMutations(["setMouseHover", "setMouseSmall"]),
  },
};
</script>

<template lang="pug">
section.hero
  .text-wrapper
    .hi-wrapper
      h2#hi HI
      IHandWave.emoji
    h2#header1 I'm Alexandre LAM, a developer
    h2#header2 based in Paris
  .icons
    a#lang(href="#" 
          @mouseover="setMouseHover(true); setMouseSmall(true)"
          @mouseleave="setMouseHover(false); setMouseSmall(false)"
          )
      span EN
    a#git(href="https://github.com/alexandrelam"
          target="_blank"
          @mouseover="setMouseHover(true); setMouseSmall(true)"
          @mouseleave="setMouseHover(false); setMouseSmall(false)")
      IGithub.git
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;

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
