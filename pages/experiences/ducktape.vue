<template lang="pug">
  Details(
    title="Ducktape"
    :isNew="true"
    image="ducktape.gif"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"https://alexandrelam.github.io/ducktape",
      git:"https://github.com/alexandrelam/portfolio",
      front:"NextJs, Material-UI",
      back:"Firebase",
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "novembre 2022",
    "descriptionTitle": "Partage des vidéos de 2s avec tes amis!",
    "description": "Tous les jours partage des vidéos de 2s avec tes amis. Ces vidéos sont lisibles dans une file d'actualité. Ducktape est une application qui permet de partager des vidéos de 2s avec tes amis. A la fin de chaque journée, les vidéos sont supprimées. L'application est développée avec NextJs et utilise la base de données de Firebase pour stocker les informations des utilisateurs et les vidéos."
  },
  "en": {
    "date": "november 2022",
    "descriptionTitle": "Share 2s videos with your friends!",
    "description": "Ducktape is an application that allows you to share 2s videos with your friends. These videos are readable in a feed. At the end of each day, the videos are deleted. The application is developed with NextJs and uses the Firebase database to store user information and videos."
  }
}
</i18n>
