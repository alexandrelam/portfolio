<template lang="pug">
#three-image
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
      required: true,
    },
  },
  data() {
    return {
      imageWidth: 0,
      imageHeight: 0,
      material: new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: "" },
        },
        vertexShader: glsl(vertex),
        fragmentShader: glsl(fragment),
      }),
    };
  },
  methods: {
    loadImageSize(url) {
      console.log(url);
      var img = new Image();
      img.src = url;
      img.addEventListener("load", (e) => {
        this.imageWidth = e.path[0].width;
        this.imageHeight = e.path[0].height;
      });
    },
  },
  mounted() {
    this.loadImageSize(this.imageUrl);
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
      alpha: true,
    });
    renderer.setPixelRatio(
      this.$gsap.utils.clamp(1.5, 1, window.devicePixelRatio)
    );
    renderer.setSize(
      container.getBoundingClientRect().width * 1.2,
      (container.getBoundingClientRect().width * this.imageHeight * 0.7) /
        this.imageWidth
    );
    renderer.setClearColor(0xf2f2f2, 0);
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    const planeGeometry = new THREE.PlaneBufferGeometry(0.4, 0.6, 16, 16);

    const mesh = new THREE.Mesh(planeGeometry, this.material);
    scene.add(mesh);

    let clock = new THREE.Clock();

    if (this.imageUrl)
      this.material.uniforms.uTexture.value = textureLoader.load(this.imageUrl);

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.setSize(
        container.getBoundingClientRect().width * 1.2,
        (container.getBoundingClientRect().width * this.imageHeight * 0.7) /
          this.imageWidth
      );

      this.material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();
  },
  watch: {
    imageUrl() {
      if (this.imageUrl) {
        this.loadImageSize(this.imageUrl);
        this.material.uniforms.uTexture.value = new THREE.TextureLoader().load(
          this.imageUrl
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#three-image {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
