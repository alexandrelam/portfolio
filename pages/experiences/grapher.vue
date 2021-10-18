<template lang="pug">
  Details(
    title="Math grapher"
    :isNew="false"
    image="grapher_cover.png"
    :date="$t('date')"
    :descriptionTitle="$t('descriptionTitle')"
    :descriptionParagraph="$t('description')"
    :info={
      month:3,
      front:"C programming, SDL2, OpenGL",
    }
  )
</template>

<i18n>
{
  "fr": {
    "date": "avril - juillet 2020",
    "descriptionTitle": "UN CLONE DE GEOGEBRA EN C",
    "description": "Comme Geogebra, cette application est un grapheur. Elle permet de visualiser une fonction mathématique sur un graphique. Ce projet m’a permis d’approfondir mes connaissances en algorithmique et de mettre en pratique les linkedlist, les stacks et les arbres binaires. Dans ce projet de groupe, j’ai développé la majeure partie des fonctionnalités qui sont les suivantes : le moteur d'analyse lexical qui décompose la fonction que l’on rentre en entrée, le moteur d’évaluation qui se charge de générer les points du graphique et l’affichage graphique."
  },
  "en": {
    "date": "april - june 2020",
    "descriptionTitle": "A geogebra clone in C",
    "description": "Like Geogebra, this application is a graphing tool. It allows us to visualize a mathematical function on a graph. This project allowed me to deepen my knowledge in algorithmic and to practice linkedlist, stacks and binary trees. In this group project, I developed the main part of the functionalities which are the following: the lexical analyser which decomposes the function that we enter as input, the evaluation engine which generates the points of the graph and the graphical display."
  }
}
</i18n>
