"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function LightRing() {
  const meshRef = useRef();
  const target = useRef(new THREE.Vector3(0, 0, 0));
  const { camera } = useThree();

  useEffect(() => {
    const onMove = (e) => {
      const xN = (e.clientX / window.innerWidth) * 2 - 1;
      const yN = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(xN, yN, 0.5).unproject(camera);
      target.current.set(vec.x * 0.6, vec.y * 0.6, 0);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [camera]);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.position.lerp(target.current, 0.08);
    meshRef.current.rotation.z += 0.004;
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.2, 0.08, 32, 200]} />
      <meshStandardMaterial emissive="#7dd3fc" emissiveIntensity={1.2} color="#000" metalness={0.9} roughness={0.05} />
    </mesh>
  );
}

export default function Bg3D_9({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 6], fov: 55 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 3]} intensity={0.9} />
          <LightRing />
        </Canvas>
      </div>
    </div>
  );
}
