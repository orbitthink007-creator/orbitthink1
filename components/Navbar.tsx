'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ content }: { content: any }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Fallback protection
    const navContent = content || {
        logo: { text: "Orbit", accent: "Think" }, links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Process", href: "/#process" }, // Keeping anchor for homepage scroll
            { label: "Portfolio", href: "/portfolio" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" }
        ], cta: { label: "Get Started", href: "#" }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            if (window.location.pathname !== '/') {
                window.location.href = href;
                return;
            }
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
            }
        } else {
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
                <div className="flex-shrink-0 z-10">
                    <Link href="/" className="font-heading text-2xl font-extrabold tracking-tighter text-[var(--text-primary)] flex items-center">
                        {navContent.logo.text}<span className="text-[var(--accent-primary)]">{navContent.logo.accent}</span>
                    </Link>
                </div>

                <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ul className="flex gap-10">
                        {navContent.links && navContent.links.map((link: any, index: number) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    onClick={(e) => link.href.startsWith('/#') && handleScrollTo(e, link.href)}
                                    className="text-[13px] uppercase tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex flex-shrink-0 items-center gap-4 z-10">
                    <Link href={navContent.cta.href} className="btn btn-primary !text-[12px] !font-bold !tracking-widest !py-3 !px-8 flex items-center gap-2">
                        {navContent.cta.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>

                <button
                    className="md:hidden z-[1001] text-[var(--text-primary)] focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-white z-[1000] flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <nav>
                                <ul className="flex flex-col items-center gap-8">
                                    {navContent.links && navContent.links.map((link: any, index: number) => (
                                        <li key={index}>
                                            {link.href.startsWith('/#') ? (
                                                <a href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-xl font-bold text-[var(--text-primary)]">
                                                    {link.label}
                                                </a>
                                            ) : (
                                                <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-[var(--text-primary)]">
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Link href={navContent.cta.href} onClick={() => setMobileMenuOpen(false)} className="btn btn-primary text-base px-10 py-4">
                                {navContent.cta.label}
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
