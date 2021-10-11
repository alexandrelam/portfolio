<script>
import IGithub from "~/components/icons/Github";
import IHandWave from "~/components/icons/HandWave";
import { mapMutations } from "vuex";

export default {
  components: {
    IGithub,
    IHandWave,
  },
  mounted() {
    this.$nextTick(function () {
      let tl = this.$gsap.timeline();
      tl.from(".stagger", 1.4, {
        opacity: 0,
        delay: 0.4,
        ease: "power4.out",
        skewY: 4,
        stagger: 0.3,
      });
    });
  },
  methods: {
    ...mapMutations(["setMouseHover", "setMouseSmall"]),
    switchLang() {
      return this.$i18n.locale === "en" ? "fr" : "en";
    },
  },
};
</script>

<template lang="pug">
section.hero
  .text-wrapper
    .hi-wrapper.stagger
      h2 HI {{ $t('title') }}
      IHandWave.emoji
    h2.stagger I'm Alexandre LAM, a developer
    h2.stagger based in Paris
  .icons.stagger
    div(
      @mouseover="setMouseHover(true); setMouseSmall(true)"
      @mouseleave="setMouseHover(false); setMouseSmall(false)"
    )
      nuxt-link(
        :to="switchLocalePath(switchLang())"
      ) EN
    a(href="https://github.com/alexandrelam"
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

<i18n>
{
  "fr": {
    "title": "test fr"
  },
  "en": {
    "title": "test en"
  }
}
</i18n>
