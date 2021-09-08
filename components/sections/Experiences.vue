<script>
export default {
  data() {
    return {
      experiencesCards: [
        {
          title: "okarito",
          isNew: true,
          image: "okarito.png",
        },
        {
          title: "ratp",
          isNew: false,
          image: "ratp.png",
        },
      ],
      projectsCards: [
        {
          title: "portfoliov3",
          isNew: true,
          image: "okarito.png",
        },
        {
          title: "lesgrainsdesel",
          isNew: true,
          image: "okarito.png",
        },
        {
          title: "buzzer",
          isNew: false,
          image: "okarito.png",
        },
        {
          title: "data handling for ratp",
          isNew: false,
          image: "okarito.png",
        },
        {
          title: "machine learning labelling",
          isNew: false,
          image: "okarito.png",
        },
        {
          title: "grapher",
          isNew: false,
          image: "okarito.png",
        },
      ],
    };
  },
  computed: {
    imageUrl() {
      if (this.$store.state.imageUrl.length)
        return require(`~/assets/${this.$store.state.imageUrl}`);
      return "";
    },
  },
};
</script>

<template lang="pug">
section.experiences
  .image-wrapper
    transition(name="fade")
      div(
        v-if="this.$store.state.imageUrl" 
        :style="{backgroundImage: `url(${imageUrl})`}"
      ).image
  .zindex
    CardList(title="experience", :cardElements="experiencesCards")
    CardList.projects(title="projects", :cardElements="projectsCards")
</template>

<style lang="scss" scoped>
.experiences {
  display: flex;
  gap: 4rem;
  padding: 18rem 2rem;

  .zindex {
    z-index: 10;
  }

  .image-wrapper {
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      max-width: 60rem;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  .projects {
    margin-top: 140px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
