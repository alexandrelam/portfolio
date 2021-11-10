<script>
export default {
  mounted() {
    console.log(this.$t("welcome"));
  },
};
</script>

<i18n>
{
"fr": {
  "welcome": "Bienvenue sur mon portfolio"
},
"en": {
  "welcome": "Welcome to my portfolio"
}
}
</i18n>
