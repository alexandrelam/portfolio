<script>
import IGreenBook from "~/components/icons/GreenBook";
import { mapMutations } from "vuex";
export default {
  components: {
    IGreenBook,
  },
  methods: {
    ...mapMutations(["setMouseHover"]),
  },
};
</script>

<template lang="pug">
section.resume
  a(href="alexandre_lam_resume.pdf" 
    download
    @mouseover="setMouseHover(true)"
    @mouseleave="setMouseHover(false)")
    h2 {{ $t('download').toUpperCase() }}
    IGreenBook.emoji
</template>

<style lang="scss" scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18rem 2rem;
  font-size: 2.5rem;

  @media (max-width: 640px) {
    font-size: 1.2rem;
    text-align: center;
    padding: 0rem 1rem;
    padding-bottom: 8rem;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    padding: 10rem 1rem;
    text-decoration: underline;
  }

  .emoji {
    @media (max-width: 768px) {
      display: none;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  h2 {
    font-family: "Merriweather", serif;
  }
}
</style>

<i18n>
{
  "fr": {
    "download": "Télécharge mon CV"
  },
  "en": {
    "download": "Download my resume"
  }
}
</i18n>
