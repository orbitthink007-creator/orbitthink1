'use client';

import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero({ content }: { content?: any }) {
  const containerRef = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  // Parallax subtle scale and opacity as user scrolls away
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.94]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="sticky top-0 z-0 flex min-h-screen flex-col justify-center overflow-hidden bg-[#f8f7f3] px-5 pb-16 pt-24 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(23,23,25,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,25,.055) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Ambient background accent shapes */}
      <div className="absolute left-[4%] top-24 h-20 w-20 rounded-full bg-[#c9f44c] blur-[1px] md:h-28 md:w-28" />
      <div className="absolute right-[-10rem] top-[-11rem] h-[28rem] w-[28rem] rounded-full bg-[#dcd7ff] blur-3xl md:h-[38rem] md:w-[38rem]" />

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] will-change-transform"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#454545]"
          >
            <span className="h-2 w-2 rounded-full bg-[#6d5dfc] animate-pulse" />
            Independent product & engineering studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-[clamp(3.6rem,8.2vw,8.6rem)] font-semibold leading-[.85] tracking-[-.075em] text-[#171719]"
          >
            Digital products
            <br />
            <span className="font-['Playfair_Display'] font-medium italic tracking-[-.065em] text-[#6d5dfc]">
              made to move
            </span>{' '}
            people.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.7 }}
            className="mt-10 max-w-xl border-l border-[#171719]/20 pl-5"
          >
            <p className="text-base leading-relaxed text-[#555554] md:text-lg">
              {content?.description ||
                'We partner with ambitious teams to shape, build, and scale useful AI, web, mobile, and immersive products.'}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#171719] px-6 py-4 text-xs font-bold uppercase tracking-[.16em] text-white transition-transform hover:-translate-y-1 shadow-lg shadow-[#171719]/10"
            >
              Start a project{' '}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-3 rounded-full border border-[#171719]/25 bg-white/60 px-6 py-4 text-xs font-bold uppercase tracking-[.16em] text-[#171719] transition-colors hover:border-[#171719] hover:bg-white"
            >
              See our work <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          onPointerMove={(event) => {
            const box = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - box.left - box.width / 2) / 16);
            y.set((event.clientY - box.top - box.height / 2) / 16);
          }}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-[590px] items-center justify-center"
        >
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative h-[87%] w-[87%] rotate-[-12deg] rounded-[3rem] border border-[#171719]/10 bg-white/50 shadow-[30px_35px_0_rgba(23,23,25,.08)] backdrop-blur-sm"
          >
            <div className="hero-float-one absolute -left-[7%] top-[13%] h-[42%] w-[50%] rounded-[42%_58%_56%_44%] bg-[#6d5dfc] shadow-[20px_22px_0_#171719]" />
            <div className="hero-float-two absolute bottom-[9%] right-[7%] h-[41%] w-[41%] rounded-[45%_55%_36%_64%] bg-[#c9f44c] shadow-[-15px_18px_0_#ff8066]" />
            <div className="absolute left-[29%] top-[29%] grid h-[42%] w-[45%] place-items-center rounded-[1.5rem] border border-white/70 bg-[#171719] shadow-xl">
              <div className="grid h-[61%] w-[61%] grid-cols-3 gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <span
                    key={item}
                    className={`rounded-sm ${
                      item === 4
                        ? 'bg-[#ff8066]'
                        : item % 3 === 0
                        ? 'bg-[#9ee6dc]'
                        : 'bg-white/25'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute right-[-2%] top-[8%] rounded-full border border-[#171719]/15 bg-[#f8f7f3] px-4 py-2 font-mono text-[10px] text-[#171719] shadow-sm">
              IDEA → IMPACT
            </div>
            <div className="absolute bottom-[9%] left-[-10%] h-20 w-20 rounded-full border-[14px] border-[#1b79ff]" />
          </motion.div>
          <div className="absolute bottom-0 right-2 font-mono text-[10px] uppercase tracking-[.19em] text-[#696968]">
            Scroll to explore / 01
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
