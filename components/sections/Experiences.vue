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
    CardList.projects(:title="$t('projects')", :cardElements="projectsCards")
</template>

<style lang="scss" scoped>
.experiences {
  display: flex;
  gap: 4rem;
  padding: 18rem 2rem;
  padding-bottom: 0;

  @media (max-width: 640px) {
    padding: 8rem 1rem;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
  }

  @media (max-width: 640px) {
    padding: 8rem 1rem;
  }

  .zindex {
    z-index: 10;
  }

  .image-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }

    .image {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 50vw;
      max-width: 50rem;
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

<i18n>
{
  "fr": {
    "projects": "projets"
  },
  "en": {
    "projects": "projects"
  }
}
</i18n>
