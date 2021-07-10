<template lang="pug">
Hero
</template>

<script>
import Hero from "~/components/sections/Hero";
export default {
  components: {
    Hero,
  },
};
</script>

<style lang="scss">
:root {
  --primary: #ffb600;
  --black: #0b0f25;
  --blackblack: #0f0f0f;
  --background: #fffcf5;
}

* {
  font-family: "Roboto", sans-serif;
  color: var(--black);
  background-color: var(--background);
}

a {
  text-decoration: none;
  color: inherit;
}

h2 {
  margin: 0;
}

body {
  margin: 0;
}
</style>
