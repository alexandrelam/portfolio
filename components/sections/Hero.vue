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

    // Hero viewport height for mobile
    // Let's init it
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // then on resize
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
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
      h2 {{ $t('title.hi') }}
      IHandWave.emoji
    h2.stagger {{ $t('title.line1') }}
    h2.stagger {{ $t('title.line2') }}
  .icons.stagger
    div(
      @mouseover="setMouseHover(true); setMouseSmall(true)"
      @mouseleave="setMouseHover(false); setMouseSmall(false)"
    )
      nuxt-link(
        :to="switchLocalePath(switchLang())"
      ) {{ switchLang().toUpperCase() }}
    a(href="https://github.com/alexandrelam"
          target="_blank"
          @mouseover="setMouseHover(true); setMouseSmall(true)"
          @mouseleave="setMouseHover(false); setMouseSmall(false)")
      IGithub.git
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100); /* Viewport height for mobile */

  position: relative;
  overflow: hidden;

  .hi-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .emoji {
      width: 3rem;

      @media (max-width: 640px) {
        width: 2.5rem;
      }
    }
  }

  .text-wrapper {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    font-size: 2rem;

    @media (max-width: 640px) {
      left: 1rem;
      right: 1.5rem;
      bottom: 1rem;
      font-size: 1.5rem;
    }
  }

  .icons {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (max-width: 640px) {
      top: 1.5rem;
      right: 1.5rem;
    }

    span {
      display: block;
    }
  }
}
</style>

<i18n>
{
  "fr": {
    "title":{
      "hi": "Salut",
      "line1": "Je suis Alexandre, un développeur",
      "line2": "créatif"
    }
  },
  "en": {
    "title":{
      "hi": "HI",
      "line1": "I'm Alexandre LAM, a developer",
      "line2": "based in Paris"
    }
  }
}
</i18n>
