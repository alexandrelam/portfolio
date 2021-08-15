<script>
export default {
  data() {
    return {
      experiencesCards: [
        {
          title: "okarito",
          isNew: true,
          image: "okarito.png"
        },
        {
          title: "ratp",
          isNew: false,
          image: "ratp.png"
        }
      ],
      projectsCards: [
        {
          title: "portfoliov3",
          isNew: true,
          image: ""
        },
        {
          title: "lesgrainsdesel",
          isNew: true,
          image: ""
        },
        {
          title: "buzzer",
          isNew: false,
          image: ""
        },
        {
          title: "data handling for ratp",
          isNew: false,
          image: ""
        },
        {
          title: "machine learning labelling",
          isNew: false,
          image: ""
        },
        {
          title: "grapher",
          isNew: false,
          image: ""
        }
      ]
    };
  },
  computed: {
    imageUrl() {
      if (this.$store.state.imageUrl) return require(`~/assets/ratp.png`);
      return "";
    }
  }
};
</script>

<template lang="pug">
section.experiences
  div.image-wrapper
    ThreeImage(v-if="imageUrl" :imageUrl="imageUrl")
  div
    CardList(
      title="experience"
      :cardElements="experiencesCards")
    CardList(title="projects" :cardElements="projectsCards").projects
</template>

<style lang="scss" scoped>
.experiences {
  display: flex;
  gap: 4rem;
  padding: 18rem 2rem;

  .image-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      max-width: 70rem;
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
