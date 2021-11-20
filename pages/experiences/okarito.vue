<template lang="pug">
  Details(
    title="Okarito"
    :isNew="true"
    :alwaysDisplaySlot="true"
    image="okarito_details.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"https://www.okarito.io/",
      git:"https://github.com/okarito",
      month:4,
      front:"NuxtJS, VueJS, Jest Cypress, GithubCI/CD, Storybook",
      back:"Ruby on Rails, Firebase, Heroku, PostgreSQL, Swagger",
      other:"Figma, Notion"
    }
  )
    img(src="~/static/okarito_design_1.png")
    DetailsTitle(
      title="Design"
      :description="$t('design')"
    )
    div.image-wrapper
      div.vertical-images
        img(src="~/static/weather.png")
        img(src="~/static/okaritodropdown.png")
      img(src="~/static/okarito_mobile.gif")
    DetailsTitle(
      title="Freelance"
      :description="$t('freelance')"
    )
    img(src="~/static/okaritoredesign.png")
</template>

<style lang="scss" scoped>
img {
  max-width: 900px;
  @media (max-width: 900px) {
    margin: auto;
    width: 95%;
  }
}
.image-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;

  .vertical-images {
    display: flex;
    flex-direction: column;
  }
}
</style>

<i18n>
{
  "fr": {
    "date": "mai - août 2021",
    "descriptionTitle": "FAÇONNER L'AVENIR DU VOYAGE D'AFFAIRE",
    "description": "Okarito est une start-up parisienne qui facilite l'organisation des voyages d'affaires. Son application permet aux utilisateurs de réserver vols, trains, hôtels et voitures de location en quelques clics. En tant que développeur frontend chez Okarito, j’ai collaboré avec le product manager et les différents développeurs de l'entreprise. J'ai participé au développement de plus de 65 fonctionnalités et bug fix et j'ai ajouté plus de 7350 lignes de code dans la code base. J'ai suivi les bonnes pratiques de développeurs, écrit des tests avec Jest et Cypress. Grâce à cette expérience, j'ai beaucoup appris sur le monde de l'ingénierie logicielle et amélioré mes compétences en Vuejs et Nuxtjs.",
    "design": "J'adore le design. Voici quelques designs que j’ai créés pour les fonctionnalités que j'avais à implémenter avec Figma pour l’application Okarito :",
    "freelance": "Après 4 mois de stage chez Okarito, je continue actuellement de travailler avec eux en tant que freelance. Dernièrement, j’ai redesigné la présentation des hôtels et l’ensemble des filtres de l’application. Voici le résultat de mon travail après plusieurs échanges avec l’équipe produit."

  },
  "en": {
    "date": "may - august 2021",
    "descriptionTitle": "SHAPING THE FUTURE OF PROFESSIONAL TRANPORTATION",
    "description": "Okarito is a Parisian start-up that aims to improve business travel. It offers an application that allows users to make reservations for flights, trains, hotels and rental cars. I worked at Okarito as a frontend developer and was brought to collaborate with the product manager and the different developers of the company. I participated in the development of more than 65 features and bug fixes and added more than 7350 lines of code to the code base. I followed good developer practices, wrote tests with Jest and Cypress. Thanks to this experience, I learned a lot about the software engineering world and improved my skills in Vuejs and Nuxtjs.",
    "design": "I ❤️ design. When working at Okarito, I often designed the features I had to develop using Figma. Here are some example of my work: ",
    "freelance": "After working 4 months with Okarito, I am now working with them as a freelancer. Lately, I redesigned the hotel pages and all the filters of the application. Here is the result of my work after several back and forth with the product team."
  }
}
</i18n>
