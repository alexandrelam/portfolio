<template lang="pug">
  Details(
    title="Portfolio v3"
    :isNew="true"
    image="portfolio_cover.png"
    date="july - october 2021"
    descriptionTitle="MY NEW PORTFOLIO"
    descriptionParagraph="The RATP Plan de Prévention contre le Risque Inondation (PPRI), as its name suggests, plans the actions to be taken during a flood. Indeed, in the most extreme case, the flooding of the RATP network could cause massive losses for the company and impact the entire Ile-de-France which would then be deprived of part of public transport, hence the objective of the PPRI unit to develop a new efficient crisis management tool. I joined the PPRI unit from May 11, 2020 to July 31, 2020 as an intern in charge of studies and works. My mission within the PPRI unit was to collect the needs of the various actors and to develop the specifications for this management software."
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
