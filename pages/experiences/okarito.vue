<template lang="pug">
  Details(
    title="Okarito"
    :isNew="true"
    :alwaysDisplaySlot="true"
    image="okarito_details.png"
    date="mai - août 2021"
    descriptionTitle="SHAPING THE FUTURE OF PROFESSIONAL TRANPORTATION"
    descriptionParagraph="Okarito is a Parisian start-up that aims to improve business travel. It offers an application that allows users to make reservations for flights, trains, hotels and rental cars. I worked at Okarito as a frontend developer and was brought to collaborate with the product manager and the different developers of the company. I participated in the development of more than 65 features and bug fixes and added more than 7350 lines of code to the code base. I followed good developer practices, wrote tests with Jest and Cypress. Thanks to this experience, I learned a lot about the software engineering world and improved my skills in Vuejs and Nuxtjs."
    :info={
      site:"https://www.okarito.io/",
      git:"https://github.com/okarito",
      timeline:"4 months",
      front:"NuxtJS, VueJS, Jest Cypress, GithubCI/CD, Storybook",
      back:"Ruby on Rails, Firebase, Heroku, PostgreSQL, Swagger",
      other:"Figma, Notion"
    }
  )
    img(src="~/static/okarito_design_1.png")
    DetailsTitle(
      title="Design"
      description="I ❤️ design. When working at Okarito, I often designed the features I had to develop using Figma. Here are some example of my work: "
    )
    div.image-wrapper
      img(src="~/static/weather.png").weather-image
      img(src="~/static/okarito_mobile.gif").gif
    DetailsTitle(
      title="Freelance"
      description="After working 4 months with Okarito, I decided to continue working with them as a freelancer"
    )
</template>

<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;

  .weather-image {
    height: 100%;
  }
}
</style>
