<template lang="pug">
section.description
  NuxtLink(:to="link")
    ICross.cross.stagger
  div.header
    div.wrapper
      h1
        span(v-if="isNew").new.stagger new
        span.stagger {{title}}
      span.date.stagger {{date}}
  img(:src="require(`~/static/${image}`)").image.stagger
  div.details.stagger
    div.infos
      div.wrapper
        div(v-if="info.site").child-wrapper
          h4 SITE
          a(:href="info.site" target="_blank") {{info.site}}
        div(v-if="info.git").child-wrapper
          h4 GIT
          a(:href="info.git" target="_blank") {{info.git}}
        div(v-if="info.month").child-wrapper
          h4 TIMELINE
          span {{info.month}} {{$tc('month', info.month)}}
      div.wrapper
        div(v-if="info.front").child-wrapper
          h4 FRONT 
          span {{info.front}}
        div(v-if="info.back").child-wrapper
          h4 BACK
          span {{info.back}}
        div(v-if="info.other").child-wrapper
          h4 {{$t('other')}}
          span {{info.other}}
    div.text
      h2 {{descriptionTitle}}
      p {{descriptionParagraph}}
  div(v-if="!displaySlotInfo && $slots.default && !alwaysDisplaySlot").btn-wrapper
    button(type="button" @click="displaySlotInfo=true").more SEE MORE
  transition(name="fade")
    div(v-if="alwaysDisplaySlot || displaySlotInfo").slot-wrapper
      slot
  div(type="button").next-wrapper
    NuxtLink(:to="nextPage.url")
      button(@mouseover="setMouseHover(true)" @mouseleave="setMouseHover(false)")
        span {{$t('more-work')}}:
        span#work-title {{nextPage.title}}
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
    alwaysDisplaySlot: {
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
    link() {
      if (this.$i18n.locale === "fr") return "/fr/";
      return "/";
    },
  },
  async mounted() {
    this.addVisitedPage(this.getRouteName());
    this.nextPage = await selectPage(this.visited, this.resetVisitedPage);
    this.setMouseHover(false);

    this.$nextTick(function () {
      let tl = this.$gsap.timeline();
      tl.from(".stagger", 0.6, {
        opacity: 0,
        ease: "power4.out",
        skewY: 7,
        stagger: 0.3,
      });
    });
  },
  methods: {
    ...mapMutations(["addVisitedPage", "resetVisitedPage", "setMouseHover"]),
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

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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

      @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
      }

      .new {
        font-style: italic;
        font-family: "Merriweather", serif;
        color: var(--primary);
        font-size: 3.4rem;

        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }
    }

    .date {
      font-family: "Merriweather", serif;
    }
  }
}

.details {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin: 3rem 1rem;
    gap: 3rem;
  }

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
        a {
          width: 250px;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 900px;
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
    padding: 0.8rem;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    outline: inherit;
    font-size: 2.6rem;
    font-weight: 300;
    border-top: 1px solid;
    border-bottom: 1px solid;
    width: 900px;

    @media (max-width: 768px) {
      width: 100%;
    }

    #work-title {
      margin-left: 0.5rem;
      font-family: "Merriweather", serif;
      font-weight: 300;
      font-style: italic;
    }
  }
}

.image {
  display: block;
  max-width: 900px;
  height: 845px;
  margin: auto;

  @media (max-width: 900px) {
    width: 95%;
    height: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<i18n>
{
  "fr": {
    "other": "AUTRE",
    "month": "mois",
    "more-work": "Voir plus"
  },
  "en": {
    "other": "OTHER",
    "month": "month | months",
    "more-work": "See more work"
  }
}
</i18n>
