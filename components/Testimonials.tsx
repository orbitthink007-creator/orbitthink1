'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const defaults = [
  { text: 'OrbitThink transformed our healthcare workflows with an end-to-end platform that was clear, capable, and ready for our team to grow into.', author: 'Dr. K. Williamson', role: 'CTO, MediCore Systems' },
  { text: 'They moved from a complicated technical problem to a working product with remarkable focus. The team was responsive, direct, and genuinely thoughtful.', author: 'Marcus Chen', role: 'Director of Operations, Vantage Security' },
  { text: 'Their command of realtime systems gave our immersive product a level of quality we could feel as soon as we used it.', author: 'Sarah Jenkins', role: 'VP of Product, Horizon Game Labs' },
];

export default function Testimonials({ content }: { content?: any }) {
  const quotes = content?.list?.length ? content.list.map((item: any) => ({ text: item.quote || item.text || item.content || item.description, author: item.name || item.author || 'Client', role: item.role || item.title || 'Partner' })) : defaults;
  const [active, setActive] = useState(0);
  return (
    <section className="bg-[#ff8066] px-5 py-24 text-[#171719] sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]"><div className="flex items-center justify-between border-b border-[#171719]/20 pb-5"><p className="text-[10px] font-bold uppercase tracking-[.2em]">Client perspective</p><span className="font-mono text-[11px]">0{active + 1} / 0{quotes.length}</span></div><div className="grid min-h-[405px] gap-9 py-12 lg:grid-cols-[.25fr_.75fr]"><div className="flex gap-2 lg:flex-col lg:justify-end">{quotes.map((quote: any, index: number) => <button key={quote.author} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${active === index ? 'w-12 bg-[#171719] lg:h-12 lg:w-2.5' : 'w-2.5 bg-[#171719]/25 hover:bg-[#171719]/50'}`} aria-label={`Show quote from ${quote.author}`} />)}</div><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .35 }} className="flex flex-col justify-between"><blockquote className="max-w-5xl text-[clamp(2.25rem,4.7vw,5.2rem)] font-medium leading-[.94] tracking-[-.065em]">“{quotes[active]?.text}”</blockquote><footer className="mt-12 flex flex-wrap items-end justify-between gap-4 border-t border-[#171719]/20 pt-5"><div><div className="font-semibold">{quotes[active]?.author}</div><div className="mt-1 text-xs uppercase tracking-[.11em] text-[#171719]/60">{quotes[active]?.role}</div></div><span className="text-3xl text-[#6d5dfc]">✦</span></footer></motion.div></AnimatePresence></div></div>
    </section>
  );
}
