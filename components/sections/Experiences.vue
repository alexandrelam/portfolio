<script>
export default {
  data() {
    return {
      image: "",
      experiencesCards: [
        {
          title: "okarito",
          isNew: true,
          image: "okarito.png"
        },
        {
          title: "ratp",
          isNew: false,
          image: ""
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
  }
};
</script>

<template lang="pug">
section.experiences
  div.image-wrapper
    div(:style="{ backgroundImage: `url(/_nuxt/assets/${image})` }").image
  div
    CardList(
      title="experience"
      :cardElements="experiencesCards"
      @imageover="(newImage)=>image=newImage"
      @imageleave="image=''")
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
</style>
