<template lang="pug">
  Details(
    title="Les Grains de Sel"
    :isNew="true"
    image="lesgrainsdesel_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
        site: "https://www.lesgrainsdesel.fr/",
        git: "https://github.com/alexandrelam/lesgrainsdesel",
        month: 5,
        front: "Django, VueJS",
        back: "Docker, Django, Odoo",
        other: "Figma",
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "octobre - février 2021",
    "descriptionTitle": "LA GESTION D'EVENEMENT POUR UN SUPERMARCHE COOPERATIF",
    "description": "Les Grains de Sel est un supermarché coopératif à Paris. Le bon fonctionnement du supermarché repose sur la participation de ses adhérents. Les Grains de Sel propose à ses membres des événements tout au long de la semaine. De cette problématique d’optimiser l'organisation de ces événements est née cette application. J’ai développé cette app avec un de mes amis. Il s’est chargé du système d’authentification et je me suis occupé du reste. J’ai réalisé l’ensemble du design sur Figma et l’ai intégré avec Django et PostgreSQL. Nous aussi mis en place Docker afin de faciliter le lancement de l’application en raison de son backend Odoo."
  },
  "en": {
    "date": "october - february 2021",
    "descriptionTitle": "EVENT MANAGEMENT FOR A COOPERATIVE SUPERMARKET",
    "description": "Les Grains de Sel is a cooperative supermarket in Paris. The operation of the supermarket is based on the participation of its members. Les Grains de Sel offers its members to participate in events throughout the week. From this problem of optimizing the organization of these events was born this application. I developed this app with a friend of mine. He took care of the authentication system and I took care of the rest. I made the whole design on Figma and integrated it with Django and PostgreSQL. We also set up Docker to facilitate the launch of the application because of its Odoo backend."
  }
}
</i18n>
