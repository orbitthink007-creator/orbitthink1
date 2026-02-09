'use client';

import { motion } from 'framer-motion';
import { Sparkles, Globe, Cpu, Gamepad2, Smartphone, Bot } from 'lucide-react';
import Link from 'next/link';

// Helper to map icon names to Lucide components if needed, or just render the component logic inside
const IconMap: any = {
    'gamepad': Gamepad2,
    'smartphone': Smartphone,
    'globe': Globe,
    'bot': Bot
};

export default function Services({ content }: { content: any }) {
    const servicesContent = content || { tag: "Services", list: [], exploreLabel: "Explore" };

    return (
        <section id="services" className="section bg-[var(--bg-deep)]">
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[10px] font-black mb-6 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        {servicesContent.tag}
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-extrabold mb-6"
                    >
                        Engineering The <span className="text-[var(--accent-primary)]">Future</span>
                    </motion.h2>
                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-xl font-medium leading-relaxed">
                        {servicesContent.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesContent.list && servicesContent.list.map((service: any, index: number) => {
                        const IconComponent = IconMap[service.iconName] || Globe;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-100 p-14 rounded-[3.5rem] group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 relative overflow-hidden flex flex-col justify-between items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[var(--accent-primary)]/10 transition-all duration-500"></div>
                                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 bg-gray-50 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all duration-500 relative z-10 shadow-sm mx-auto">
                                    <IconComponent className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-extrabold mb-6 relative z-10 tracking-tight">{service.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed relative z-10 font-medium opacity-80 mb-6">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link href="/services" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:opacity-80 transition-opacity font-bold uppercase tracking-widest text-sm">
                        {servicesContent.exploreLabel} <Sparkles className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
