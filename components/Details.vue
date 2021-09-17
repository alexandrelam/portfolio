<template lang="pug">
section.description
  NuxtLink(to="/")
    ICross.cross
  div.header
    div.wrapper
      h1
        span(v-if="isNew").new new
        span {{title}}
      span.date {{date}}
  img(:src="require(`~/static/${image}`)").image
  div.details
    div.infos
      div.wrapper
        div.child-wrapper
          h4 SITE
          a(:href="info.site" target="_blank") {{info.site}}
        div.child-wrapper
          h4 GIT
          a(:href="info.git" target="_blank") {{info.git}}
        div.child-wrapper
          h4 TIMELINE
          span {{info.timeline}}
      div.wrapper
        div.child-wrapper
          h4 FRONT 
          span {{info.front}}
        div.child-wrapper
          h4 BACK
          span {{info.back}}
        div.child-wrapper
          h4 OTHER 
          span {{info.other}}
    div.text
      h2 {{descriptionTitle}}
      p {{descriptionParagraph}}
  div(v-if="!displaySlotInfo && $slots.default").btn-wrapper
    button(type="button" @click="displaySlotInfo=true").more SEE MORE
  transition(name="fade")
    div(v-if="displaySlotInfo").slot-wrapper
      slot
  div(type="button").next-wrapper
    NuxtLink(:to="nextPage.url")
      button NEXT: {{nextPage.title.toUpperCase()}}
</template>

<script>
import ICross from "./icons/Cross.vue";
import { mapState, mapMutations } from "vuex";
import selectPage from "~/utils/selectPage";

export default {
  components: {
    ICross,
  },
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
    descriptionTitle: {
      type: String,
      required: true,
    },
    descriptionParagraph: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      displaySlotInfo: false,
      nextPage: { title: "", url: "/" },
    };
  },
  computed: {
    ...mapState(["visited"]),
  },
  async mounted() {
    this.addVisitedPage(this.getRouteName());
    this.nextPage = await selectPage(this.visited, this.resetVisitedPage);
  },
  methods: {
    ...mapMutations(["addVisitedPage", "resetVisitedPage"]),
    getRouteName() {
      return this.$route.name.split("-")[1];
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

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

.cross {
  position: absolute;
  top: 2rem;
  right: 2rem;
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
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
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
    max-width: 525px;

    h2 {
      margin: 0;
      max-width: 400px;
      font-size: 2rem;
    }

    p {
      line-height: 1.8rem;
    }
  }
}

.btn-wrapper {
  max-width: 900px;
  margin: auto;
  margin-top: 3rem;

  .more {
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    border: none;
    background: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
}

.slot-wrapper {
  max-width: 900px;
  margin: auto;
  margin-top: 3rem;
}

.next-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    outline: inherit;
    font-weight: bold;
    font-size: 3rem;
  }
}

.image {
  display: block;
  max-width: 900px;
  height: 845px;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
