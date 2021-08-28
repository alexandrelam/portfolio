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
      material: new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: "" },
        },
        vertexShader: glsl(vertex),
        fragmentShader: glsl(fragment),
      }),
      mesh: "",
    };
  },
  watch: {
    imageUrl() {
      const imageTexture = new THREE.TextureLoader().load(
        this.imageUrl,
        (tex) => {
          const planeGeometry = new THREE.PlaneBufferGeometry(
            0.7,
            (0.7 * tex.image.height) / tex.image.width,
            16,
            16
          );
          this.mesh.geometry = planeGeometry;
        }
      );
      this.material.uniforms.uTexture.value = imageTexture;
    },
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
      alpha: true,
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

    const planeGeometry = new THREE.PlaneBufferGeometry(0.7, 0.7, 16, 16);

    this.mesh = new THREE.Mesh(planeGeometry, this.material);
    scene.add(this.mesh);

    let clock = new THREE.Clock();

    if (this.imageUrl)
      this.material.uniforms.uTexture.value = textureLoader.load(this.imageUrl);

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.setSize(
        container.getBoundingClientRect().width,
        container.getBoundingClientRect().height
      );

      this.material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();
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
  inset: 0;
}
</style>
