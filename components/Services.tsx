'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Services({ content }: { content?: any }) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const defaultServices = [
        {
            number: "01",
            title: "Enterprise AI & LLM Systems",
            desc: "Custom LLM pipelines, autonomous RAG agents, real-time Computer Vision surveillance, and cloud MLOps on AWS/Azure.",
            tags: ["LLMs", "LangChain", "OpenCV", "MLOps"],
            badge: "CORE STRENGTH"
        },
        {
            number: "02",
            title: "Immersive 3D & VR Engineering",
            desc: "Physics-accurate Unity 2D/3D systems, Oculus VR simulators, and multiplayer game servers (Photon & Nakama).",
            tags: ["Unity 3D", "Oculus SDK", "C#", "Nakama"],
            badge: "NEXT-GEN"
        },
        {
            number: "03",
            title: "Scalable Web & HealthTech Platforms",
            desc: "Full-stack architectures using Next.js 14 and Node.js. HIPAA-compliant Electronic Health Record platforms and high-conversion e-commerce.",
            tags: ["Next.js", "TypeScript", "HIPAA", "Distributed DB"],
            badge: "ENTERPRISE"
        },
        {
            number: "04",
            title: "High-Performance Mobile Innovation",
            desc: "Fluid cross-platform applications engineered with Flutter. Live geo-fencing, Bluetooth BLE integrations, and sub-second native response.",
            tags: ["Flutter", "Dart", "Firebase", "Realtime Geolocation"],
            badge: "CROSS-PLATFORM"
        }
    ];

    const serviceList = content?.list?.length ? content.list.map((item: any, i: number) => ({
        number: String(i + 1).padStart(2, '0'),
        title: item.title,
        desc: item.description,
        tags: ["Architecture", "Engineering", "Production"],
        badge: "EXPERTISE"
    })) : defaultServices;

    return (
        <section id="services" className="py-28 md:py-40 px-6 md:px-14 bg-[#09090b] text-white border-b border-white/10 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <div>
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            CAPABILITIES & SERVICES
                        </span>
                        <h2 className="text-[clamp(36px,5.5vw,78px)] font-black tracking-[-0.04em] leading-[0.92] uppercase">
                            What We <span className="text-[#00CD58]">Build.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed">
                        Precision engineering across the four pillars of modern software: Machine Intelligence, Immersive VR, Distributed Web, and Mobile.
                    </p>
                </div>

                {/* Interactive Services Rows (Lircle Style) */}
                <div className="border-t border-white/15 divide-y divide-white/10">
                    {serviceList.map((service: any, index: number) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIdx(index)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className="group relative py-10 md:py-14 transition-all duration-500 cursor-pointer"
                        >
                            {/* Hover highlight background */}
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-2 md:px-6">
                                <div className="flex items-start md:items-center gap-6 md:gap-10">
                                    <span className="text-xs md:text-sm font-mono font-bold text-[#71717a] group-hover:text-[#00CD58] transition-colors pt-1 md:pt-0">
                                        {service.number || `0${index + 1}`}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white group-hover:text-[#00CD58] transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs md:text-sm text-[#a1a1aa] max-w-xl line-clamp-2 font-light">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 self-end md:self-center">
                                    <div className="hidden lg:flex items-center gap-2">
                                        {service.tags.map((t: string, ti: number) => (
                                            <span key={ti} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:border-[#00CD58] group-hover:bg-[#00CD58] group-hover:text-[#0a0a0a] transition-all duration-300">
                                        <span className="text-base font-bold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-between items-center pt-8 border-t border-white/10">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#71717a] font-bold">
                        NEED BESPOKE ARCHITECTURE?
                    </span>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#00CD58] hover:underline"
                    >
                        Schedule Technical Consultation <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
