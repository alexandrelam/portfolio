<template lang="pug">
NuxtLink(:to="link")
  .card(
    :class="[(index === 0) && 'border-top', (shouldDisplayHoverMe) && 'hover-me']"
    @mouseover="addImageUrl(image); setMouseHover(true); setFirstHoverMouse(true)"
    @mouseleave="resetImageUrl(); setMouseHover(false)"
  )
    span(v-if="shouldDisplayHoverMe").hover-me-text Hover Me
    div(v-if="!shouldDisplayHoverMe")
      span(v-if="isNew").new new
      span {{ titleFormatted }}
    span(v-if="!shouldDisplayHoverMe").index {{ indexFormatted }}
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isHoverMe: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["firstHoverMouse"]),
    titleFormatted() {
      return this.title.toUpperCase();
    },
    indexFormatted() {
      if (this.index + 1 < 10) return `0${this.index + 1}`;
      return `${this.index + 1}`;
    },
    link() {
      if (this.$i18n.locale === "fr")
        return "/fr/experiences/" + this.title.replace(/\s/g, "");
      return "/experiences/" + this.title.replace(/\s/g, "");
    },
    shouldDisplayHoverMe() {
      return !this.firstHoverMouse && this.isHoverMe;
    },
  },
  methods: {
    ...mapMutations([
      "addImageUrl",
      "resetImageUrl",
      "setMouseHover",
      "setFirstHoverMouse",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 96px;
  border-bottom: solid #292524 1px;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 100%;
  }

  .new {
    color: var(--primary);
    font-family: "Merriweather", serif;
    font-style: italic;
  }

  .index {
    font-family: "Merriweather", serif;
    font-style: italic;
    font-weight: 300;
  }
}
.border-top {
  border-top: solid #292524 1px;
}

.hover-me {
  display: flex;
  justify-content: center;
  background-color: #292524;
}

.hover-me-text {
  color: white;
  font-family: "Merriweather", serif;
  font-style: italic;
  font-weight: 300;
}
</style>
