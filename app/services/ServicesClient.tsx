'use client';

import { motion } from 'framer-motion';

export default function ServicesClient({ content }: { content: any }) {
    // Fallback
    const servicesPage = content?.servicesPage || {
        intro: { title: "Anti-Gravity", titleAccent: "Expertise", description: "Loading..." },
        sections: []
    };

    return (
        <div className="bg-[var(--bg-void)]">
            <section className="relative min-h-[50vh] flex items-center pt-48 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-emerald-500/5 rounded-full blur-[120px] -z-10 translate-x-[30%]"></div>
                <div className="container relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-10 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]"
                    >
                        OUR COLLECTIVE FORCE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-extrabold mb-10 text-[var(--text-primary)] tracking-tighter leading-[0.8]"
                    >
                        {servicesPage.intro.title}<span className="text-[var(--accent-primary)] block mt-4">{servicesPage.intro.titleAccent}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-medium opacity-80"
                    >
                        {servicesPage.intro.description}
                    </motion.p>
                </div>
            </section>

            <section className="section py-32">
                <div className="container px-6 md:px-8">
                    {servicesPage.sections.map((section: any, index: number) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row gap-20 items-center mb-40 last:mb-0`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className={`w-full md:w-1/2 rounded-[4rem] overflow-hidden bg-white border border-gray-100 aspect-square flex items-center justify-center relative group shadow-2xl shadow-emerald-500/5 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white -z-10 transition-colors duration-700"></div>
                                <div className="text-[10rem] transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 group-hover:rotate-6">{section.icon}</div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[var(--text-primary)] tracking-tighter">{section.title}</h2>
                                <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed font-medium opacity-90">
                                    {section.description}
                                </p>
                                <ul className="space-y-5 mb-12">
                                    {section.list.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-4 text-[var(--text-secondary)] font-bold text-sm uppercase tracking-widest opacity-80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] ring-4 ring-emerald-500/10"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary !px-12 !py-5 !text-[12px] !font-black !tracking-widest !rounded-2xl shadow-xl shadow-emerald-500/20">EXPLORE PROJECT</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
