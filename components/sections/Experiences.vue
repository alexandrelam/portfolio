<script>
export default {
  data() {
    return {
      cardElements: [
        {
          title: "okarito",
          isNew: true
        },
        {
          title: "ratp",
          isNew: false
        }
      ]
    };
  }
};
</script>

<template lang="pug">
section.experiences
  CardList(title="experience" :cardElements="cardElements")
</template>

<style lang="scss" scoped>
.experiences {
  height: 100vh;
}
</style>
