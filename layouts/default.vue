<template lang="pug">
div.background
  div.cursor-container
    CustomCursor
  canvas#noise.noise
  Nuxt.app
</template>

<style lang="scss" scoped>
.background {
  position: relative;
  background-color: var(--background);

  .cursor-container {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    pointer-events: none;
  }
}

.app {
  z-index: 50;
  margin-top: -100vh;
}

.noise {
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  opacity: 0.08;
}
</style>

<script>
export default {
  mounted() {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;

    // Create Noise
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xffffb710;
        }
      }

      noiseData.push(idata);
    };

    // Play Noise
    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    // Loop
    const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };

    // Setup
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    // Reset
    let resizeThrottle;
    const reset = () => {
      window.addEventListener(
        "resize",
        () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        false
      );
    };

    // Init
    const init = (() => {
      canvas = document.getElementById("noise");
      ctx = canvas.getContext("2d");

      setup();
    })();
  },
};
</script>
