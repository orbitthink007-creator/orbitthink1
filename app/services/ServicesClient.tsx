'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesClient({ content }: { content?: any }) {
    const services = [
        {
            num: "01",
            title: "Enterprise AI & LLM Systems",
            tagline: "Autonomous Agentic Pipelines & Computer Vision",
            desc: "Custom LLMs, retrieval-augmented generation (RAG) agents, and real-time OpenCV edge surveillance engineered with low inference overhead.",
            deliverables: ["Custom LLM fine-tuning", "RAG Vector Architecture", "Edge Computer Vision", "MLOps Cloud Infrastructure"]
        },
        {
            num: "02",
            title: "Spatial & Immersive 3D Systems",
            tagline: "High-Performance Unity & Oculus VR Experiences",
            desc: "Physics-driven simulation systems, multiplayer netcode via Photon and Nakama, and interactive 3D visualizations built for speed.",
            deliverables: ["Oculus SDK & VR Simulators", "Unity 2D/3D Game Engines", "Nakama/Photon Multiplayer Servers", "Custom Shaders & WebGL"]
        },
        {
            num: "03",
            title: "Scalable Web Platforms",
            tagline: "Mission-Critical Next.js & Distributed Backends",
            desc: "Ultra-fast Next.js architectures, HIPAA-compliant patient monitoring solutions, and enterprise software systems designed to scale gracefully.",
            deliverables: ["Next.js 14 Server-Driven UI", "HIPAA Compliant Architecture", "Distributed Node.js Microservices", "High-Volume E-Commerce"]
        },
        {
            num: "04",
            title: "Mobile App Innovation",
            tagline: "Native Performance with Cross-Platform Flutter",
            desc: "Bespoke iOS and Android mobile products with complex hardware integrations, background geofencing, and sub-60fps fluid interfaces.",
            deliverables: ["Flutter & Dart Production", "Hardware & BLE Integrations", "Real-Time Geo-Tracking", "Offline Sync & Secure Storage"]
        }
    ];

    return (
        <div className="bg-[#09090b] text-white min-h-screen pt-36 pb-28 px-6 md:px-14">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-4xl mb-24">
                    <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                        <span className="w-6 h-px bg-[#00CD58]" />
                        CAPABILITIES & SCOPE
                    </span>
                    <h1 className="text-[clamp(44px,7vw,98px)] font-black tracking-[-0.04em] leading-[0.92] uppercase mb-8">
                        Comprehensive <br />
                        <span className="text-[#00CD58]">Engineering Suite.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed">
                        We operate as your specialized innovation lab. Every capability is handled by domain leads with deep production credentials.
                    </p>
                </div>

                <div className="flex flex-col gap-12 mb-28">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 md:p-14 rounded-3xl bg-[#141417] border border-white/10 hover:border-[#00CD58]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8">
                                <div>
                                    <span className="text-xl font-mono font-bold text-[#00CD58] block mb-4">{svc.num}</span>
                                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">{svc.title}</h2>
                                    <div className="text-xs font-mono uppercase tracking-widest text-[#71717a] mb-6">{svc.tagline}</div>
                                    <p className="text-base text-[#a1a1aa] font-light leading-relaxed max-w-2xl">{svc.desc}</p>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#09090b] border border-white/10 lg:w-80 shrink-0">
                                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#00CD58] mb-4">DELIVERABLES</div>
                                    <ul className="flex flex-col gap-2.5 text-xs text-white/80">
                                        {svc.deliverables.map((d, di) => (
                                            <li key={di} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#00CD58]" />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                        <span>Discuss Your System Architecture</span>
                        <span className="text-base">↗</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
