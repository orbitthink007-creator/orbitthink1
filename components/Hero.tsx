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
        <section id="home" className="sticky top-0 h-screen flex flex-col justify-center pb-16 md:pb-24 px-6 md:px-14 overflow-hidden bg-[#09090b] z-0">
            {/* Ambient Background Glow & Radial Gradients */}
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

            {/* Orbit Ambient Animated Planetary Rings with revolving dots */}
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[340px] md:w-[680px] h-[340px] md:h-[680px] pointer-events-none">
                {/* Outer Ring 1 with revolving white node */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06] animate-[spin_35s_linear_infinite]">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
                </div>

                {/* Middle Ring 2 with revolving emerald node */}
                <div className="absolute inset-16 md:inset-24 rounded-full border border-[#00CD58]/[0.15] animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00CD58] shadow-[0_0_24px_#00CD58]" />
                </div>

                {/* Inner Ring 3 with fast small planetary spark */}
                <div className="absolute inset-32 md:inset-48 rounded-full border border-white/[0.08] animate-[spin_12s_linear_infinite]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00CD58] shadow-[0_0_14px_#00CD58]" />
                </div>

                {/* Central Luminous Star Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#00CD58] shadow-[0_0_35px_#00CD58] animate-pulse" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Massive Typographic Headline without excessive top space or tags */}
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(48px,8vw,128px)] font-black leading-[0.92] tracking-[-0.04em] text-white uppercase mb-8 mt-0"
                >
                    Defying <span className="text-[#00CD58]">Gravity</span> <br />
                    With Code.
                </motion.h1>

                {/* Bottom Meta & Action Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
