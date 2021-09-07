<template lang="pug">
section.description
  div.header
    div.wrapper
      h1
        span(v-if="isNew").new new
        span {{title}}
      span.date {{date}}
  div.image
  div.details
    div.infos
      div.wrapper
        div.child-wrapper
          h4 SITE
          span https://www.okarito.io/
        div.child-wrapper
          h4 GIT
          span https://github.com/okarito
        div.child-wrapper
          h4 TIMELINE
          span {{date}}
      div.wrapper
        div.child-wrapper
          h4 FRONT 
          span NuxtJS, VueJS, Jest Cypress, GithubCI/CD
        div.child-wrapper
          h4 BACK
          span Ruby on Rails, Firebase, Heroku, PostgreSQL, Swagger
        div.child-wrapper
          h4 OTHER 
          span Figma, Notion
    div.text
      h2 SHAPING THE FUTURE OF PROFESSIONAL TRANPORTATION
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, libero vitae sollicitudin vestibulum, lacus nibh lobortis magna, a pulvinar nunc magna at purus. Fusce dapibus finibus tellus in cursus. Praesent lacinia, est quis molestie porta, nunc nisi pretium massa, eu commodo nisl arcu sit amet leo. Phasellus et semper odio. Nullam lacinia nec ipsum ornare porttitor. Quisque vehicula orci eget bibendum euismod. Cras elementum sollicitudin mauris, et bibendum dolor euismod eu. Donec in gravida velit, id egestas massa. Phasellus ultricies elit arcu, sed venenatis massa consectetur a. Integer accumsan rutrum molestie.
  div.tmp
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  --primary: #ffb600;
  --black: #0b0f25;
  --blackblack: #0f0f0f;
  --background: #fffcf5;

  font-family: "Roboto", sans-serif;
  color: var(--black);

  a {
    text-decoration: none;
    color: inherit;
  }
}

.tmp {
  height: 1000px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;

  .wrapper {
    display: flex;
    gap: 1.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Roboto", sans-serif;
      color: var(--black);
      margin: 0;
      font-size: 4rem;

      .new {
        font-style: italic;
        font-family: "Merriweather", serif;
        color: var(--primary);
        font-size: 3.4rem;
      }
    }

    .date {
      font-family: "Merriweather", serif;
    }
  }
}

.details {
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 100px;

  .infos {
    width: 185px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .child-wrapper {
        h4 {
          margin: 0;
          color: var(--primary);
        }
        span {
          font-style: italic;
        }
      }
    }
  }
  .text {
    width: 525px;

    h2 {
      margin: 0;
      width: 400px;
      font-size: 2rem;
    }

    p {
      line-height: 1.8rem;
    }
  }
}

.image {
  width: 900px;
  height: 845px;
  background-color: red;
  margin: auto;
}
</style>
