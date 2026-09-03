'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

    const projects = content?.projects?.length ? content.projects.map((p: any) => ({
        title: p.title,
        category: p.category || p.tag || "Production System",
        lead: p.lead || "OrbitThink Team",
        desc: p.description,
        tech: p.tech || ["Next.js", "AI", "Cloud"],
        metrics: "Production Ready"
    })) : defaultProjects;

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
                        A curated archive of mission-critical systems deployed for startups and enterprise clients worldwide.
                    </p>
                </div>

                {/* 2-Column High-End Editorial Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-[#141417] border border-white/10 hover:border-[#00CD58]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#00CD58] px-3.5 py-1.5 rounded-full bg-[#00CD58]/10 border border-[#00CD58]/20">
                                        {item.category}
                                    </span>
                                    <span className="text-xs font-mono text-[#71717a]">
                                        {item.metrics}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 group-hover:text-[#00CD58] transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {item.tech?.slice(0, 3).map((t: string, ti: number) => (
                                        <span key={ti} className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs font-mono text-[#71717a] flex items-center gap-2 group-hover:text-[#00CD58] transition-colors">
                                    <span>Lead: {item.lead}</span>
                                    <span>↗</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/15 text-xs font-black uppercase tracking-[0.2em] text-white hover:border-[#00CD58] hover:text-[#00CD58] transition-all duration-300"
                    >
                        <span>View All Mission Logs</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
