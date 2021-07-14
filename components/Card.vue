<template lang="pug">
.card
  div
    span(v-if="isNew").new new
    span {{ titleFormatted }}
  span.index 01
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    titleFormatted() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 96px;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  font-size: 1.5rem;

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
</style>
