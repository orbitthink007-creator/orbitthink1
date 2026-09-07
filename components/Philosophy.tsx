'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function AnimatedStat({ value, label, isFirst }: { value: string; label: string; isFirst?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract numerical portions for rolling counters
  const match = value.match(/^([\d.]+)(.*)$/);
  const targetNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 45, damping: 18 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && match) {
      motionVal.set(targetNum);
    }
  }, [isInView, targetNum, motionVal, match]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (textRef.current && match) {
        textRef.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springVal, suffix, match]);

  return (
    <div
      ref={ref}
      className={`py-8 ${!isFirst ? 'border-t border-white/20 sm:border-l sm:border-t-0 sm:pl-8' : 'sm:pr-8'}`}
    >
      <div
        ref={textRef}
        className="text-4xl lg:text-5xl font-semibold tracking-[-.07em] text-[#9ee6dc]"
      >
        {value}
      </div>
      <div className="mt-3 max-w-[14rem] text-xs font-medium uppercase tracking-[.14em] text-white/60 leading-relaxed">
        {label}
      </div>
    </div>
  );
}

const proof = [
  { value: '100+', label: 'products, systems & experiments deployed' },
  { value: '99.9%', label: 'system precision across emerging technology' },
  { value: '4X', label: 'delivery velocity with senior execution' },
];

export default function Philosophy({ content }: { content?: any }) {
  return (
    <section id="philosophy" className="bg-[#171719] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-12 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#c9f44c]">
          <span className="h-2 w-2 rounded-full bg-[#ff8066] animate-pulse" />
          The OrbitThink difference
        </div>

        <div className="grid gap-12 lg:grid-cols-[.38fr_.62fr] lg:gap-20">
          <div>
            <p className="max-w-xs text-base leading-relaxed text-white/60">
              We are the practical partners for teams with an ambitious next move—not another slow agency layer.
            </p>
            <motion.div
              whileHover={{ rotate: 12, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mt-10 h-20 w-20 rounded-[1.6rem] bg-[#6d5dfc] shadow-[14px_14px_0_#ff8066] cursor-pointer"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-[clamp(2.8rem,5.7vw,6.2rem)] font-medium leading-[.93] tracking-[-.065em]"
          >
            We bring{' '}
            <span className="font-['Playfair_Display'] italic text-[#c9f44c]">
              intention
            </span>{' '}
            to every interaction—and the technical depth to make it hold up.
          </motion.h2>
        </div>

        {/* Rolling Counter Metrics Row */}
        <div className="mt-20 grid border-t border-white/20 sm:grid-cols-3">
          {proof.map((item, index) => (
            <AnimatedStat
              key={item.label}
              value={item.value}
              label={item.label}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
