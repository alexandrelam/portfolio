<template lang="pug">
section
  div.header
    div.wrapper
      h1
        span(v-if="isNew").new new
        span {{title}}
      span.date {{date}}
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  --primary: #ffb600;
  --black: #0b0f25;
  --blackblack: #0f0f0f;
  --background: #fffcf5;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  font-family: "Roboto", sans-serif;
  color: var(--black);

  a {
    text-decoration: none;
    color: inherit;
  }

  .wrapper {
    display: flex;
    gap: 1.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Roboto", sans-serif;
      color: var(--black);
      margin: 0;
      font-size: 4rem;

      .new {
        font-style: italic;
        font-family: "Merriweather", serif;
        color: var(--primary);
        font-size: 3.4rem;
      }
    }

    .date {
      font-family: "Merriweather", serif;
    }
  }
}
</style>
