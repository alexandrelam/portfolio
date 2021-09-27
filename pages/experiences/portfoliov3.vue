<template lang="pug">
  Details(
    title="Portfolio v3"
    :isNew="true"
    image="portfolio_cover.png"
    date="july - october 2021"
    descriptionTitle="MY NEW PORTFOLIO"
    descriptionParagraph="This portfolio is the result of my passion for design and frontend development. Inspired by Awwwards websites, I tried to combine the elegance of a pretty website while keeping the functional aspect of a portfolio. The landing page is simple and organized around white spaces. This helps guide the user's eye to the essential elements of the page. The most important elements of a portfolio are the experiences and projects. That's why they are accessible directly after the first scroll. Each experience and project has a description page like this one."
    :info={
      site:"https://alexandrelam.github.io/portfolio-v3/",
      git:"https://github.com/alexandrelam/portfolio-v3",
      timeline:"4 months",
      front:"NuxtJS, VueJS, GSAP",
      other:"Figma, Github Actions, Husky"
    }
  )
</template>

<script>
export default {};
</script>
