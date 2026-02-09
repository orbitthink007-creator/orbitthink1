'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function ContactClient({ content }: { content: any }) {
    const contactPage = content?.contactPage || { tag: "Get In Touch", title: "Start Your", titleAccent: "Transformation" };

    return (
        <div className="bg-[var(--bg-void)]">
            <section className="relative min-h-[50vh] flex items-center pt-48 pb-20 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 rounded-full blur-[120px] -z-10 shadow-2xl shadow-emerald-500/10"></div>
                <div className="container relative z-10 text-center max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-5 py-2 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[11px] font-black mb-10 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]"
                    >
                        {contactPage.tag}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-extrabold mb-10 text-[var(--text-primary)] tracking-tighter leading-[0.8]"
                    >
                        {contactPage.title}<span className="text-[var(--accent-primary)] block mt-4">{contactPage.titleAccent}</span>
                    </motion.h1>
                </div>
            </section>

            <section className="section pb-48">
                <div className="container px-6 md:px-8 max-w-5xl">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
