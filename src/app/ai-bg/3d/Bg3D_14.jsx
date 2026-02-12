"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';

function CylinderWaves() {
  const rings = [];
  for (let i = 0; i < 8; i++) {
    rings.push(<mesh key={i} rotation={[Math.PI/2,0,0]} position={[0,0,-i*0.6]}>
      <ringGeometry args={[1 + i*0.2, 1.2 + i*0.2, 64]} />
      <meshBasicMaterial color={i%2? '#60a5fa' : '#8b5cf6'} side={2} transparent opacity={0.25} />
    </mesh>);
  }
  return <group>{rings}</group>;
}

export default function Bg3D_14({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 1.2, 6], fov: 55 }}>
          <ambientLight intensity={0.6} />
          <CylinderWaves />
        </Canvas>
      </div>
    </div>
  );
}
