import Vue from "vue";
import gsap from "gsap";

Vue.use(gsap);

export default (_, inject) => {
  inject("gsap", gsap);
};
