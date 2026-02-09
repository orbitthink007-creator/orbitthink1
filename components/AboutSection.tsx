'use client';

import { motion } from 'framer-motion';

export default function AboutSection({ content }: { content: any }) {
    // defaults
    const defaultStats = [
        { value: "100+", label: "Models Deployed", color: "var(--accent-cyan)" },
        { value: "99.9%", label: "Model Accuracy", color: "var(--accent-purple)" },
        { value: "24/7", label: "Neural Uptime", color: "var(--accent-pink)" }
    ];

    const defaultContent = {
        tag: "Our Mission",
        title: "The Gravity of Innovation",
        missionText: "At OrbitThink, we believe AI is the architecture of the future. We are a collective of data scientists, ML engineers, and visionaries dedicated to pushing the boundaries of what machine intelligence can achieve.",
        stats: defaultStats
    };

    // Safely extract values with fallbacks
    // If 'content' is provided (from DB), use it, otherwise use defaults.
    // If 'content' is provided but specific fields like 'stats' are missing (old DB record), fallback to defaultStats.
    const displayTag = content?.tag || defaultContent.tag;
    const displayTitle = content?.missionTitle || content?.title || defaultContent.title; // map missionTitle or title or default
    const displayText = content?.missionText || defaultContent.missionText;
    const stats = (content?.stats && content.stats.length > 0) ? content.stats : defaultContent.stats;

    // console.log('stats', stats);
    // console.log('sectionContent', sectionContent); 
    // console.log('content', content);

    return (
        <section id="about" className="section bg-[var(--bg-void)] relative overflow-hidden py-32">
            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container relative z-10">
                <motion.div
                    className="bg-white border border-gray-100 rounded-[5rem] p-16 md:p-32 text-center max-w-7xl mx-auto shadow-2xl shadow-emerald-500/5 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"></div>

                    <span className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-10 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        {displayTag}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-10 leading-[0.9] tracking-tighter">
                        {displayTitle}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl mx-auto font-medium opacity-90">
                        {displayText}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-gray-100">
                        {stats.map((stat: any, index: number) => (
                            <div key={index} className="group">
                                <h4 className="text-5xl md:text-6xl font-black mb-3 text-[var(--text-primary)] tracking-tighter group-hover:text-[var(--accent-primary)] transition-colors duration-500">{stat.value}</h4>
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60 group-hover:opacity-100 transition-opacity duration-500">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
