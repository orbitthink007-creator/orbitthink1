'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ content }: { content?: any }) {
    const hero = content || {
        tag: "Defying The Laws of Software",
        title: "Orbit",
        titleAccent: "Think",
        description: "We engineer high-velocity systems for ambitious leaders — from foundational AI pipelines and immersive 3D/VR to mission-critical web ecosystems.",
        cta: "Start Your Mission",
        number: "+923394054520"
    };

    return (
        <section id="home" className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-36 md:pt-44 px-6 md:px-14 overflow-hidden bg-[#09090b]">
            {/* Ambient Background Glow & Radial Gradients (Lircle / Grigoletti style) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00CD58]/[0.07] blur-[140px]" />
                <div className="absolute bottom-[-15%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#00CD58]/[0.05] blur-[160px]" />
                <div 
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem'
                    }}
                />
            </div>

            {/* Orbit Ambient Floating Rings */}
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[340px] md:w-[680px] h-[340px] md:h-[680px] pointer-events-none opacity-40 -z-0">
                <div className="absolute inset-0 rounded-full border border-white/[0.04] animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-[#00CD58]/[0.08] animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-24 rounded-full border border-white/[0.03]" />
                <div className="absolute top-12 left-1/2 w-2 h-2 rounded-full bg-[#00CD58] shadow-[0_0_15px_#00CD58]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Micro Category Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-3 mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#00CD58] text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.26em] backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CD58] animate-pulse" />
                        {hero.tag || "DEFIYING THE LAWS OF SOFTWARE"}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.24em] text-white/30 font-bold">
                        EST. 2024 / WORLDWIDE
                    </span>
                </motion.div>

                {/* Massive Typographic Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(44px,7.5vw,118px)] font-black leading-[0.92] tracking-[-0.04em] text-white uppercase mb-8"
                >
                    Defying <span className="text-[#00CD58]">Gravity</span> <br />
                    With Code.
                </motion.h1>

                {/* Bottom Meta & Action Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4 border-t border-white/10"
                >
                    <p className="max-w-xl text-[15px] md:text-lg text-[#a1a1aa] leading-relaxed font-light">
                        {hero.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#00e362] hover:shadow-[0_0_35px_rgba(0,205,88,0.4)] hover:-translate-y-0.5"
                        >
                            <span>{hero.cta || "Launch Project"}</span>
                            <span className="text-sm">↗</span>
                        </Link>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/[0.04] border border-white/15 text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#00CD58] hover:text-[#00CD58]"
                        >
                            Explore Capabilities
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
