<template lang="pug">
  Details(
    title="Machine learning labelling"
    :isNew="false"
    image="labelling_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      git:"https://github.com/alexandrelam/ml-labeling",
      month:3,
      front:"ReactJS, AntD, Konva",
      back: "Django-rest-framework",
      other: "Figma"
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "avril - juin 2020",
    "descriptionTitle": "APPLICATION FULLSTACK DE LABELLISATION D'IMAGES",
    "description": "Les algorithmes de machine learning de détection d’objets sont de plus en plus répandus aujourd'hui et requièrent une grande quantité de données pour être entraînés. Cette application permet de labelliser les objets d’une image en ajoutant des “boundary box” autour de ces images. Ces informations sur l’image sont ensuite envoyées au backend Django et stockées dans une base de données SQL. Par ailleurs, le backend Restful est doté d’un système d’authentification basé sur les tokens."
  },
  "en": {
    "date": "april - june 2020",
    "descriptionTitle": "A SIMPLE TOOL TO LABEL IMAGES",
    "description": "Machine learning algorithms for object detection are more and more widespread today and require a large amount of data to be trained. This application allows users to label objects in an image by adding boundary boxes around these images. This data is then sent to the Django backend and stored in a SQL database. Furthermore, the Restful backend is equipped with a token-based authentication system."
  }
}
</i18n>
