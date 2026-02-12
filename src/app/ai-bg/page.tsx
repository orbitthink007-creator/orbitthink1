"use client";
import React, { useState } from 'react';
import BgType1 from './BgType1';
import BgType2 from './BgType2';
import BgType3 from './BgType3';
import Bg3D_1 from './3d/Bg3D_1';
import Bg3D_2 from './3d/Bg3D_2';
import Bg3D_3 from './3d/Bg3D_3';
import Bg3D_4 from './3d/Bg3D_4';
import Bg3D_5 from './3d/Bg3D_5';
import Bg3D_6 from './3d/Bg3D_6';
import Bg3D_7 from './3d/Bg3D_7';
import Bg3D_8 from './3d/Bg3D_8';
import Bg3D_9 from './3d/Bg3D_9';
import Bg3D_10 from './3d/Bg3D_10';
import Bg3D_11 from './3d/Bg3D_11';
import Bg3D_12 from './3d/Bg3D_12';
import Bg3D_13 from './3d/Bg3D_13';
import Bg3D_14 from './3d/Bg3D_14';
import Bg3D_15 from './3d/Bg3D_15';

export default function AiBgPage() {
  const [type, setType] = useState(1);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#071133', color: 'white', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        {type === 1 && <BgType1 />}
        {type === 2 && <BgType2 />}
        {type === 3 && <BgType3 />}
        {type === 4 && <Bg3D_1 />}
        {type === 5 && <Bg3D_2 />}
        {type === 6 && <Bg3D_3 />}
        {type === 7 && <Bg3D_4 />}
        {type === 8 && <Bg3D_5 />}
        {type === 9 && <Bg3D_6 />}
        {type === 10 && <Bg3D_7 />}
        {type === 11 && <Bg3D_8 />}
        {type === 12 && <Bg3D_9 />}
        {type === 13 && <Bg3D_10 />}
        {type === 14 && <Bg3D_11 />}
        {type === 15 && <Bg3D_12 />}
        {type === 16 && <Bg3D_13 />}
        {type === 17 && <Bg3D_14 />}
        {type === 18 && <Bg3D_15 />}
      </div>

      <div style={{ position: 'relative', zIndex: 10, padding: 24 }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>AI Background Demo</h1>
        <p style={{ marginTop: 8, opacity: 0.9 }}>Three interactive background types — hover or move the cursor to see effects.</p>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button onClick={() => setType(1)} style={btnStyle(type === 1)}>Type 1 — Particles</button>
          <button onClick={() => setType(2)} style={btnStyle(type === 2)}>Type 2 — Waves</button>
          <button onClick={() => setType(3)} style={btnStyle(type === 3)}>Type 3 — Blob (SVG)</button>
          <button onClick={() => setType(4)} style={btnStyle(type === 4)}>Type 4 — 3D Squeezable Blob</button>
          <button onClick={() => setType(5)} style={btnStyle(type === 5)}>Type 5 — 3D Particles</button>
          <button onClick={() => setType(6)} style={btnStyle(type === 6)}>Type 6 — Rotating Geometry</button>
          <button onClick={() => setType(7)} style={btnStyle(type === 7)}>Type 7 — Reactive Torus</button>
          <button onClick={() => setType(8)} style={btnStyle(type === 8)}>Type 8 — Flow Plane</button>
          <button onClick={() => setType(9)} style={btnStyle(type === 9)}>Type 9 — Glass Sphere</button>
          <button onClick={() => setType(10)} style={btnStyle(type === 10)}>Type 10 — Noise Blob</button>
          <button onClick={() => setType(11)} style={btnStyle(type === 11)}>Type 11 — Instanced Cubes</button>
          <button onClick={() => setType(12)} style={btnStyle(type === 12)}>Type 12 — Light Ring</button>
          <button onClick={() => setType(13)} style={btnStyle(type === 13)}>Type 13 — Particle Fountain</button>
          <button onClick={() => setType(14)} style={btnStyle(type === 14)}>Type 14 — Neon Grid</button>
          <button onClick={() => setType(15)} style={btnStyle(type === 15)}>Type 15 — Starfield</button>
          <button onClick={() => setType(16)} style={btnStyle(type === 16)}>Type 16 — Metaballs (approx)</button>
          <button onClick={() => setType(17)} style={btnStyle(type === 17)}>Type 17 — Cylinder Waves</button>
          <button onClick={() => setType(18)} style={btnStyle(type === 18)}>Type 18 — Interactive Shader</button>
        </div>

        <div style={{ marginTop: 16, maxWidth: 720, opacity: 0.95 }}>
          <p>Usage: include the background component in your page or layout. These are client components and render full-bleed canvases/SVGs that respond to pointer movement.</p>
        </div>
      </div>
    </div>
  );
}

function btnStyle(active) {
  return {
    padding: '8px 12px',
    background: active ? 'linear-gradient(90deg,#932eb0,#4311af)' : 'rgba(255,255,255,0.06)',
    color: active ? 'white' : 'rgba(255,255,255,0.9)',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer'
  };
}
