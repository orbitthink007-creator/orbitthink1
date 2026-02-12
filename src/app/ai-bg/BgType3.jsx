"use client";
import React, { useRef, useEffect } from 'react';

export default function BgType3() {
  const ref = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = ref.current;
    const glow = glowRef.current;

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      glow.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
      glow.style.opacity = '1';
    }

    function onLeave() {
      glow.style.opacity = '0';
    }

    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }} aria-hidden>
      <div ref={glowRef} style={{
        position: 'absolute', width: 80, height: 80, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle at 30% 30%, rgba(140,96,255,0.9), rgba(67,17,175,0.1) 60%, transparent 70%)',
        mixBlendMode: 'screen', transform: 'translate(-9999px,-9999px)', transition: 'opacity 200ms ease, transform 80ms linear', opacity: 0
      }} />

      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ width: '120%', height: '120%', transform: 'translate(-10%,-10%)' }}>
        <defs>
          <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#932eb0"/><stop offset="1" stopColor="#4311af"/></linearGradient>
        </defs>
        <g fill="url(#g1)">
          <path id="blob" d="M437,347Q395,444,291,440Q187,436,150,341Q113,246,185,167Q257,88,353,92Q449,96,482,182Q515,268,437,347Z" opacity="0.95">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M437,347Q395,444,291,440Q187,436,150,341Q113,246,185,167Q257,88,353,92Q449,96,482,182Q515,268,437,347Z;
            M480,330Q430,410,330,420Q230,430,180,350Q130,270,200,170Q270,70,360,90Q450,110,480,200Q510,290,480,330Z;
            M440,360Q400,450,300,430Q200,410,160,340Q120,270,210,170Q300,70,380,110Q460,150,490,230Q520,310,440,360Z;
            M437,347Q395,444,291,440Q187,436,150,341Q113,246,185,167Q257,88,353,92Q449,96,482,182Q515,268,437,347Z" />
          </path>
        </g>
      </svg>
    </div>
  );
}
