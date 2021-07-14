<script>
export default {
  data() {
    return {
      experiencesCards: [
        {
          title: "okarito",
          isNew: true
        },
        {
          title: "ratp",
          isNew: false
        }
      ],
      projectsCards: [
        {
          title: "portfoliov3",
          isNew: true
        },
        {
          title: "lesgrainsdesel",
          isNew: true
        },
        {
          title: "buzzer",
          isNew: false
        },
        {
          title: "data handling for ratp",
          isNew: false
        },
        {
          title: "machine learning labelling",
          isNew: false
        },
        {
          title: "grapher",
          isNew: false
        }
      ]
    };
  }
};
</script>

<template lang="pug">
section.experiences
  div.images
  div
    CardList(title="experience" :cardElements="experiencesCards")
    CardList(title="projects" :cardElements="projectsCards").projects
</template>

<style lang="scss" scoped>
.experiences {
  display: flex;
  padding: 18rem 2rem;

  .images {
    flex-grow: 1;
  }

  .projects {
    margin-top: 140px;
  }
}
</style>
