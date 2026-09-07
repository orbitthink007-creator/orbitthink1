'use client';

import { motion } from 'framer-motion';

const notes = ['Curious by default', 'Senior where it counts', 'Built around the problem', 'Clear in the room'];

export default function AboutSection({ content }: { content?: any }) {
  const intro = content?.missionText || 'OrbitThink is a close-knit engineering studio for teams who want to make a meaningful leap. We pair imagination with technical judgement, from the first rough concept to the details that make a product feel inevitable.';
  return (
    <section id="about" className="relative overflow-hidden bg-[#f8f7f3] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="pointer-events-none absolute bottom-[-11rem] left-[-9rem] h-[27rem] w-[27rem] rounded-full bg-[#ff8066]/35 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
        <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6d5dfc]">The studio</p><motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75 }} className="mt-3 max-w-4xl text-[clamp(3.3rem,7vw,7.5rem)] font-semibold leading-[.84] tracking-[-.075em]">The sweet spot between <span className="font-['Playfair_Display'] font-medium italic text-[#ff8066]">ambitious</span> and achievable.</motion.h2></div>
        <div className="lg:pt-16"><p className="max-w-xl text-lg leading-relaxed text-[#555554]">{intro}</p><div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#171719]/15 pt-7">{notes.map((note, index) => <div key={note} className="flex items-center gap-3 text-sm font-medium"><span className={`grid h-7 w-7 place-items-center rounded-full text-xs ${index % 2 ? 'bg-[#9ee6dc]' : 'bg-[#c9f44c]'}`}>✦</span>{note}</div>)}</div></div>
      </div>
      <div className="relative mx-auto mt-20 grid max-w-[1440px] overflow-hidden rounded-[2.25rem] bg-[#171719] p-7 text-white sm:p-10 lg:grid-cols-[.55fr_.45fr] lg:p-14"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#9ee6dc]">Built for collaboration</p><h3 className="mt-5 max-w-xl text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[.88] tracking-[-.07em]">A small team for a <span className="font-['Playfair_Display'] font-medium italic text-[#c9f44c]">big move.</span></h3></div><div className="mt-12 grid content-end gap-5 lg:mt-0"><p className="max-w-md text-base leading-relaxed text-white/65">You work directly with the people shaping the work. That means quicker feedback, fewer lost details, and a partnership calibrated to your pace.</p><div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#c9f44c]" /><span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/50">Remote team / worldwide reach</span></div></div><div className="absolute bottom-[-7rem] right-[-4rem] h-56 w-56 rounded-full border-[30px] border-[#6d5dfc] opacity-80" /></div>
    </section>
  );
}
