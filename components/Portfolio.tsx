'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const defaults = [
  {
    title: 'VisionX Autonomous Surveillance',
    category: 'AI & computer vision',
    metric: '<45ms inference',
    description:
      'A realtime computer vision platform for safety, perimeter security, and anomaly detection.',
    tech: ['Python', 'FastAPI', 'OpenCV'],
    color: '#6d5dfc',
    tone: 'dark',
    visual: 'vision',
  },
  {
    title: 'Tower Defence VR',
    category: 'Immersive product',
    metric: '90 FPS sync',
    description:
      'A tactical multiplayer VR experience designed for seamless physical presence.',
    tech: ['Unity', 'Oculus', 'Photon'],
    color: '#ff8066',
    tone: 'dark',
    visual: 'vr',
  },
  {
    title: 'EHR Clinical Monitoring',
    category: 'Health platform',
    metric: 'HIPAA-ready',
    description:
      'A clear, connected clinical platform for teams and the patients they serve.',
    tech: ['Next.js', 'TypeScript', 'Cloud'],
    color: '#9ee6dc',
    tone: 'light',
    visual: 'ehr',
  },
  {
    title: 'IGU Real-World Geotag',
    category: 'Mobile experience',
    metric: 'Live multiplayer',
    description:
      'A location-led game that bridges digital play and the real world.',
    tech: ['Flutter', 'Maps', 'Firebase'],
    color: '#c9f44c',
    tone: 'light',
    visual: 'igu',
  },
];

function ProjectVisual({ kind, tone }: { kind: string; tone: 'dark' | 'light' }) {
  if (kind === 'vision')
    return (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-x-[12%] top-[15%] aspect-square rounded-full border-[1px] border-white/50" />
        <div className="absolute inset-x-[27%] top-[30%] aspect-square rounded-full border-[1px] border-white/35" />
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9f44c] shadow-[0_0_0_12px_rgba(201,244,76,.2)]" />
        <div className="absolute bottom-[17%] left-[12%] font-mono text-[10px] tracking-[.2em] text-white/70">
          SCENE ANALYSIS / LIVE
        </div>
      </div>
    );
  if (kind === 'vr')
    return (
      <div className="relative h-full">
        <div className="absolute left-[15%] top-[20%] h-[63%] w-[70%] rotate-[-10deg] rounded-[50%] border-[18px] border-[#171719] bg-[#9ee6dc] shadow-[18px_20px_0_rgba(23,23,25,.2)]" />
        <div className="absolute left-[29%] top-[40%] h-[18%] w-[40%] rounded-full bg-[#171719]" />
        <div className="absolute bottom-[15%] right-[12%] h-12 w-12 rounded-full border-4 border-white/60" />
      </div>
    );
  if (kind === 'ehr')
    return (
      <div className="relative h-full">
        <div className="absolute left-[14%] top-[15%] h-[70%] w-[72%] rounded-[1.4rem] border border-[#171719]/20 bg-white/75 p-4 shadow-[14px_16px_0_rgba(23,23,25,.08)]">
          <div className="h-4 w-1/3 rounded-full bg-[#6d5dfc]" />
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-24 rounded-xl bg-[#9ee6dc]" />
            <div className="h-24 rounded-xl bg-[#ff8066]" />
          </div>
          <div className="mt-3 h-3 w-full rounded-full bg-[#171719]/10" />
          <div className="mt-2 h-3 w-3/4 rounded-full bg-[#171719]/10" />
        </div>
      </div>
    );
  return (
    <div className="relative h-full">
      <div className="absolute left-[17%] top-[12%] h-[77%] w-[45%] rounded-[1.8rem] border-[8px] border-[#171719] bg-[#f8f7f3] shadow-[16px_18px_0_rgba(23,23,25,.18)]">
        <div className="mx-auto mt-5 h-2 w-12 rounded-full bg-[#171719]" />
        <div className="m-4 mt-9 h-24 rounded-2xl bg-[#1b79ff]" />
        <div className="m-4 h-3 rounded-full bg-[#171719]/15" />
        <div className="m-4 h-3 w-2/3 rounded-full bg-[#171719]/15" />
      </div>
      <div className="absolute right-[13%] top-[32%] h-24 w-24 rounded-full border-[16px] border-[#ff8066]" />
    </div>
  );
}

interface StackingProjectCardProps {
  project: any;
  index: number;
  total: number;
}

function StackingProjectCard({ project, index, total }: StackingProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, isLast ? 1 : 0.8], [1, isLast ? 1 : 0.05]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.7],
    ['blur(0px)', isLast ? 'blur(0px)' : 'blur(6px)']
  );

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 mb-16 last:mb-0"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{
          scale,
          opacity,
          filter,
          background: project.color,
          color: project.tone === 'dark' ? '#fff' : '#171719',
        }}
        className="group overflow-hidden rounded-[2.5rem] border border-[#171719]/15 shadow-[0_20px_50px_rgba(23,23,25,0.14)] will-change-transform"
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-center">
          {/* Visual Showcase Panel */}
          <div className="relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden bg-black/5">
            <ProjectVisual kind={project.visual} tone={project.tone} />
            <div className="absolute left-6 top-6 flex gap-2">
              <span
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-bold ${
                  project.tone === 'dark'
                    ? 'border-white/25 bg-black/20 text-white'
                    : 'border-[#171719]/15 bg-white/60 text-[#171719]'
                }`}
              >
                {project.metric}
              </span>
            </div>
          </div>

          {/* Text Content Panel */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <div
                className={`text-xs font-bold uppercase tracking-[.18em] ${
                  project.tone === 'dark' ? 'text-white/65' : 'text-[#171719]/65'
                }`}
              >
                {project.category}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="max-w-md text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[.92] tracking-[-.06em]">
                  {project.title}
                </h3>
                <div
                  className={`grid h-12 w-12 place-items-center rounded-full border transition-transform duration-300 group-hover:rotate-45 shrink-0 ${
                    project.tone === 'dark'
                      ? 'border-white/30 text-white'
                      : 'border-[#171719]/30 text-[#171719]'
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <p
                className={`mt-6 max-w-lg text-base md:text-lg leading-relaxed ${
                  project.tone === 'dark' ? 'text-white/75' : 'text-[#171719]/75'
                }`}
              >
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10">
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech: string) => (
                  <span
                    key={tech}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[.1em] backdrop-blur-sm ${
                      project.tone === 'dark'
                        ? 'bg-white/15 text-white'
                        : 'bg-white/50 text-[#171719]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[.15em] transition-transform hover:-translate-y-0.5 ${
                  project.tone === 'dark'
                    ? 'bg-white text-[#171719] shadow-md shadow-black/10'
                    : 'bg-[#171719] text-white shadow-md shadow-black/10'
                }`}
              >
                Case study <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Portfolio({ content }: { content?: any }) {
  const projects = content?.projects?.length
    ? content.projects.slice(0, 4).map((project: any, index: number) => ({
        ...defaults[index % defaults.length],
        title: project.title || defaults[index % defaults.length].title,
        category: project.category || defaults[index % defaults.length].category,
        description: project.description || defaults[index % defaults.length].description,
        tech: project.tech || defaults[index % defaults.length].tech,
      }))
    : defaults;

  return (
    <section id="work" className="bg-[#eeece5] px-5 py-24 sm:px-8 md:py-32 lg:px-12 relative">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-[#171719]/15 pb-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6d5dfc]">
              Selected work
            </p>
            <h2 className="mt-3 text-[clamp(3.2rem,7vw,7.4rem)] font-semibold leading-[.84] tracking-[-.075em]">
              Proof, not
              <br />
              <span className="font-['Playfair_Display'] font-medium italic text-[#1b79ff]">
                promises.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#696968]">
            Scroll through our highlighted projects. Each mission card glides into focus with smooth layered depth.
          </p>
        </div>

        {/* Stacking Project Cards Container */}
        <div className="relative mt-14 pb-12">
          {projects.map((project: any, index: number) => (
            <StackingProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

        <div className="mt-10 text-center border-t border-[#171719]/15 pt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#171719]/20 bg-white/50 px-7 py-4 text-xs font-bold uppercase tracking-[.15em] transition-all hover:border-[#171719] hover:bg-white shadow-sm"
          >
            Explore all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
