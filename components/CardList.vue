<template lang="pug">
div
  h2 {{ titleFormatted }}
  Card(title="okarito" isNew)
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
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
h2 {
  font-family: "Merriweather", serif;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 8px;
}
</style>
