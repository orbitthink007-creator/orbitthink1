'use client';

import { motion } from 'framer-motion';

export default function Process({ content }: { content?: any }) {
    const defaultSteps = [
        {
            number: "01",
            title: "Architecture & Ignition",
            description: "Deep audit of data workflows, technical risks, and architectural constraints to blueprint scalable systems."
        },
        {
            number: "02",
            title: "Neural & Core Engineering",
            description: "Agile, milestone-driven development of custom models, frontend UI pipelines, and low-latency servers."
        },
        {
            number: "03",
            title: "Velocity & Deployment",
            description: "CI/CD automated rollout, penetration testing, performance benchmarking, and global edge acceleration."
        }
    ];

    const steps = content?.steps || defaultSteps;

    return (
        <section id="process" className="py-28 md:py-40 px-6 md:px-14 bg-[#09090b] text-white border-b border-white/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <div>
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            METHODOLOGY & EXECUTION
                        </span>
                        <h2 className="text-[clamp(36px,5.5vw,78px)] font-black tracking-[-0.04em] leading-[0.92] uppercase">
                            Mission <span className="text-[#00CD58]">Trajectory.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm md:text-base text-[#a1a1aa] font-light leading-relaxed">
                        A rigorous 3-stage delivery framework engineered to eliminate technical debt and guarantee velocity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="p-8 md:p-10 rounded-3xl bg-[#111113] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
                        >
                            <div>
                                <span className="text-3xl md:text-4xl font-mono font-black text-[#00CD58] block mb-8">
                                    {step.number || `0${index + 1}`}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[#a1a1aa] font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 text-[10px] font-mono tracking-widest text-[#71717a] uppercase">
                                Stage // 0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
