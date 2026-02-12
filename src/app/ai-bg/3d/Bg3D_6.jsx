"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function Bg3D_6({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.9} />
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.1, 48, 48]} />
            <meshStandardMaterial color="#c9f" roughness={0.05} metalness={0.9} envMapIntensity={0.8} />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
