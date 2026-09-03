'use client';

import { motion } from 'framer-motion';

export default function Philosophy({ content }: { content?: any }) {
    const defaultData = {
        badge: "PHILOSOPHY & VISION",
        subtitle: "THE LAWS OF GRAVITY DO NOT APPLY TO CODE",
        text: "We believe modern digital systems must be agile, audacious, and bulletproof. By unifying deep learning intelligence with high-performance gaming mechanics and scalable cloud backends, we turn ambitious concepts into unstoppable digital engines.",
        stats: [
            { value: "100+", label: "Projects Deployed" },
            { value: "99.9%", label: "System Precision" },
            { value: "4X", label: "Delivery Velocity" },
            { value: "24/7", label: "Mission Readiness" }
        ]
    };

    const data = content || defaultData;
    const stats = data.stats?.length ? data.stats : defaultData.stats;

    return (
        <section id="philosophy" className="py-28 md:py-40 px-6 md:px-14 bg-[#0d0d0f] border-b border-white/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
                    <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58]">
                        <span className="w-6 h-px bg-[#00CD58]" />
                        {data.badge || "PHILOSOPHY & VISION"}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#71717a]">
                        {data.subtitle || "THE LAWS OF GRAVITY DO NOT APPLY TO CODE"}
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-[clamp(28px,4.5vw,62px)] font-black leading-[1.12] tracking-[-0.03em] text-white/40">
                        {data.text || defaultData.text}
                    </p>
                </motion.div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10">
                    {stats.map((item: any, idx: number) => (
                        <div key={idx}>
                            <div className="text-3xl md:text-5xl font-black text-white tracking-tight">
                                {item.value}
                            </div>
                            <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#71717a] mt-2">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
