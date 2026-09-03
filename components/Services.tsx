'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
    service: any;
    index: number;
    total: number;
}

function StackingServiceCard({ service, index, total }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isLast = index === total - 1;

    // Monitor this card's scroll progression
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start start', 'end start'],
    });

    // When the card is pinned and the NEXT card comes over it:
    // Scale it down slightly (e.g. 1 -> 0.92), blur it subtly, and fade its opacity (1 -> 0)
    // so it doesn't remain visible or obstruct the next section!
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0, isLast ? 1 : 0.75], [1, isLast ? 1 : 0]);
    const filter = useTransform(scrollYProgress, [0, 0.8], ['blur(0px)', isLast ? 'blur(0px)' : 'blur(8px)']);

    return (
        <div
            ref={cardRef}
            className="sticky top-28 md:top-36 mb-24 last:mb-0"
            style={{
                zIndex: index + 10
            }}
        >
            <motion.div
                style={{ scale, opacity, filter }}
                className="p-8 md:p-14 rounded-[2.5rem] bg-[#141417] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-300 group hover:border-[#00CD58]/50 will-change-transform"
            >
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
                    <div className="flex items-start gap-6 md:gap-10">
                        <span className="text-2xl md:text-4xl font-mono font-black text-[#00CD58] shrink-0 pt-1">
                            {service.number}
                        </span>
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-[#00CD58]/10 text-[#00CD58] border border-[#00CD58]/20">
                                    {service.badge || "EXPERTISE"}
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 group-hover:text-[#00CD58] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed max-w-2xl">
                                {service.desc}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10 shrink-0">
                        <div className="flex flex-wrap gap-2">
                            {service.tags?.map((t: string, ti: number) => (
                                <span
                                    key={ti}
                                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/70"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/15 text-xs font-bold uppercase tracking-wider text-white group-hover:bg-[#00CD58] group-hover:text-[#0a0a0a] group-hover:border-[#00CD58] transition-all duration-300"
                        >
                            <span>Inquire Scope</span>
                            <span className="text-sm">↗</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Services({ content }: { content?: any }) {
    const defaultServices = [
        {
            number: "01",
            title: "Enterprise AI & LLM Systems",
            desc: "Custom LLM pipelines, autonomous RAG agents, real-time Computer Vision surveillance, and cloud MLOps on AWS/Azure.",
            tags: ["LLMs", "LangChain", "OpenCV", "MLOps"],
            badge: "MACHINE INTELLIGENCE"
        },
        {
            number: "02",
            title: "Immersive 3D & VR Engineering",
            desc: "Physics-accurate Unity 2D/3D systems, Oculus VR simulators, and multiplayer game servers (Photon & Nakama).",
            tags: ["Unity 3D", "Oculus SDK", "C#", "Nakama"],
            badge: "SPATIAL SYSTEMS"
        },
        {
            number: "03",
            title: "Scalable Web & HealthTech Platforms",
            desc: "Full-stack architectures using Next.js 14 and Node.js. HIPAA-compliant Electronic Health Record platforms and high-conversion e-commerce.",
            tags: ["Next.js", "TypeScript", "HIPAA", "Distributed DB"],
            badge: "WEB PLATFORMS"
        },
        {
            number: "04",
            title: "High-Performance Mobile Innovation",
            desc: "Fluid cross-platform applications engineered with Flutter. Live geo-fencing, Bluetooth BLE integrations, and sub-second native response.",
            tags: ["Flutter", "Dart", "Firebase", "Realtime Geolocation"],
            badge: "MOBILE NATIVE"
        }
    ];

    const serviceList = content?.list?.length
        ? content.list.map((item: any, i: number) => ({
              number: String(i + 1).padStart(2, '0'),
              title: item.title,
              desc: item.description,
              tags: ["Architecture", "Engineering", "Scale"],
              badge: "EXPERTISE"
          }))
        : defaultServices;

    return (
        <section id="services" className="py-28 md:py-40 px-6 md:px-14 bg-[#09090b] text-white border-b border-white/10 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <div>
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            CAPABILITIES & SCOPE
                        </span>
                        <h2 className="text-[clamp(36px,5.5vw,78px)] font-black tracking-[-0.04em] leading-[0.92] uppercase">
                            What We <span className="text-[#00CD58]">Build.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed">
                        Scroll through our specialized engineering domains. Each stack smoothly transitions as new layers arrive.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative pb-16">
                    {serviceList.map((service: any, index: number) => (
                        <StackingServiceCard
                            key={index}
                            service={service}
                            index={index}
                            total={serviceList.length}
                        />
                    ))}
                </div>

                <div className="mt-12 flex justify-between items-center pt-8 border-t border-white/10">
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
