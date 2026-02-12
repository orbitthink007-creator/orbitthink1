"use client";
import React, { useRef, useEffect } from 'react';

// BgWater: "finger-in-water" background
// Props:
// - `width`, `height` : CSS width/height for the container (defaults to fill)
// - `density` : relative density (particles per area). Lower -> fewer floats.
// - `maxParticles` : optional absolute cap for number of visible floats. If provided it overrides `density` calculation.
// - `pointerGlobal` : when true listens on `window` for pointer moves so the background can sit behind UI.
// - `colorTint` : optional hex color (e.g. '#aabbff') to use as the primary float color instead of CSS vars.
// - `glow` : multiplier controlling glow intensity (0..2)
// - `sizeMultiplier` : scales per-particle size (default 1)
// - `className`, `style` : container styling
// Notes/Tips:
// - Keep `maxParticles` modest on mobile to preserve battery/CPU. Use `density` for responsive scaling.
// - Colors default to CSS variables `--ztc-bg-main-bg-1..4` to match site theme.
// - `pointerGlobal=true` is recommended so the background reacts to the user's finger even when over content.
export default function BgWater({ width = '100%', height = '100%', density = 0.6, maxParticles = 300, pointerGlobal = true, colorTint = null, glow = 0.9, sizeMultiplier = 1, className = '', style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.style.background = 'transparent';
    container.style.background = 'transparent';
    container.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const css = window.getComputedStyle(document.documentElement);
    const CSS1 = (css.getPropertyValue('--ztc-bg-main-bg-1') || '#e8e6ff').trim();
    const CSS2 = (css.getPropertyValue('--ztc-bg-main-bg-2') || '#d9d7ff').trim();
    const CSS3 = (css.getPropertyValue('--ztc-bg-main-bg-3') || '#cfcfff').trim();
    const CSS4 = (css.getPropertyValue('--ztc-bg-main-bg-4') || '#f6f5ff').trim();
    // If `colorTint` prop is provided, use it as primary color (keeps rest of palette subtle)
    const PRIMARY = colorTint ? colorTint.trim() : CSS1;

    function hexToRgba(hex, a = 1) {
      if (!hex) return `rgba(255,255,255,${a})`;
      const h = hex.replace('#', '');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r},${g},${b},${a})`;
    }

    let w = 0, h = 0, raf = null;
    const DPR = Math.max(1, devicePixelRatio || 1);

    // Particles across depth layers for a 3D feel
    const layers = [ { z: 0.25, size: 1.2, countFactor: 0.45 }, { z: 0.6, size: 0.9, countFactor: 0.35 }, { z: 1.2, size: 0.6, countFactor: 0.2 } ];
    let particles = [];

    const pointer = { x: -9999, y: -9999, down: false, vx: 0, vy: 0 };

    function resize() {
      w = container.clientWidth || 600;
      h = container.clientHeight || 400;
      canvas.width = Math.max(1, Math.floor(w * DPR));
      canvas.height = Math.max(1, Math.floor(h * DPR));
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initParticles();
    }

    // Initialize particles. We compute a base count either from `maxParticles` (absolute) or
    // from `density` scaled by viewport area. Particles are distributed across `layers` to
    // create a 3D parallax/depth effect: nearer layers move more in response to the pointer.
    function initParticles() {
      particles = [];
      const areaBase = Math.floor((w * h) / 900 * density); // density-scaled
      const base = Number.isInteger(maxParticles) && maxParticles > 0 ? maxParticles : areaBase;
      // Distribute particles across layers proportionally to each layer's countFactor
      const totalFactor = layers.reduce((s, l) => s + l.countFactor, 0);
      layers.forEach(layer => {
        const count = Math.max(6, Math.floor(base * (layer.countFactor / totalFactor)));
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            ox: 0,
            oy: 0,
            vx: 0,
            vy: 0,
            z: layer.z,
            baseSize: (layer.size * (1 + Math.random() * 0.6)) * sizeMultiplier,
            hueShift: Math.random() * 0.08 - 0.04
          });
        }
      });
    }

    // soft radial brush for particles
    // Draw a single particle using a radial gradient. The color stops use the theme colors
    // but the primary inner stop respects the `colorTint` prop if provided. `glow` controls
    // the inner alpha and perceived brightness of the float.
    function drawParticle(p, t) {
      const size = p.baseSize * (1 + 0.25 * Math.sin(t * 0.8 + p.hueShift * 6));
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 6);
      grd.addColorStop(0, hexToRgba(PRIMARY, Math.min(1, glow * 0.9 * (0.6 + (1 - p.z) * 0.3))));
      grd.addColorStop(0.15, hexToRgba(CSS2, 0.55 * (0.6 + (1 - p.z) * 0.3)));
      grd.addColorStop(0.5, hexToRgba(CSS3, 0.12));
      grd.addColorStop(1, hexToRgba(CSS4, 0.02));
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    function step() {
      const t = performance.now() / 1000;
      ctx.clearRect(0, 0, w, h);

      // faint background wash for depth (very light)
      ctx.fillStyle = hexToRgba(CSS4, 0.02);
      ctx.fillRect(0, 0, w, h);

      // flow source from pointer: create local velocity field
      const px = pointer.x;
      const py = pointer.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // displacement from pointer (3D feel: nearer layers move more)
        const dx = px - p.x;
        const dy = py - p.y;
        const distSq = dx * dx + dy * dy + 1;
        const dist = Math.sqrt(distSq);

        // influence falls off with distance, scaled by depth
        const influence = Math.max(0, 1 - (dist / (160 * (1 + p.z)))) * (1 + (1 - p.z));

        // apply a swirling/flow effect: combine radial push and tangential drift
        if (dist < 420) {
          const push = (1.2 + Math.sin(t * 3 + i)) * 0.9 * influence * 0.9;
          const nx = -dy / dist; // normal/tangential
          const ny = dx / dist;
          p.vx += (dx / dist) * push * (0.6 + (1 - p.z) * 1.2);
          p.vy += (dy / dist) * push * (0.6 + (1 - p.z) * 1.2);
          // add tangential swirl
          p.vx += nx * 0.12 * influence;
          p.vy += ny * 0.12 * influence;
        }

        // subtle per-particle wandering for organic motion
        p.vx += (Math.sin(i * 12.7 + t * (0.3 + p.z)) * 0.02) * (1 - p.z);
        p.vy += (Math.cos(i * 7.3 + t * (0.35 + p.z)) * 0.02) * (1 - p.z);

        // damping and integrate
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges gently
        if (p.x < -50) p.x = w + 50; if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50; if (p.y > h + 50) p.y = -50;

        // draw with additive blending for glowing light feel
        ctx.globalCompositeOperation = 'lighter';
        drawParticle(p, t);
      }

      // subtle vignette using lighter composite to keep center bright
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(step);
    }

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      pointer.x = x; pointer.y = y;
    }

    function onLeave() {
      pointer.x = -9999; pointer.y = -9999;
    }

    resize();
    step();

    if (pointerGlobal) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onMove, { passive: true });
      window.addEventListener('mouseleave', onLeave);
      window.addEventListener('touchend', onLeave);
      window.addEventListener('resize', resize);
    } else {
      container.addEventListener('mousemove', onMove);
      container.addEventListener('touchmove', onMove, { passive: true });
      container.addEventListener('mouseleave', onLeave);
      window.addEventListener('resize', resize);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (pointerGlobal) {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('mouseleave', onLeave);
        window.removeEventListener('touchend', onLeave);
        window.removeEventListener('resize', resize);
      } else {
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('touchmove', onMove);
        container.removeEventListener('mouseleave', onLeave);
        window.removeEventListener('resize', resize);
      }
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [density, pointerGlobal]);

  return <div ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', width, height, ...style }} className={className} aria-hidden />;
}
