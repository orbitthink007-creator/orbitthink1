'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
    project: any;
    index: number;
    total: number;
}

function StackingProjectCard({ project, index, total }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isLast = index === total - 1;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
    const opacity = useTransform(scrollYProgress, [0, isLast ? 1 : 0.75], [1, isLast ? 1 : 0]);
    const filter = useTransform(scrollYProgress, [0, 0.8], ['blur(0px)', isLast ? 'blur(0px)' : 'blur(8px)']);

    return (
        <div
            ref={cardRef}
            className="sticky top-28 md:top-36 mb-24 last:mb-0"
            style={{
                zIndex: index + 10,
            }}
        >
            <motion.div
                style={{ scale, opacity, filter }}
                className="p-8 md:p-14 rounded-[2.5rem] bg-[#111114] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-300 group hover:border-[#00CD58]/50 will-change-transform"
            >
                <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#00CD58] px-3.5 py-1.5 rounded-full bg-[#00CD58]/10 border border-[#00CD58]/20">
                                {project.category}
                            </span>
                            <span className="text-xs font-mono text-[#71717a]">
                                {project.metrics}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 group-hover:text-[#00CD58] transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech?.map((t: string, ti: number) => (
                                <span
                                    key={ti}
                                    className="text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto shrink-0">
                        <div className="text-left lg:text-right">
                            <span className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase block mb-1">
                                Lead Architect
                            </span>
                            <span className="text-sm font-bold text-white font-mono">
                                {project.lead}
                            </span>
                        </div>

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/15 text-xs font-bold uppercase tracking-wider text-white group-hover:bg-[#00CD58] group-hover:text-[#0a0a0a] group-hover:border-[#00CD58] transition-all duration-300"
                        >
                            <span>Inspect Mission</span>
                            <span className="text-sm">↗</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Portfolio({ content }: { content?: any }) {
    const defaultProjects = [
        {
            title: "VisionX Autonomous Surveillance",
            category: "Enterprise AI & CV",
            lead: "Syed Muhammad Mehmam",
            desc: "Ultra low-latency computer vision system for real-time safety, perimeter security, and automated anomaly detection.",
            tech: ["Python", "FastAPI", "OpenCV", "TensorRT"],
            metrics: "< 45ms inference"
        },
        {
            title: "Tower Defence VR",
            category: "Immersive Gaming / Oculus",
            lead: "M Ghulam Murtaza",
            desc: "Tactical VR combat environment built on Unity 3D with synchronized multiplayer network mechanics.",
            tech: ["Unity 3D", "Oculus SDK", "C#", "Photon Server"],
            metrics: "90 FPS Synchronous"
        },
        {
            title: "EHR Clinical Patient Monitoring",
            category: "Healthcare Platform",
            lead: "Tulaib Ahmed Siddiqui",
            desc: "HIPAA-compliant Electronic Health Record suite with end-to-end encrypted telemetry, vital streaming, and analytics.",
            tech: ["Next.js 14", "TypeScript", "Redux", "HIPAA Vault"],
            metrics: "100% HIPAA Compliant"
        },
        {
            title: "IGU: Real-World Geotag Mobile",
            category: "Mobile Innovation",
            lead: "Owais Uddin Ahmed",
            desc: "Location-bound multiplayer physical-digital mobile experience with live boundary geofencing.",
            tech: ["Flutter", "Google Maps SDK", "Firebase", "WebSockets"],
            metrics: "50K+ Concurrent"
        }
    ];

    const projects = content?.projects?.length
        ? content.projects.map((p: any) => ({
              title: p.title,
              category: p.category || p.tag || "Production System",
              lead: p.lead || "OrbitThink Team",
              desc: p.description,
              tech: p.tech || ["Next.js", "AI", "Cloud"],
              metrics: "Production Verified"
          }))
        : defaultProjects;

    return (
        <section id="work" className="py-28 md:py-40 px-6 md:px-14 bg-[#0d0d0f] text-white border-b border-white/10 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <div>
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            SELECTED MISSIONS
                        </span>
                        <h2 className="text-[clamp(36px,5.5vw,78px)] font-black tracking-[-0.04em] leading-[0.92] uppercase">
                            Case <span className="text-[#00CD58]">Studies.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed">
                        Scroll through our flagship deployments. Each case study smoothly reveals the architectural execution.
                    </p>
                </div>

                {/* Stacking Project Cards Container */}
                <div className="relative pb-16">
                    {projects.map((item: any, index: number) => (
                        <StackingProjectCard
                            key={index}
                            project={item}
                            index={index}
                            total={projects.length}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/15 text-xs font-black uppercase tracking-[0.2em] text-white hover:border-[#00CD58] hover:text-[#00CD58] transition-all duration-300"
                    >
                        <span>Explore All Missions</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
