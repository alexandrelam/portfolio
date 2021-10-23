<template lang="pug">
div.wrapper
  h2 {{title}}
  p {{description}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
  margin-top: 6.25rem;
  margin-bottom: 6.25rem;
  margin-left: 1rem;
  margin-right: 1rem;

  h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    max-width: 34rem;
    line-height: 170%;
    margin: 0;
  }
}
</style>
