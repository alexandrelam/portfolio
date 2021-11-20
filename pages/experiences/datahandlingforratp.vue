<template lang="pug">
  Details(
    title="Data handling for RATP!"
    :isNew="false"
    image="ratpdata_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"https://alexandrelam.github.io/30joursvigicrues/",
      git:"https://github.com/alexandrelam/30joursvigicrues",
      month:1,
      front:"Gatsby, ReactJS, AntD",
      back: "Graphql"
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "juillet 2020",
    "descriptionTitle": "UN WRAPPER POUR RECUPERER LES DONNEES DE VIGICRUE",
    "description": "30joursvigicrues est une application avec React et Gatsby de recueil des données de Vigicrues. Chaque mois, la RATP relève et enregistre la hauteur quotidienne de l’eau de la Seine et de la Marne. Cette tâche est fastidieuse car elle consiste à reporter des données d’un graphique dans un tableau Excel. Mon application récupère les données et les affiche directement dans un tableau, ce qui permet d'économiser du temps."
  },
  "en": {
    "date": "july 2020",
    "descriptionTitle": "A VIGICRUE WRAPPER TO EXTRACT DATA",
    "description": "30joursvigicrues is an application built with React and Gatsby that collects data from Vigicrues. Every month, RATP collects and records the daily water level of the Seine and Marne rivers. This task is tedious because it consists in transferring the data from a graph into an Excel table. My application retrieves the data and displays it directly in a table, which saves time."
  }
}
</i18n>
