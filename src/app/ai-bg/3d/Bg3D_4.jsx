"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function ReactiveTorus() {
  const ref = useRef();
  const target = useRef([0, 0, 0]);
  const lightRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const onMove = (e) => {
      // convert screen coords to world at z=0 plane
      const xN = (e.clientX / window.innerWidth) * 2 - 1;
      const yN = -(e.clientY / window.innerHeight) * 2 + 1;
      const vec = new THREE.Vector3(xN, yN, 0.5).unproject(camera);
      target.current = [vec.x * 0.6, vec.y * 0.6, 0];
      if (lightRef.current) {
        lightRef.current.position.set(vec.x * 1.2, vec.y * 1.2, 2);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [camera]);
  useFrame(({ mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.002;
    ref.current.rotation.z += 0.0015;
    // slight pulsing
    ref.current.scale.x = 1 + Math.sin(performance.now() / 500) * 0.03;
    ref.current.scale.y = 1 + Math.cos(performance.now() / 450) * 0.03;
    // move slowly toward target
    const [tx, ty, tz] = target.current;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, tx, 0.08);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, ty, 0.08);
  });

  return (
    <>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.9, 0.28, 128, 32]} />
        <meshStandardMaterial color="#8429b0" roughness={0.05} metalness={0.5} envMapIntensity={0.5} />
      </mesh>
      <pointLight ref={lightRef} intensity={1.9} distance={3} />
    </>
  );
}

export default function Bg3D_4({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.7} />
          <ReactiveTorus />
        </Canvas>
      </div>
    </div>
  );
}
