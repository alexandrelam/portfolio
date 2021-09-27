<template lang="pug">
  Details(
    title="Buzzer!"
    :isNew="false"
    image="buzzer_cover.png"
    date="december - january 2021"
    descriptionTitle="A SIMPLE BUZZER APP FOR QUIZZES WITH FRIENDS"
    descriptionParagraph="Buzzer, as its name suggests, is a buzzer application. It allows several people to connect on the same online platform to share a common buzzer. Very useful during quiz nights with friends, this application is useful to know who buzzed first and track the points of different players. Developed with Nuxt, the application uses the live database of Firebase."
    :info={
      site:"alexandrelam.github.io/buzzer/",
      git:"https://github.com/alexandrelam/buzzer",
      timeline:"1 month",
      front:"NuxtJS, VueJS",
      back:"Firebase",
      other:"Figma"
    }
  )
</template>

<script>
export default {};
</script>
