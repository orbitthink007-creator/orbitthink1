"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function InstancedCubes() {
  const ref = useRef();
  const COUNT = 800;
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.002;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, COUNT]}>
      <boxGeometry args={[0.12, 0.12, 0.12]} />
      <meshStandardMaterial color="#82cfff" />
    </instancedMesh>
  );
}

export default function Bg3D_8({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <InstancedCubes />
        </Canvas>
      </div>
    </div>
  );
}
