<template lang="pug">
.cursor
</template>

<script>
export default {
  mounted() {
    const cursor = document.querySelector(".cursor");
    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;
    let scrollY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener("scroll", (e) => {
      scrollY = window.scrollY;
    });

    setInterval(function () {
      xp += (mouseX - xp) / 6;
      yp += (mouseY + scrollY - yp) / 6;
      cursor.style.transform = `translate(${xp - 47}px, ${
        yp - 47
      }px)`;
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
  transition: height 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96),
    width 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  pointer-events: none;
}
</style>
