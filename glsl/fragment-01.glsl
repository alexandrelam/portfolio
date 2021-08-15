precision mediump float;

uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vWave;

void main() {
    float wave = vWave * 0.1;
    vec4 texture = texture2D(uTexture, vUv + wave).rgba;
    gl_FragColor = vec4(texture);
}