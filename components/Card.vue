<template lang="pug">
.card(:class="(index === 0) && 'border-top'")
  div
    span(v-if="isNew").new new
    span {{ titleFormatted }}
  span.index {{ indexFormatted }}
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
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
    },
    indexFormatted() {
      if (this.index + 1 < 10) return `0${this.index + 1}`;
      return `${this.index + 1}`;
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
  border-bottom: solid black 1px;
  font-size: 1.5rem;
  cursor: pointer;

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
  border-top: solid black 1px;
}
</style>
