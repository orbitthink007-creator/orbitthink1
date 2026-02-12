"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const ref = useRef();
  const temp = useRef({ mouse: new THREE.Vector2(-10, -10) });
  const COUNT = 5000;

  React.useEffect(() => {
    const onMove = (e) => {
      temp.current.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      temp.current.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // pre-create position buffer so geometry has attributes immediately
  const positions = React.useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) arr[i] = (Math.random() - 0.5) * 10;
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const geom = ref.current.geometry;
    if (!geom || !geom.attributes || !geom.attributes.position) return;
    const posAttr = geom.attributes.position;
    const arr = posAttr.array;
    const count = posAttr.count;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const x = arr[ix];
      const nx = x + Math.sin((i + performance.now() / 1000) * 0.3) * 0.002;
      arr[ix] = THREE.MathUtils.lerp(x, nx, 0.03);
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y += 0.001;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes.position" array={positions} count={COUNT} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#9bd1ff" sizeAttenuation={true} />
    </points>
  );
}

export default function Bg3D_2({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <Particles />
        </Canvas>
      </div>
    </div>
  );
}
