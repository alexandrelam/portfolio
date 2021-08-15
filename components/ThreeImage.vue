<template lang="pug">
div#three-image
</template>

<script>
import * as THREE from "three";
import glsl from "glslify";
import vertex from "../glsl/vertex-01.glsl";
import fragment from "../glsl/fragment-01.glsl";

export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    const scene = new THREE.Scene();

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    let camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const container = document.getElementById("three-image");
    const renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setPixelRatio(
      this.$gsap.utils.clamp(1.5, 1, window.devicePixelRatio)
    );
    renderer.setSize(
      container.getBoundingClientRect().width,
      container.getBoundingClientRect().height
    );
    renderer.setClearColor(0xf2f2f2, 0);
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    const planeGeometry = new THREE.PlaneBufferGeometry(0.4, 0.6, 16, 16);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: "" }
      },
      vertexShader: glsl(vertex),
      fragmentShader: glsl(fragment)
    });

    const mesh = new THREE.Mesh(planeGeometry, material);
    scene.add(mesh);

    let clock = new THREE.Clock();

    function resizeCanvasToDisplaySize() {
      const canvas = renderer.domElement;
      // look up the size the canvas is being displayed
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // adjust displayBuffer size to match
      if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // update any render target sizes here
      }
    }

    if (this.imageUrl)
      material.uniforms.uTexture.value = textureLoader.load(this.imageUrl);

    const animate = function() {
      requestAnimationFrame(animate);

      renderer.setSize(
        container.getBoundingClientRect().width,
        container.getBoundingClientRect().height
      );

      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();
  }
};
</script>

<style lang="scss" scoped>
#three-image {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
