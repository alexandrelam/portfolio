<script>
import IArrowUp from "~/components/icons/ArrowUp";
import { mapMutations } from "vuex";

export default {
  components: {
    IArrowUp,
  },
  data() {
    return {
      displayCopied: false,
    };
  },
  methods: {
    ...mapMutations(["setMouseHover"]),
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    handleCopy() {
      let testingCodeToCopy = document.querySelector("#emailCopy");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        document.execCommand("copy");
        this.displayCopied = true;
        setTimeout(() => {
          this.displayCopied = false;
        }, 1000);
      } catch (err) {
        alert("Oops, unable to copy");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<template lang="pug">
  section.footer
    button(@click="scrollTop").align-right
      span(@mouseover="setMouseHover(true)" @mouseleave="setMouseHover(false)") {{ $t('top') }}
      IArrowUp.arrow
    div.text-wrapper
      h2 {{ $t('contact') }}
      div.email-wrapper
        transition(name="fade") 
          span(v-if="displayCopied").copied {{ $t('copy') }}
        button(@click="handleCopy" @mouseover="setMouseHover(true)" @mouseleave="setMouseHover(false)") alexandrelam@outlook.com
        input(type="hidden" id="emailCopy" value="alexandrelam@outlook.com")
    div.info
      span 2021
      span designed and developed by Alexandre LAM
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.footer {
  padding: 5px;
  background-color: var(--blackblack);
  height: 380px;
  display: flex;
  flex-direction: column;

  .align-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    margin-top: 28px;
    margin-right: 28px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    outline: inherit;

    .arrow {
      width: 10px;
      display: flex;
    }

    @media (max-width: 640px) {
      margin-top: 1rem;
      margin-right: 1rem;
    }

    span {
      font-family: "Merriweather", sans-serif;
      font-weight: 700;
      color: white;

      @media (max-width: 640px) {
        font-size: 0.8rem;
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;

    span {
      font-family: "Merriweather", sans-serif;
      font-size: 0.875rem;
      color: white;

      @media (max-width: 640px) {
        font-size: 0.7rem;
      }
    }
  }
  .text-wrapper {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 20px;
    }

    h2 {
      color: white;
      font-size: 2rem;
      font-family: "Merriweather", sans-serif;

      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
    }

    .email-wrapper {
      position: relative;

      .copied {
        padding: 6px 10px;
        border-radius: 4px;
        background-color: var(--background);
        position: absolute;
        font-weight: 700;
        top: -40px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    button {
      color: white;
      font-family: "Cabin", sans-serif;
      font-size: 1.65rem;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;

      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

<i18n>
{
  "fr": {
    "contact": "CONTACTE MOI",
    "top": "revenir en haut",
    "copy": "copié !"
  },
  "en": {
    "contact": "LET'S GET IN TOUCH",
    "top": "bring me to the top",
    "copy": "copied!"
  }
}
</i18n>
