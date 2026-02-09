'use client';

import { motion } from 'framer-motion';

export default function PortfolioClient({ content }: { content: any }) {
    const portfolio = content?.portfolio || { title: "Values", subtitle: "...", allProjects: [] };

    return (
        <div className="bg-[var(--bg-void)]">
            <section className="relative min-h-[50vh] flex items-center pt-48 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 rounded-full blur-[120px] -z-10 translate-y-[-50%]"></div>
                <div className="container relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-10 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]"
                    >
                        OUR MISSION LOGS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-extrabold mb-10 text-[var(--text-primary)] tracking-tighter leading-[0.8]"
                    >
                        Proving The <span className="text-[var(--accent-primary)] block mt-4">Impossible</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-medium opacity-80"
                    >
                        {portfolio.subtitle}
                    </motion.p>
                </div>
            </section>

            <section className="section pb-32">
                <div className="container px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {portfolio.allProjects && portfolio.allProjects.map((project: any, index: number) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-100 p-12 rounded-[3.5rem] group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col relative overflow-hidden"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="mb-8">
                                    <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest text-[var(--accent-primary)] border border-[var(--accent-primary)] bg-[var(--accent-primary)]/5">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6 text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors duration-500">{project.title}</h3>
                                <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed font-medium opacity-80">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5 mb-10">
                                    {project.tech && project.tech.map((t: string, i: number) => (
                                        <span key={i} className="text-[10px] font-black bg-gray-50 text-gray-400 px-4 py-2 rounded-xl border border-gray-100 uppercase tracking-tight group-hover:border-emerald-500/10 group-hover:bg-emerald-500/5 transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-50">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-1">Lead Architect</span>
                                            <span className="text-sm font-extrabold text-[var(--text-primary)]">{project.lead}</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                                            <span className="text-xl">↗</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
