'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Bot, Boxes, MonitorSmartphone, Sparkles } from 'lucide-react';

const defaults = [
  {
    number: '01',
    eyebrow: 'Intelligence',
    title: 'AI systems with a job to do.',
    description:
      'Useful LLM workflows, autonomous agents, computer vision, and the infrastructure to make them reliable.',
    tags: ['LLMs', 'RAG', 'Vision', 'MLOps'],
    color: '#6d5dfc',
    textColor: '#ffffff',
    icon: Bot,
  },
  {
    number: '02',
    eyebrow: 'Digital products',
    title: 'Platforms people come back to.',
    description:
      'Product strategy, UX, and robust web systems for intricate workflows and high-growth teams.',
    tags: ['Next.js', 'UX', 'Cloud', 'HealthTech'],
    color: '#9ee6dc',
    textColor: '#171719',
    icon: MonitorSmartphone,
  },
  {
    number: '03',
    eyebrow: 'Immersive',
    title: 'Experiences that make a point.',
    description:
      'Spatial products, interactive installations, realtime 3D, and games designed to be felt—not just viewed.',
    tags: ['Unity', 'WebGL', 'VR', 'Realtime'],
    color: '#ff8066',
    textColor: '#ffffff',
    icon: Boxes,
  },
  {
    number: '04',
    eyebrow: 'Mobile',
    title: 'Apps built for the real world.',
    description:
      'Fast cross-platform apps with location, hardware, payment, and realtime connections handled with care.',
    tags: ['Flutter', 'Native', 'Maps', 'Realtime'],
    color: '#c9f44c',
    textColor: '#171719',
    icon: Sparkles,
  },
];

interface StackingServiceCardProps {
  service: any;
  index: number;
  total: number;
}

function StackingServiceCard({ service, index, total }: StackingServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // Track the scroll of this card relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // When pinned and subsequent cards arrive on top:
  // scale down slightly and softly fade out non-last cards so previous content doesn't visually clash
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, isLast ? 1 : 0.8], [1, isLast ? 1 : 0.05]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.7],
    ['blur(0px)', isLast ? 'blur(0px)' : 'blur(6px)']
  );

  const Icon = service.icon || Sparkles;
  const isDark = service.textColor === '#ffffff';

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 mb-16 last:mb-0"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale, opacity, filter, backgroundColor: service.color }}
        className="group relative min-h-[440px] md:min-h-[480px] overflow-hidden rounded-[2.5rem] border border-[#171719]/12 p-8 md:p-14 shadow-[0_20px_50px_rgba(23,23,25,0.12)] transition-shadow hover:shadow-[0_30px_70px_rgba(23,23,25,0.2)] will-change-transform"
      >
        <div className="relative z-10 flex items-start justify-between">
          <span
            className={`font-mono text-sm md:text-base font-bold ${
              isDark ? 'text-white/70' : 'text-[#171719]/70'
            }`}
          >
            {service.number}
          </span>
          <div
            className={`grid h-12 w-12 place-items-center rounded-2xl ${
              isDark ? 'bg-white/15 text-white' : 'bg-[#171719]/10 text-[#171719]'
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>

        {/* Floating geometric circular badge */}
        <div className="absolute right-[-2.5rem] top-16 h-56 w-56 rounded-full border-[28px] border-white/40 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

        <div className="relative z-10 mt-16 md:mt-20 max-w-3xl">
          <div
            className={`text-xs font-bold uppercase tracking-[.22em] ${
              isDark ? 'text-white/75' : 'text-[#171719]/75'
            }`}
          >
            {service.eyebrow || 'Capability'}
          </div>
          <h3
            className={`mt-4 text-[clamp(2.4rem,4.5vw,4.8rem)] font-semibold leading-[.92] tracking-[-0.06em] ${
              isDark ? 'text-white' : 'text-[#171719]'
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${
              isDark ? 'text-white/80' : 'text-[#171719]/80'
            }`}
          >
            {service.description}
          </p>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10">
          <div className="flex flex-wrap gap-2">
            {service.tags?.map((tag: string) => (
              <span
                key={tag}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[.1em] backdrop-blur-sm ${
                  isDark
                    ? 'border border-white/20 bg-white/15 text-white'
                    : 'border border-[#171719]/15 bg-white/50 text-[#171719]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[.16em] transition-transform hover:-translate-y-0.5 ${
              isDark
                ? 'bg-white text-[#171719] shadow-md shadow-black/10'
                : 'bg-[#171719] text-white shadow-md shadow-black/10'
            }`}
          >
            Inquire scope <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.article>
    </div>
  );
}

export default function Services({ content }: { content?: any }) {
  const services = content?.list?.length
    ? content.list.map((item: any, index: number) => ({
        ...defaults[index % defaults.length],
        title: item.title || defaults[index % defaults.length].title,
        description: item.description || defaults[index % defaults.length].description,
      }))
    : defaults;

  return (
    <section id="services" className="bg-[#f8f7f3] px-5 py-24 sm:px-8 md:py-32 lg:px-12 relative">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-7 border-b border-[#171719]/15 pb-14 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6d5dfc]">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-3xl text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[.86] tracking-[-.07em]">
              Everything a big idea needs to become{' '}
              <span className="font-['Playfair_Display'] font-medium italic text-[#ff8066]">
                real.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#696968]">
            Scroll through our core disciplines. Each capability card smoothly stacks and transitions as you explore our scope.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative mt-12 pb-12">
          {services.map((service: any, index: number) => (
            <StackingServiceCard
              key={service.title}
              service={service}
              index={index}
              total={services.length}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#171719]/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-[#696968]">Need a partner for a different kind of problem?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#171719] hover:text-[#6d5dfc]"
          >
            Let&apos;s talk about it <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
