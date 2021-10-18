<template lang="pug">
  Details(
    title="Ratp"
    :isNew="false"
    image="ratp_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      site:"https://www.ratp.fr/",
      month:4,
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "mai - août 2020",
    "descriptionTitle": "Logiciel de gestion de crise à la RATP",
    "description": "La cellule du Plan de Prévention contre le Risque Inondation (PPRI) de la RATP prévoit les actions à mener lors d’une crue. En effet, dans le cas le plus extrême (crue centennale), l’inondation du réseau de la RATP pourrait causer des pertes massives pour l’entreprise et impacter toute l’Ile-de-France qui serait alors privé d’une partie des transports en commun, d’où l’objectif de la cellule PPRI de développer un nouvel outil de gestion de crise performant. J’ai intégré la cellule PPRI du 11 mai 2020 au 31 juillet 2020 en tant que stagiaire chargé d’étude et travaux. Ma mission au sein de la cellule PPRI a été de recueillir les besoins des différents acteurs et d’élaborer le cahier des charges de ce logiciel de gestion."
  },
  "en": {
    "date": "may - august 2020",
    "descriptionTitle": "Flood crisis management software at RATP",
    "description": "The RATP Plan de Prévention contre le Risque Inondation (PPRI), as its name suggests, plans the actions to be taken during a flood. Indeed, in the most extreme case, the flooding of the RATP network could cause massive losses for the company and impact the entire Ile-de-France which would then be deprived of part of public transport, hence the objective of the PPRI unit to develop a new efficient crisis management tool. I joined the PPRI unit from May 11, 2020 to July 31, 2020 as an intern in charge of studies and works. My mission within the PPRI unit was to collect the needs of the various actors and to develop the specifications for this management software."
  }
}
</i18n>
