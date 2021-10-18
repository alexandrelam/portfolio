<template lang="pug">
  Details(
    title="Portfolio v3"
    :isNew="true"
    image="portfolio_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"https://alexandrelam.github.io/portfolio-v3/",
      git:"https://github.com/alexandrelam/portfolio-v3",
      month:4,
      front:"NuxtJS, VueJS, GSAP",
      other:"Figma, Github Actions, Husky"
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "juillet - octobre 2021",
    "descriptionTitle": "MON NOUVEAU PORTFOLIO",
    "description": "Ce portfolio est le résultat de ma passion pour le design et le développement frontend. Inspiré par les sites de Awwwards, j’ai essayé de combiner l’élégance d’un joli site tout en gardant l’aspect fonctionnel d’un portfolio. La page de landing est simple et est agencée autour des espaces blancs. Cela permet de guider le regard de l’utilisateur vers les éléments essentiels de la page. Le plus important dans un portfolio sont les expériences et les projets. C’est pourquoi, ils sont accessibles directement après le premier scroll. Chaque expérience et projet possède une page de description."
  },
  "en": {
    "date": "july - october 2021",
    "descriptionTitle": "MY NEW PORTFOLIO",
    "description": "This portfolio is the result of my passion for design and frontend development. Inspired by Awwwards websites, I tried to combine the elegance of a pretty website while keeping the functional aspect of a portfolio. The landing page is simple and organized around white spaces. This helps guide the user's eye to the essential elements of the page. The most important elements of a portfolio are the experiences and projects. That's why they are accessible directly after the first scroll. Each experience and project has a description page like this one."
  }
}
</i18n>
