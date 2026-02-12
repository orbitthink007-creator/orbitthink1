"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function InteractiveShaderPlane() {
  const matRef = useRef();
  const { camera } = useThree();
  const mouse = useRef([0,0]);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = [e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    if (!matRef.current) return;
    matRef.current.uniforms.uMouse.value = new THREE.Vector2(mouse.current[0], mouse.current[1]);
    matRef.current.uniforms.uTime.value += 0.01;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main(){vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);}  
  `;

  const fragmentShader = `
    uniform vec2 uMouse; uniform float uTime; varying vec2 vUv;
    void main(){
      float d = distance(vUv, uMouse);
      vec3 c = mix(vec3(0.02,0.06,0.2), vec3(0.7,0.5,1.0), smoothstep(0.0,0.6,1.0 - d));
      c += 0.05 * sin(uTime + vUv.x * 10.0);
      gl_FragColor = vec4(c,1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[12, 8, 32, 32]} />
      <shaderMaterial ref={matRef} uniforms={{ uMouse: { value: new THREE.Vector2(0,0) }, uTime: { value: 0 } }} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

export default function Bg3D_15({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <InteractiveShaderPlane />
        </Canvas>
      </div>
    </div>
  );
}
