import Vue from "vue";
import gsap from "gsap";

Vue.use(gsap);

export default ({ app }, inject) => {
  inject("gsap", gsap);
};
