"use client";
import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Starfield() {
  const groupRef = useRef();
  const COUNT = 1000;
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 40;
      arr[i + 1] = (Math.random() - 0.5) * 40;
      arr[i + 2] = -Math.random() * 60;
    }
    return arr;
  }, []);

  const target = useRef(new THREE.Vector3(0, 0, 0));
  const { camera } = useThree();

  useEffect(() => {
    const onMove = (e) => {
      const xN = (e.clientX / window.innerWidth) * 2 - 1;
      const yN = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(xN, yN, 0.5).unproject(camera);
      target.current.set(vec.x * 0.2, vec.y * 0.2, 0);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [camera]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.lerp(target.current, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes.position" array={positions} count={COUNT} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.6} color="#fff" />
      </points>
    </group>
  );
}

export default function Bg3D_12({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <Starfield />
        </Canvas>
      </div>
    </div>
  );
}
