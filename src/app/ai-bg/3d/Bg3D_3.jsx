"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';

function RotatingGeom() {
  return (
    <mesh rotation={[0.6, 0.4, 0.2]}>
      <dodecahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial color="#7dd3fc" roughness={0.25} metalness={0.3} />
    </mesh>
  );
}

export default function Bg3D_3({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 55 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={0.8} />
          <RotatingGeom />
        </Canvas>
      </div>
    </div>
  );
}
