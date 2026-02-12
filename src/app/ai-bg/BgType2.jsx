"use client";
import React, { useRef, useEffect } from 'react';

export default function BgType2({ width = '100%', height = '100%', showWaves = true, showRipples = true, showLines = true, className = '', style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = ref.current;
    let width, height, raf;
    let ripples = [];

    /*
      Color configuration (reads from your globals.css variables):
      --ztc-bg-main-bg-1: primary light color (used for strong highlights / ripples)
      --ztc-bg-main-bg-2: secondary light color (used for gradients and waves)
      --ztc-bg-main-bg-3: tertiary color (optional, used for accents)
      --ztc-bg-main-bg-4: quaternary color (optional, used for accents)

      To change these colors globally edit `src/app/globals.css` and set the variables.

      Behavior tunables (edit here or expose as props if you want):
      - WAVE_SPEED: overall speed multiplier for wave animation
      - WAVE_BASE_PERIOD: base period used to compute wave frequency
      - WAVE_AMPLITUDE: base amplitude for the sine waves
      - RIPPLE_MAX: maximum number of active ripples
      - RIPPLE_DECAY: per-frame alpha decay multiplier for ripples (closer to 1.0 = slower fade)
      - RIPPLE_BASE_SPEED: how fast ripples expand

      Example: increase WAVE_SPEED to 1.5 to speed up waves, lower RIPPLE_DECAY to 0.96 to make ripples fade faster.
    */

    const css = window.getComputedStyle(document.documentElement);
    const CSS1 = (css.getPropertyValue('--ztc-bg-main-bg-1') || '#4311af').trim();
    const CSS2 = (css.getPropertyValue('--ztc-bg-main-bg-2') || '#932eb0').trim();
    const CSS3 = (css.getPropertyValue('--ztc-bg-main-bg-3') || '#1b03ae').trim();
    const CSS4 = (css.getPropertyValue('--ztc-bg-main-bg-4') || '#8429b0').trim();

    // Tunables
    const WAVE_SPEED = 0.05; // multiply time to speed up/down waves
    const WAVE_BASE_PERIOD = 150; // affects wave frequency
    const WAVE_AMPLITUDE = 30; // base amplitude (px)
    const RIPPLE_MAX = 5;
    const RIPPLE_DECAY = 0.99; // per-frame alpha multiplier (closer to 1 = slower fade)
    const RIPPLE_BASE_SPEED = 0.5;

    function hexToRgba(hex, a = 1) {
      if (!hex) return `rgba(255,255,255,${a})`;
      const h = hex.replace('#', '');
      const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r},${g},${b},${a})`;
    }

    function resize() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    // make the canvas and container transparent so underlying UI shows through
    canvas.style.background = 'transparent';
    container.style.background = 'transparent';
    container.style.pointerEvents = 'none';
    container.appendChild(canvas);
    resize();

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // transparent background by default so page content shows through
      // If you'd like a subtle gradient behind the waves, uncomment below
      // const g = ctx.createLinearGradient(0, 0, 0, height);
      // g.addColorStop(0, CSS3);
      // g.addColorStop(1, CSS2);
      // ctx.fillStyle = hexToRgba(CSS2, 0.04);
      // ctx.fillRect(0, 0, width, height);

      // moving waves
      const time = performance.now() / 1000;
      if (showWaves) {
        for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x <= width; x += 10) {
          const y = height / 2 + Math.sin((x / (WAVE_BASE_PERIOD - i * 20)) + time * (0.4 + i * 0.2) * WAVE_SPEED) * (WAVE_AMPLITUDE + i * 10);
          ctx.lineTo(x, y + i * 6);
        }
        // wave stroke uses the secondary color with low alpha
        ctx.strokeStyle = hexToRgba(CSS2, 0.08 + i * 0.04);
        ctx.lineWidth = 2 + i;
        ctx.stroke();
        }
      }

      // optional horizontal guide lines using CSS4 (subtle)
      if (showLines) {
        ctx.beginPath();
        ctx.strokeStyle = hexToRgba(CSS4, 0.04);
        ctx.lineWidth = 1;
        const lines = 6;
        for (let i = 0; i < lines; i++) {
          const y = (i / (lines - 1)) * height;
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
      }

      // ripples (use CSS1)
      if (showRipples) {
        ripples = ripples.filter(r => r.alpha > 0.01);
        ripples.forEach(r => {
          r.radius += r.speed * RIPPLE_BASE_SPEED;
          r.alpha *= RIPPLE_DECAY;
          ctx.beginPath();
          ctx.strokeStyle = hexToRgba(CSS1, r.alpha * 0.65);
          ctx.lineWidth = 2;
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.stroke();
        });
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e) {
      // Use global pointer coordinates so the background can sit behind content
      const rect = container.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      ripples.push({ x, y, radius: 2, speed: RIPPLE_BASE_SPEED * (1 + Math.random() * 1.5), alpha: 0.9 });
      if (ripples.length > RIPPLE_MAX) ripples.shift();
    }

    window.addEventListener('resize', resize);
    // listen on window so pointer events reach the top layer and still feed the background
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  // container is transparent and pointer-events none so it won't block UI interactions
  return <div ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', width, height, ...style }} className={className} aria-hidden />;
}
