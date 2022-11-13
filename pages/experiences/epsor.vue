<template lang="pug">
Details(
    title="Epsor"
    :isNew="true"
    image="epsor.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="[$t('description.first'), $t('description.second'), $t('description.third')]"
    :info={
        site:"https://epsor.fr/",
        month: 5,
        front: "React, Redux, Redux-Sage, Apollo Graphql, Material-UI",
        back: "Microservices in NodeJS, Apollo GraphQL, MongoDB, Docker, K8, Cadence, AWS, Kafka",
        other: "Figma"
    }
)
</template>

<i18n>
{
  "fr": {
    "date": "avril - août 2022",
    "descriptionTitle": "L'épargne des salariés",
    "description": {
        "first": "Epsor, fondée en 2017, est une start-up digitale parisienne ayant pour mission la simplification de l’épargne salariale et retraite. L'entreprise propose une plateforme en ligne pour les salariés permettant de gérer plus facilement et intelligemment son épargne grâce à l’accompagnement que proposent les conseillers de l’entreprise.",
        "second": "J'ai intégré l'équipe Roscale d’Epsor le 4 avril 2022 en tant que développeur fullstack. Ma mission a été de développer de nouvelles fonctionnalités dans l'application. Pour ce faire, j'ai collaboré avec le Product Manager et les autres développeurs de l’équipe, fait des choix techniques et les ai implémentés dans la code base.",
        "third": "Grâce à cette expérience, j'ai amélioré mes compétences de développeur et découvert comment plusieurs équipes de développeurs collaborent. J’ai suivi des sprints hebdomadaires en mode agile. J'ai compris les enjeux de la dette technique, du clean code et appris à suivre les bonnes pratiques de développeur."
    }
  },
  "en": {
    "date": "april - august 2022",
    "descriptionTitle": "Open the way to simpler employee savings",
    "description": {
        "first": "Epsor, founded in 2017, is a Paris-based digital startup with a mission to simplify employee and retirement savings. The company offers an online platform for employees to manage their savings more easily and intelligently thanks to the support offered by the company's advisors.",
        "second": "I joined the Roscale team of Epsor on April 1st 2022 as a fullstack developer. My mission was to develop new features in the application. To do so, I collaborated with the Product Manager and the other developers of the team, made technical choices and implemented them in the code base.",
        "third": "Thanks to this experience, I improved my skills as a developer and discovered how several teams of developers collaborate. I followed weekly sprints in agile mode. I understood the stakes of technical debt, clean code and learned to follow good developer practices."
    }
  }
}
</i18n>
