'use client';

import { motion } from 'framer-motion';

export default function AboutSection({ content }: { content?: any }) {
    const capabilities = [
        {
            title: "Enterprise AI & Cloud MLOps",
            desc: "Full-cycle neural networks, RAG pipelines, and model quantization tailored for low latency on edge or cluster.",
            tag: "MACHINE INTELLIGENCE"
        },
        {
            title: "Real-time 3D & Spatial Engines",
            desc: "Unity-native simulations, WebGL shaders, and high-fidelity virtual environments engineered for immersion.",
            tag: "SPATIAL COMPUTING"
        },
        {
            title: "Fault-Tolerant Web Platforms",
            desc: "Next.js applications, micro-frontends, serverless APIs, and distributed databases architected for zero downtime.",
            tag: "WEB ARCHITECTURE"
        },
        {
            title: "Native & Mobile Systems",
            desc: "Cross-platform mobile apps with Flutter and swift/kotlin bridges for seamless hardware integration.",
            tag: "MOBILE SYSTEMS"
        }
    ];

    return (
        <section id="about" className="py-28 md:py-40 px-6 md:px-14 bg-[#0d0d0f] text-white border-b border-white/10 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            WHO WE ARE
                        </span>
                        <h2 className="text-[clamp(36px,5vw,68px)] font-black tracking-[-0.04em] leading-[0.92] uppercase mb-8">
                            Engineered For <span className="text-[#00CD58]">Scale.</span>
                        </h2>
                        <p className="text-base text-[#a1a1aa] font-light leading-relaxed mb-6">
                            OrbitThink is an independent engineering studio founded to build the next generation of software products. We don't do boilerplate templates or slow agency layers.
                        </p>
                        <p className="text-base text-[#a1a1aa] font-light leading-relaxed mb-8">
                            Every system we release is bespoke, resilient, and optimized to give our clients an unfair competitive advantage.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-[#141417] border border-white/10 hover:border-[#00CD58]/30 transition-all duration-300"
                            >
                                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#00CD58] block mb-4">
                                    {cap.tag}
                                </span>
                                <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                                    {cap.title}
                                </h3>
                                <p className="text-xs md:text-sm text-[#a1a1aa] font-light leading-relaxed">
                                    {cap.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
