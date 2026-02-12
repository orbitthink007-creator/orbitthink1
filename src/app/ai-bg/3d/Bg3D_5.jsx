"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FlowPlane() {
  const materialRef = useRef();
  const offset = useRef(0);
  useFrame(() => {
    offset.current += 0.003;
    if (!materialRef.current) return;
    // materialRef.current is the ShaderMaterial
    if (materialRef.current.uniforms && materialRef.current.uniforms.uTime) {
      materialRef.current.uniforms.uTime.value = offset.current;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[12, 8, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += sin((uv.x + uTime) * 6.0) * 0.25 * (1.0 - abs(uv.y - 0.5));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    vec3 c = mix(vec3(0.05,0.09,0.2), vec3(0.6,0.4,1.0), vUv.x);
    gl_FragColor = vec4(c, 1.0);
  }
`;

export default function Bg3D_5({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <FlowPlane />
        </Canvas>
      </div>
    </div>
  );
}
