<template lang="pug">
  Details(
    title="Machine learning labelling"
    :isNew="false"
    image="labelling_cover.png"
    date="april - june 2020"
    descriptionTitle="A SIMPLE TOOL TO LABEL IMAGES"
    descriptionParagraph="Machine learning algorithms for object detection are more and more widespread today and require a large amount of data to be trained. This application allows users to label objects in an image by adding boundary boxes around these images. This data is then sent to the Django backend and stored in a SQL database. Furthermore, the Restful backend is equipped with a token-based authentication system."
    :info={
      git:"https://github.com/alexandrelam/ml-labeling",
      timeline:"3 months",
      front:"ReactJS, AntD, Konva",
      back: "Django-rest-framework",
      other: "Figma"
    }
  )
</template>

<script>
export default {};
</script>
