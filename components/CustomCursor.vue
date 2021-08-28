<template lang="pug">
.cursor
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["hoverMouseStatus", "hoverMouseSmall"]),
  },
  watch: {
    hoverMouseStatus(newStatus) {
      this.isHover = newStatus;
    },
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;
    let scrollY = 0;
    let cursorScale = 1;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener("scroll", (e) => {
      scrollY = window.scrollY;
    });

    setInterval(() => {
      if (this.hoverMouseStatus && cursorScale >= 0.45 && this.hoverMouseSmall)
        cursorScale -= 0.02;
      else if (this.hoverMouseStatus && cursorScale >= 0.8) cursorScale -= 0.01;
      else if (cursorScale <= 1) cursorScale += 0.01;
      xp += (mouseX - xp) / 6;
      yp += (mouseY + scrollY - yp) / 6;
      cursor.style.transform = `translate(${xp - 47}px, ${
        yp - 47
      }px) scale(${cursorScale})`;
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  width: 95px;
  height: 95px;
  border: 1px solid;
  border-radius: 100%;
  color: rgb(107, 114, 128);
  z-index: 100;
  transition: scale 5s;
  pointer-events: none;
}
</style>
