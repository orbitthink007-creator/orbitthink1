"use client";
import React, { useEffect, useRef } from 'react';

// Lightweight parallax viewport
// Wrap the page sections with <ParallaxViewport> and each direct child becomes a layer
export default function ParallaxViewport({ children, intensity = 0.06, speed = 0.1 }) {
  const rootRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = Array.from(root.children);

    let lastScrollY = window.scrollY;

    function update() {
      const vw = window.innerHeight;
      const sy = window.scrollY;
      const dy = sy - lastScrollY;
      lastScrollY = sy;

      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const progress = 1 - Math.min(1, Math.max(0, Math.abs(vw/2 - mid) / (vw)));

        // depth-based parallax offset
        const offset = (0.5 - progress) * (50 * (1 + i * 0.12)) * intensity;

        // scale slightly based on progress to give 3D pop
        const scale = 1 + (0.02 * progress);

        // opacity fade
        const opacity = 0.6 + 0.4 * progress;

        // smooth application
        el.style.willChange = 'transform,opacity';
        const current = el._pvCurrent || { tx: 0, s: 1, o: 1 };
        current.tx += (offset - current.tx) * speed;
        current.s += (scale - current.s) * speed;
        current.o += (opacity - current.o) * speed;
        el.style.transform = `translate3d(0, ${current.tx}px, 0) scale(${current.s})`;
        el.style.opacity = current.o;
        el._pvCurrent = current;
      });

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, speed]);

  // basic wrapper that leaves normal flow but applies transforms to children
  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      {children}
    </div>
  );
}
