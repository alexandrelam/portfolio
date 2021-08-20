<template lang="pug">
div
  CustomCursor
  Hero
  Experiences
  Resume
  Footer
</template>

<script>
import CustomCursor from "~/components/CustomCursor";
import Hero from "~/components/sections/Hero";
import Experiences from "~/components/sections/Experiences";
import Resume from "~/components/sections/Resume";
import Footer from "~/components/sections/Footer";

export default {
  components: {
    CustomCursor,
    Hero,
    Experiences,
    Resume,
    Footer,
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
