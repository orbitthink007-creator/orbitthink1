"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';

function MetaballsApprox() {
  const spheres = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    spheres.push(<mesh key={i} position={[Math.cos(a) * 1.8, Math.sin(a) * 1.2, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#c084fc" roughness={0.2} metalness={0.6} />
    </mesh>);
  }
  return <group>{spheres}</group>;
}

export default function Bg3D_13({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <MetaballsApprox />
        </Canvas>
      </div>
    </div>
  );
}
