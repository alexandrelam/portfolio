<template lang="pug">
  Details(
    title="Math grapher"
    :isNew="false"
    image="grapher_cover.png"
    date="april - june 2020"
    descriptionTitle="A geogebra clone in C"
    descriptionParagraph="Like Geogebra, this application is a graphing tool. It allows us to visualize a mathematical function on a graph. This project allowed me to deepen my knowledge in algorithmic and to practice linkedlist, stacks and binary trees. In this group project, I developed the main part of the functionalities which are the following: the lexical analyser which decomposes the function that we enter as input, the evaluation engine which generates the points of the graph and the graphical display."
    :info={
      timeline:"3 months",
      front:"C programming, SDL2, OpenGL",
    }
  )
</template>

<script>
export default {};
</script>
