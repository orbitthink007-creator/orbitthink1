'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Subscribe() {
    return (
        <section className="py-24 bg-[var(--accent-primary)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="container px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                            At OrbitThink, We Are Committed To Businesses
                        </h2>
                        <p className="text-emerald-50 text-xl md:text-2xl font-medium max-w-3xl leading-relaxed opacity-90 mx-auto">
                            Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our specialists.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link href="/contact" className="bg-white text-[var(--accent-primary)] px-10 py-5 rounded-2xl font-extrabold uppercase tracking-widest text-sm hover:bg-emerald-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            Request a Consultation <span className="text-xl">→</span>
                        </Link>
                        <Link href="/services" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-extrabold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center transform hover:-translate-y-1">
                            Explore Solution
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
