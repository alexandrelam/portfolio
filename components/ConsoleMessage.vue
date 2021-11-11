<template lang="pug">
</template>

<script>
export default {
  computed: {
    style() {
      if (this.$i18n.locale == "fr")
        return "padding: 0.75rem; color: #FFB600; background-color: black; font-size: 1.5rem; font-weight: bold; border-radius:2px;";
      return "padding: 0.75rem; color: black; background-color: #FFB600; font-size: 1.5rem; font-weight: bold; border-radius:2px;";
    },
  },
  mounted() {
    console.log(`%c${this.$t("welcome")}`, this.style);
  },
};
</script>

<i18n>
{
"fr": {
  "welcome": "Bienvenue sur mon portfolio 👋"
},
"en": {
  "welcome": "Welcome to my portfolio, I hope you have a great day ❤️"
}
}
</i18n>
