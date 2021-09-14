<script>
import experiencesCards from "~/models/experiencesCards";
import projectsCards from "~/models/projectsCards";

export default {
  data() {
    return {
      experiencesCards: experiencesCards,
      projectsCards: projectsCards,
    };
  },
};
</script>

<template lang="pug">
section.experiences
  .image-wrapper
    transition(name="fade")
      img(
        v-if="$store.state.imageUrl.length"
        :src="$store.state.imageUrl"
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
      width: 100%;
      max-width: 60rem;
      max-height: 80vh;
      border-radius: 0.25rem;
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
