"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NoiseBlob() {
  const matRef = useRef();
  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    float snoise(vec3 v){return fract(sin(dot(v, vec3(12.9898,78.233,45.164))) * 43758.5453);}
    void main(){
      vUv = uv;
      vec3 p = position;
      float n = snoise(vec3(normalize(position) * 1.5 + uTime * 0.2));
      p += normal * n * 0.25;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    void main(){
      gl_FragColor = vec4(mix(vec3(0.3,0.1,0.7), vec3(0.8,0.6,1.0), vUv.y),1.0);
    }
  `;

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial ref={matRef} uniforms={{ uTime: { value: 0 } }} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

export default function Bg3D_7({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 3.2], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.7} />
          <NoiseBlob />
        </Canvas>
      </div>
    </div>
  );
}
