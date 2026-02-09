'use client';

import { motion } from 'framer-motion';

export default function Hero({ content }: { content: any }) {
    // Fallback
    const heroContent = content || {
        tag: "Defying The Laws of Software",
        title: "Orbit",
        titleAccent: "Think",
        description: "We help startups turn ideas into scalable web & mobile products — fast.",
        cta: "Book Free Strategy Call",
        ctaId: "services",
        number: "+923394054520"
    };
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-8 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        {heroContent.tag}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] mb-8 text-[var(--text-primary)] tracking-tighter">
                        {heroContent.title}<span className="text-[var(--accent-primary)] block">{heroContent.titleAccent}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-lg leading-relaxed font-medium">
                        {heroContent.description}
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <a href={`https://wa.me/${heroContent.number ? heroContent.number : "+923394054520"}`} className="btn btn-primary !px-10 !py-4 !text-[13px] !tracking-widest">
                            {heroContent.cta}
                        </a>
                        <a href="#services" className="btn btn-ghost !px-10 !py-4 !text-[13px] !tracking-widest !border-gray-200">
                            LEARN MORE
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative z-10 hero-image-mask overflow-hidden aspect-[4/5] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                        <img
                            src="/images/hero-bg.png"
                            alt="Innovate"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-secondary)]/20 to-transparent"></div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--accent-primary)]/10 rounded-full -z-10 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--accent-primary)]/5 rounded-full -z-10 blur-3xl"></div>
                </motion.div>
            </div>

            {/* Smooth Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] bg-emerald-100/40 rounded-full blur-[100px]"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[20%] -left-[20%] w-[60vw] h-[60vw] bg-blue-50/50 rounded-full blur-[120px]"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-0 right-0 w-full h-[50vh] bg-gradient-to-t from-emerald-50/30 to-transparent"
                ></motion.div>
            </div>
        </section>
    );
}
