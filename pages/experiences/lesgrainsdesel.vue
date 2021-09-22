<template lang="pug">
  Details(
    title="Les Grains de Sel"
    :isNew="true"
    image="lesgrainsdesel_cover.png"
    date="october - february 2021"
    descriptionTitle="EVENT MANAGEMENT FOR A COOPERATIVE SUPERMARKET"
    descriptionParagraph="Les Grains de Sel is a cooperative supermarket in Paris. The operation of the supermarket is based on the participation of its members. Les Grains de Sel offers its members to participate in events throughout the week. From this problem of optimizing the organization of these events was born this application. I developed this app with a friend of mine. He took care of the authentication system and I took care of the rest. I made the whole design on Figma and integrated it with Django and PostgreSQL. We also set up Docker to facilitate the launch of the application because of its Odoo backend."
    :info={
      site:"https://www.lesgrainsdesel.fr/",
      git:"https://github.com/alexandrelam/lesgrainsdesel",
      timeline:"5 months",
      front:"Django, VueJS",
      back:"Docker, Django, Odoo",
      other:"Figma"
    }
  )
</template>

<script>
export default {};
</script>
