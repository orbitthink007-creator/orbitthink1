"use client";
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxPinned({ children, smooth = 1.2, pinSpacing = true }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // initialize Lenis for smooth scrolling
    const lenis = new Lenis({ duration: smooth, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    // scrollerProxy so ScrollTrigger works with Lenis
    ScrollTrigger.scrollerProxy(document.scrollingElement || document.documentElement, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.scrollingElement.style.transform ? 'transform' : 'fixed'
    });

    // gather sections: Home4 renders an inner wrapper div; target its children
    const inner = root.firstElementChild;
    const sections = inner ? Array.from(inner.children) : [];

    // create pin ScrollTriggers for each section
    const triggers = [];
    sections.forEach((sec, i) => {
      // ensure section has layout that can be pinned
      sec.style.minHeight = sec.style.minHeight || '60vh';
      const st = ScrollTrigger.create({
        trigger: sec,
        start: 'top top',
        end: () => `+=${Math.max(window.innerHeight, sec.offsetHeight)}`,
        pin: true,
        pinSpacing: pinSpacing,
        scrub: 0.8,
        invalidateOnRefresh: true
      });
      triggers.push(st);
    });

    ScrollTrigger.addEventListener('refreshInit', () => {
      // ensure lenis updates after layout changes
      lenis.raf(performance.now());
    });

    ScrollTrigger.refresh();

    return () => {
      // cleanup
      triggers.forEach(t => t.kill());
      ScrollTrigger.removeEventListener('refreshInit', () => {});
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [smooth, pinSpacing]);

  return <div ref={ref} style={{ position: 'relative' }}>{children}</div>;
}
