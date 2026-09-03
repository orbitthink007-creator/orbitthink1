'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioClient({ content }: { content?: any }) {
    const projects = [
        {
            title: "VisionX Autonomous Surveillance",
            category: "Enterprise AI & CV",
            lead: "Syed Muhammad Mehmam",
            desc: "Real-time AI surveillance engine with crowd tracking, biometric facial matching, and automated threat notifications.",
            tech: ["Python", "FastAPI", "OpenCV", "TensorRT", "SQL"]
        },
        {
            title: "Tower Defence VR",
            category: "Immersive Gaming / Oculus",
            lead: "M Ghulam Murtaza",
            desc: "Multiplayer Oculus VR strategic combat simulator featuring custom particle shaders and low-latency state sync.",
            tech: ["Unity 3D", "Oculus SDK", "C#", "Photon"]
        },
        {
            title: "EHR Clinical Patient Monitoring",
            category: "Healthcare Platform",
            lead: "Tulaib Ahmed Siddiqui",
            desc: "HIPAA-compliant Electronic Health Record system with role-based access, patient timeline telemetry, and vital monitor syncing.",
            tech: ["Next.js 14", "TypeScript", "Redux", "HIPAA Vault"]
        },
        {
            title: "IGU: Real-World Geotag Mobile",
            category: "Mobile Innovation",
            lead: "Owais Uddin Ahmed",
            desc: "Outdoor location-based multiplayer physical tag game powered by precision GPS geofencing and real-time sockets.",
            tech: ["Flutter", "Google Maps SDK", "Firebase", "WebSockets"]
        },
        {
            title: "ForexBoard Multiplayer Engine",
            category: "Gaming Infrastructure",
            lead: "M Ghulam Murtaza",
            desc: "Turn-based tactical 2D multiplayer game backend deployed with Nakama server orchestration.",
            tech: ["Nakama", "C# Server Logic", "Unity", "Docker"]
        },
        {
            title: "Tasheel FS Mobile FinTech",
            category: "FinTech Mobile",
            lead: "Owais Uddin Ahmed",
            desc: "Financial solution for agencies streamlining KYC verification workflows and installment calculations.",
            tech: ["Flutter", "REST APIs", "Secure Enclave"]
        }
    ];

    return (
        <div className="bg-[#09090b] text-white min-h-screen pt-36 pb-28 px-6 md:px-14">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-4xl mb-24">
                    <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                        <span className="w-6 h-px bg-[#00CD58]" />
                        MISSION LOGS
                    </span>
                    <h1 className="text-[clamp(44px,7vw,98px)] font-black tracking-[-0.04em] leading-[0.92] uppercase mb-8">
                        Engineered For <br />
                        <span className="text-[#00CD58]">Demand.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed">
                        A detailed breakdown of architectures we designed, developed, and deployed to production.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-28">
                    {projects.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-8 md:p-12 rounded-3xl bg-[#141417] border border-white/10 hover:border-[#00CD58]/40 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-[10px] font-mono tracking-widest text-[#00CD58] uppercase block mb-4">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t, ti) => (
                                        <span key={ti} className="text-[9px] font-bold uppercase tracking-wider text-white/60 bg-white/[0.04] px-2.5 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs font-mono text-[#71717a]">
                                    {item.lead}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.24em] transition-all hover:bg-[#00e362]"
                    >
                        <span>Initiate Your Mission</span>
                        <span className="text-base">↗</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
