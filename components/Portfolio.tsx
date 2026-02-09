'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Portfolio({ content }: { content: any }) {
    const portfolioContent = content || { tag: "Mission Logs", title: "Mission Logs", subtitle: "...", viewProjectLabel: "View Mission", projects: [] };

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[10px] font-black mb-6 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        {portfolioContent.tag}
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-extrabold mb-6"
                    >
                        Our <span className="text-[var(--accent-primary)]">Mission</span> Logs
                    </motion.h2>
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl font-medium leading-relaxed">
                        {portfolioContent.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioContent.projects && portfolioContent.projects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-100 relative overflow-hidden group rounded-[3.5rem] p-14 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center gap-6 mb-10 w-full">
                                <span className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 mb-2">{project.icon}</span>
                                <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/5">
                                    {project.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-extrabold mb-6 tracking-tight">{project.title}</h3>
                            <p className="text-[var(--text-secondary)] mb-10 line-clamp-3 leading-relaxed font-medium opacity-80">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-8 border-t border-gray-50 w-full flex justify-center">
                                <Link href="/portfolio" className="text-[12px] font-black tracking-[0.2em] uppercase transition-all hover:gap-4 flex items-center gap-2 text-[var(--accent-primary)]">
                                    {portfolioContent.viewProjectLabel} <span className="text-xl">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
