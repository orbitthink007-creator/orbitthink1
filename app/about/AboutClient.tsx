'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutClient({ content }: { content: any }) {
    // Fallback if content is missing (e.g. initial load or error)
    const about = content?.about || {
        tag: "Who We Are",
        title: "Innovative Solutions",
        titleAccent: "For Your Business",
        missionTitle: "Our Mission",
        missionText: "Loading...",
        teamTitle: "Our Capabilities",
        team: [],
        cta: "Ready to Transform Your Ideas?",
        ctaText: "Let's discuss how we can help your business grow"
    };

    return (
        <div className="bg-[var(--bg-void)]">
            <section className="relative min-h-[60vh] flex items-center pt-48 pb-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 rounded-full blur-[120px] -z-10 translate-y-[-50%]"></div>
                <div className="container relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-10 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]"
                    >
                        {about.tag}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-extrabold mb-10 text-[var(--text-primary)] tracking-tighter leading-[0.8]"
                    >
                        {about.title}<span className="text-[var(--accent-primary)] block mt-4">{about.titleAccent}</span>
                    </motion.h1>
                </div>
            </section>

            <section className="section py-32 bg-gray-50/30">
                <div className="container px-6 md:px-8">
                    <motion.div
                        className="bg-white border border-gray-100 rounded-[4rem] p-16 md:p-32 shadow-2xl shadow-emerald-500/5 text-center max-w-6xl mx-auto relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[var(--accent-primary)]"></div>
                        <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-12">{about.missionTitle}</h2>
                        <p className="text-2xl md:text-3xl text-[var(--text-secondary)] leading-tight font-extrabold tracking-tight">
                            "{about.missionText}"
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section py-40">
                <div className="container px-6 md:px-8">
                    <div className="text-center mb-24">
                        <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[var(--accent-secondary)] opacity-30 mb-6 block">CAPABILITIES</span>
                        <motion.h2
                            className="text-5xl md:text-6xl font-black tracking-tighter"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {about.teamTitle}
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {about.team.map((member: any, index: number) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-100 p-12 rounded-[3.5rem] text-center hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="w-24 h-24 bg-gray-50 rounded-3xl mx-auto mb-10 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 group-hover:bg-[var(--accent-primary)]/10 group-hover:rotate-6 transition-all duration-500">
                                    {member.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-6 text-[var(--text-primary)] tracking-tight">{member.role}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed font-medium opacity-80">{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section pb-48">
                <div className="container px-6 md:px-8">
                    <motion.div
                        className="bg-[var(--accent-secondary)] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">{about.cta}</h2>
                            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
                                {about.ctaText}
                            </p>
                            <Link href="/contact" className="btn btn-primary !px-16 !py-6 !text-[14px] !tracking-[0.2em] !font-black !rounded-2xl shadow-2xl shadow-emerald-500/40 transform hover:scale-105 transition-all">
                                START YOUR PROJECT &mdash; NOW
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
