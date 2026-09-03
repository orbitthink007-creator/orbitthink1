'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ content }: { content?: any }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = content?.links || [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Philosophy", href: "/#philosophy" },
        { label: "Work", href: "/#work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
    ];

    const cta = content?.cta || { label: "Let's Talk", href: "/contact" };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#') || href.startsWith('#')) {
            const targetId = href.replace(/^\/?#/, '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                setMobileMenuOpen(false);
                if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(targetElement, { offset: -60, duration: 1.2 });
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                return;
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none transition-all duration-300 px-4 md:px-10 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand Logo - White Company Logo PNG/SVG */}
                <div className="pointer-events-auto">
                    <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                            src="/images/orbitthink-logo-white.svg"
                            alt="OrbitThink Logo"
                            width={160}
                            height={36}
                            priority
                            className="h-8 md:h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                        />
                    </Link>
                </div>

                {/* Floating Centered Pill Navigation (Lircle & Grigoletti Style) */}
                <nav className={`pointer-events-auto hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all duration-500 ${
                    scrolled
                        ? 'bg-[#141414]/90 border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl scale-95'
                        : 'bg-[#141414]/60 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md'
                }`}>
                    {navLinks.map((link: any, index: number) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#999999] hover:text-[#00CD58] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-white/[0.05]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right CTA / Menu Toggle */}
                <div className="pointer-events-auto flex items-center gap-3">
                    <Link
                        href={cta.href}
                        onClick={(e) => handleLinkClick(e, cta.href)}
                        className="hidden sm:inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.22em] px-5 py-2.5 rounded-full bg-[#00CD58] text-[#0d0d0d] transition-all duration-300 hover:bg-[#00e362] hover:shadow-[0_0_24px_rgba(0,205,88,0.45)] hover:-translate-y-0.5"
                    >
                        <span>{cta.label}</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#141414]/90 border border-white/15 text-white focus:outline-none backdrop-blur-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Animated Dropdown Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="pointer-events-auto md:hidden mt-4 mx-2 p-6 rounded-3xl bg-[#111113]/98 border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl text-white"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link: any, index: number) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-extrabold tracking-tight text-white/90 hover:text-[#00CD58] hover:bg-white/[0.04] transition-all"
                                >
                                    <span>{link.label}</span>
                                    <span className="text-xs text-[#00CD58] opacity-60">↗</span>
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center py-3.5 rounded-2xl bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.2em]"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
