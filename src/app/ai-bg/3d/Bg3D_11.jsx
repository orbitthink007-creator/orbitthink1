"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';

function NeonGrid() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 8, 12, 8]} />
      <meshBasicMaterial color="#0ea5e9" wireframe={true} opacity={0.6} transparent={true} />
    </mesh>
  );
}

export default function Bg3D_11({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 6, 6], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <NeonGrid />
        </Canvas>
      </div>
    </div>
  );
}
