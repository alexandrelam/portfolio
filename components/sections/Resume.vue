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
  a(href="/static/resume.pdf" 
    download
    @mouseover="setMouseHover(true)"
    @mouseleave="setMouseHover(false)")
    h2 DOWNLOAD MY RESUME
    IGreenBook
</template>

<style lang="scss" scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18rem 2rem;
  font-size: 2.5rem;

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
