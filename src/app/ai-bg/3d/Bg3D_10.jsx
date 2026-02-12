"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Fountain() {
  const pointsRef = useRef();
  const groupRef = useRef();
  const COUNT = 800;
  const { camera } = useThree();
  const positions = React.useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 1.2;
      arr[i * 3 + 1] = Math.random() * 2 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }
    return arr;
  }, []);

  const target = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const onMove = (e) => {
      const xN = (e.clientX / window.innerWidth) * 2 - 1;
      const yN = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(xN, yN, 0.5).unproject(camera);
      target.current.set(vec.x * 0.6, vec.y * 0.6 - 0.8, 0);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [camera]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < attr.count; i++) {
      attr.array[i * 3 + 1] += 0.01 + Math.random() * 0.02;
      if (attr.array[i * 3 + 1] > 2) attr.array[i * 3 + 1] = -1.5;
    }
    attr.needsUpdate = true;
    // move group toward target for interaction
    if (groupRef.current) {
      groupRef.current.position.lerp(target.current, 0.08);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes.position" array={positions} count={COUNT} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#ffd6a5" />
      </points>
    </group>
  );
}

export default function Bg3D_10({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <Fountain />
        </Canvas>
      </div>
    </div>
  );
}
