<template lang="pug">
</template>

<script>
import * as THREE from "three";
import glsl from "glslify";
import vertex from "../glsl/vertex-01.glsl";
import fragment from "../glsl/fragment-01.glsl";

export default {
  mounted() {
    const scene = new THREE.Scene();

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setPixelRatio(
      this.$gsap.utils.clamp(1.5, 1, window.devicePixelRatio)
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf2f2f2, 0);
    document.body.appendChild(renderer.domElement);

    const planeGeometry = new THREE.PlaneBufferGeometry(12, 18, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0, 0, 0) }
      },
      vertexShader: glsl(vertex),
      fragmentShader: glsl(fragment)
    });

    const mesh = new THREE.Mesh(planeGeometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);
  }
};
</script>
