"use client";
import React, { useRef, useEffect } from 'react';

export default function BgType1() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const container = ref.current;
    let width, height, raf;
    let mouse = { x: -9999, y: -9999 };

    function resize() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    container.appendChild(canvas);
    resize();

    const particles = Array.from({ length: Math.floor((window.innerWidth / 60)) }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 360,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // soft gradient background
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(147,46,176,0.9)');
      g.addColorStop(1, 'rgba(67,17,175,0.9)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // mouse attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 40000) {
          const f = 1 - Math.min(1, d2 / 40000);
          p.vx += (dx / (Math.sqrt(d2) + 1)) * 0.02 * f;
          p.vy += (dy / (Math.sqrt(d2) + 1)) * 0.02 * f;
        }

        p.vx *= 0.995;
        p.vy *= 0.995;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue},70%,60%,0.95)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // subtle connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 20000) {
            ctx.strokeStyle = `rgba(255,255,255,${0.02 * (1 - d2 / 20000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      mouse.x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      mouse.y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    }

    function onLeave() {
      mouse.x = -9999; mouse.y = -9999;
    }

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onMove);
    container.addEventListener('mouseleave', onLeave);

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden />
  );
}
