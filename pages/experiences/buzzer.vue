<template lang="pug">
  Details(
    title="Buzzer!"
    :isNew="false"
    image="buzzer_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"alexandrelam.github.io/buzzer/",
      git:"https://github.com/alexandrelam/buzzer",
      month:1,
      front:"NuxtJS, VueJS",
      back:"Firebase",
      other:"Figma"
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "décembre - janvier 2021",
    "descriptionTitle": "UNE APPLICATION DE BUZZER POUR FAIRE DES QUIZZ ENTRE AMIS",
    "description": "Buzzer, comme son nom l’indique, est une application de buzzer. Elle permet à plusieurs personnes de se connecter sur une même plateforme en ligne afin de partager un buzzer commun. Très pratique pendant les soirées quizz entre amis, cette application est utile pour savoir qui a buzzé en premier et traquer les points des différents joueurs. Développé avec Nuxt, l’application utilise la base de données live de Firebase."
  },
  "en": {
    "date": "december - january 2021",
    "descriptionTitle": "A SIMPLE BUZZER APP FOR QUIZZES WITH FRIENDS",
    "description": "Buzzer, as its name suggests, is a buzzer application. It allows several people to connect on the same online platform to share a common buzzer. Very useful during quiz nights with friends, this application is useful to know who buzzed first and track the points of different players. Developed with Nuxt, the application uses the live database of Firebase."
  }
}
</i18n>
