"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function SqueezableBlob() {
  const meshRef = useRef();
  const { camera, gl } = useThree();
  const temp = useRef({ mouse: new THREE.Vector2(-10, -10) });

  useEffect(() => {
    const onMove = (e) => {
      temp.current.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      temp.current.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    // prepare base geometry positions and a working copy
    const mesh = meshRef.current;
    if (!mesh) return;
    const geom = new THREE.SphereGeometry(1, 64, 64);
    geom.computeVertexNormals();
    mesh.geometry = geom;
    mesh.userData.basePositions = Float32Array.from(geom.attributes.position.array);
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    // ensure geometry and base positions exist
    if (!mesh.geometry || !mesh.geometry.attributes || !mesh.geometry.attributes.position) return;
    if (!mesh.userData.basePositions) {
      mesh.userData.basePositions = Float32Array.from(mesh.geometry.attributes.position.array);
    }
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(temp.current.mouse, camera);
    const intersects = raycaster.intersectObject(mesh, true);
    const base = mesh.userData.basePositions;
    const posAttr = mesh.geometry.attributes.position;
    const normalAttr = mesh.geometry.attributes.normal;

    let point = null;
    if (intersects.length > 0) point = intersects[0].point;

    for (let i = 0; i < posAttr.count; i++) {
      const bx = base ? base[i * 3] : posAttr.getX(i);
      const by = base[i * 3 + 1];
      const bz = base[i * 3 + 2];

      let nx = normalAttr && normalAttr.array ? normalAttr.array[i * 3] : 0;
      let ny = normalAttr && normalAttr.array ? normalAttr.array[i * 3 + 1] : 0;
      let nz = normalAttr && normalAttr.array ? normalAttr.array[i * 3 + 2] : 0;

      let targetX = bx;
      let targetY = by;
      let targetZ = bz;

      if (point) {
        const vx = bx - point.x;
        const vy = by - point.y;
        const vz = bz - point.z;
        const dist = Math.sqrt(vx * vx + vy * vy + vz * vz);
        const thresh = 0.8; // influence radius
        if (dist < thresh) {
          const squeeze = (1 - dist / thresh) * 0.35; // how much to move
          targetX = bx - nx * squeeze;
          targetY = by - ny * squeeze;
          targetZ = bz - nz * squeeze;
        }
      }

      // lerp towards target
      const curX = posAttr.getX(i);
      const curY = posAttr.getY(i);
      const curZ = posAttr.getZ(i);

      posAttr.setXYZ(i, THREE.MathUtils.lerp(curX, targetX, 0.12), THREE.MathUtils.lerp(curY, targetY, 0.12), THREE.MathUtils.lerp(curZ, targetZ, 0.12));
    }

    posAttr.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
    mesh.rotation.y += 0.002;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#8c60ff" roughness={0.4} metalness={0.2} />
    </mesh>
  );
}

export default function Bg3D_1({ width = '100%', height = '100%', className = '', style = {} }) {
  const w = typeof width === 'number' ? `${width}px` : width;
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: w, height: h, margin: 'auto', position: 'relative', ...style }} className={className}>
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 3.5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.8} />
          <SqueezableBlob />
        </Canvas>
      </div>
    </div>
  );
}
