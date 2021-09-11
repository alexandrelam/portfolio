<template lang="pug">
  Details(
    title="Data handling for RATP"
    :isNew="false"
    date="mai - août 2021"
    descriptionTitle="SHAPING THE FUTURE OF PROFESSIONAL TRANPORTATION"
    descriptionParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, libero vitae sollicitudin vestibulum, lacus nibh lobortis magna, a pulvinar nunc magna at purus. Fusce dapibus finibus tellus in cursus. Praesent lacinia, est quis molestie porta, nunc nisi pretium massa, eu commodo nisl arcu sit amet leo. Phasellus et semper odio. Nullam lacinia nec ipsum ornare porttitor. Quisque vehicula orci eget bibendum euismod. Cras elementum sollicitudin mauris, et bibendum dolor euismod eu. Donec in gravida velit, id egestas massa. Phasellus ultricies elit arcu, sed venenatis massa consectetur a. Integer accumsan rutrum molestie."
    :info={
      site:"https://www.okarito.io/",
      git:"https://github.com/okarito",
      timeline:"4 months",
      front:"NuxtJS, VueJS, Jest Cypress, GithubCI/CD",
      back:"Ruby on Rails, Firebase, Heroku, PostgreSQL, Swagger",
      other:"Figma, Notion"
    }
  )
    span this is a slot
</template>

<script>
export default {};
</script>
