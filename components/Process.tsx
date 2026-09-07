'use client';

import { motion } from 'framer-motion';

const defaults = [
  ['01', 'Find the signal', 'We ask better questions, map the opportunity, and get honest about what will make the difference.'],
  ['02', 'Make it tangible', 'We prototype the experience, pressure-test decisions, and build a system your team can stand behind.'],
  ['03', 'Ship with care', 'We launch deliberately, measure what matters, and keep the product moving after it is in the world.'],
];

export default function Process({ content }: { content?: any }) {
  const steps = content?.steps?.length ? content.steps.slice(0, 3).map((step: any, index: number) => [String(index + 1).padStart(2, '0'), step.title, step.description]) : defaults;
  return (
    <section id="process" className="bg-[#1b79ff] px-5 py-24 text-[#171719] sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-[#171719]/25 pb-14 lg:grid-cols-[.74fr_1fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.2em]">How we work</p><h2 className="mt-3 text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[.85] tracking-[-.075em]">No theatre.<br /><span className="font-['Playfair_Display'] font-medium italic text-white">Just momentum.</span></h2></div><p className="max-w-md text-base leading-relaxed text-[#171719]/75">The process should make the work clearer, faster, and more useful—not add friction for its own sake.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step: any, index: number) => <motion.article key={step[1]} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1, duration: .55 }} className="group min-h-[300px] rounded-[1.8rem] border border-[#171719]/20 bg-[#f8f7f3] p-6 sm:p-7"><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#6d5dfc]">{step[0]}</span><span className="grid h-8 w-8 place-items-center rounded-full bg-[#c9f44c] text-sm transition-transform group-hover:rotate-45">↗</span></div><div className="mt-20"><h3 className="text-3xl font-semibold leading-[.92] tracking-[-.06em]">{step[1]}</h3><p className="mt-4 text-sm leading-relaxed text-[#696968]">{step[2]}</p></div></motion.article>)}
        </div>
      </div>
    </section>
  );
}
