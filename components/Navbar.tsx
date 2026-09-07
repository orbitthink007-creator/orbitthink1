'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const fallbackLinks = [
  { label: 'Capabilities', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Approach', href: '/#process' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ content }: { content?: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = content?.links?.length ? content.links.filter((link: any) => link.label !== 'Home') : fallbackLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] px-4 py-4 sm:px-7 sm:py-5">
      <div className={`pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${scrolled ? 'border-[#171719]/12 bg-[#f8f7f3]/90 shadow-[0_12px_40px_rgba(23,23,25,.09)] backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <Link href="/" className="flex items-baseline gap-1 px-2 py-1 text-xl font-semibold tracking-[-.09em] text-[#171719]" aria-label="OrbitThink home">
          orbit<span className="text-[#6d5dfc]">think</span><span className="ml-1 text-sm text-[#ff8066]">✦</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link: any) => (
            <Link key={link.label} href={link.href} className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#555554] transition-colors hover:bg-[#171719] hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#171719] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.15em] text-white transition-transform hover:-translate-y-0.5 sm:inline-flex">
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-[#171719]/15 bg-white text-[#171719] lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .22 }} className="pointer-events-auto mx-auto mt-3 max-w-[1440px] rounded-[1.75rem] border border-[#171719]/12 bg-[#f8f7f3] p-3 shadow-[0_18px_50px_rgba(23,23,25,.14)] lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link: any) => <Link key={link.label} href={link.href} onClick={close} className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium tracking-tight hover:bg-white"><span>{link.label}</span><ArrowUpRight className="h-4 w-4 text-[#6d5dfc]" /></Link>)}
              <Link href="/contact" onClick={close} className="mt-2 rounded-2xl bg-[#171719] px-4 py-4 text-center text-xs font-bold uppercase tracking-[.16em] text-white">Start a project</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
