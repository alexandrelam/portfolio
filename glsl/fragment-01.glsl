precision mediump float;

uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
}