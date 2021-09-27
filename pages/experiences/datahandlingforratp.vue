<template lang="pug">
  Details(
    title="Data handling for RATP!"
    :isNew="false"
    image="ratpdata_cover.png"
    date="july 2020"
    descriptionTitle="A VIGICRUE WRAPPER TO EXTRACT DATA"
    descriptionParagraph="30joursvigicrues is an application built with React and Gatsby that collects data from Vigicrues. Every month, RATP collects and records the daily water level of the Seine and Marne rivers. This task is tedious because it consists in transferring the data from a graph into an Excel table. My application retrieves the data and displays it directly in a table, which saves time."
    :info={
      site:"https://alexandrelam.github.io/30joursvigicrues/",
      git:"https://github.com/alexandrelam/30joursvigicrues",
      timeline:"1 month",
      front:"Gatsby, ReactJS, AntD",
      back: "Graphql"
    }
  )
</template>

<script>
export default {};
</script>
