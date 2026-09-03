'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutClient({ content }: { content?: any }) {
    const about = content?.about || {
        tag: "Who We Are",
        title: "Defying The Laws",
        titleAccent: "Of Software",
        missionTitle: "OUR CODEBASE PRINCIPLES",
        missionText: "We engineer systems where speed, resilience, and visual craftsmanship converge without compromise.",
        team: []
    };

    const principles = [
        {
            num: "01",
            title: "Performance First",
            desc: "Every interaction is tuned for sub-second response, from database query plan to frontend hydration."
        },
        {
            num: "02",
            title: "Production Reality",
            desc: "We don't ship experiments that fail under enterprise stress. Everything is battle-tested."
        },
        {
            num: "03",
            title: "Precision Aesthetics",
            desc: "Swiss typography and brutalist clarity ensure your product stands out from noisy competitors."
        },
        {
            num: "04",
            title: "Full-Stack Velocity",
            desc: "Cross-functional mastery eliminates agency overhead, letting you ship months ahead of schedule."
        }
    ];

    return (
        <div className="bg-[#09090b] text-white min-h-screen pt-36 pb-28 px-6 md:px-14">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-4xl mb-24">
                    <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                        <span className="w-6 h-px bg-[#00CD58]" />
                        ABOUT ORBITTHINK
                    </span>
                    <h1 className="text-[clamp(44px,7vw,98px)] font-black tracking-[-0.04em] leading-[0.92] uppercase mb-8">
                        The Engineers Behind <br />
                        <span className="text-[#00CD58]">The Impossible.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed">
                        OrbitThink was assembled to solve the engineering and digital bottlenecks that prevent modern companies from reaching scale. We build foundational AI, scalable web platforms, and mobile apps.
                    </p>
                </div>

                <div className="p-10 md:p-16 rounded-3xl bg-[#141417] border border-white/10 mb-24">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#00CD58] block mb-4">
                        {about.missionTitle || "OUR MISSION STATEMENT"}
                    </span>
                    <p className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-snug">
                        "{about.missionText}"
                    </p>
                </div>

                <div className="mb-24">
                    <h2 className="text-xs font-black uppercase tracking-[0.24em] text-[#71717a] mb-8">
                        CORE ENGINEERING PRINCIPLES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-[#111113] border border-white/10"
                            >
                                <span className="text-xl font-mono font-bold text-[#00CD58] block mb-4">{p.num}</span>
                                <h3 className="text-xl font-bold tracking-tight mb-2 text-white">{p.title}</h3>
                                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="p-12 md:p-20 rounded-3xl bg-gradient-to-br from-[#141417] to-[#0d0d0f] border border-[#00CD58]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2">
                            Ready to build something iconic?
                        </h3>
                        <p className="text-sm text-[#a1a1aa] font-light">
                            Direct line to our technical directors. No sales intermediaries.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-[#00e362] shrink-0"
                    >
                        Schedule Briefing ↗
                    </Link>
                </div>
            </div>
        </div>
    );
}
