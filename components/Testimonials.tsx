'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials({ content }: { content?: any }) {
    const defaultQuotes = [
        {
            text: "OrbitThink transformed our healthcare operational workflows. Their team deployed an end-to-end HIPAA platform in record time with zero architectural flaws.",
            author: "Dr. K. Williamson",
            role: "Chief Technology Officer, MediCore Systems"
        },
        {
            text: "The computer vision surveillance system they engineered for our facility reduced incident detection latency from minutes to milliseconds.",
            author: "Marcus Chen",
            role: "Director of Operations, Vantage Security"
        },
        {
            text: "Their deep knowledge of Unity multiplayer networking and spatial engines is unmatched. They delivered our Oculus combat prototype ahead of schedule.",
            author: "Sarah Jenkins",
            role: "VP of Product, Horizon Game Labs"
        }
    ];

    const quotes = content?.list?.length ? content.list.map((item: any) => ({
        text: item.quote || item.text || item.content || item.description,
        author: item.name || item.author || "Client",
        role: item.role || item.title || "Partner"
    })) : defaultQuotes;

    const [current, setCurrent] = useState(0);

    return (
        <section className="py-28 md:py-36 px-6 md:px-14 bg-[#09090b] text-white border-b border-white/10 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                    <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58]">
                        <span className="w-6 h-px bg-[#00CD58]" />
                        {content?.tag || "CLIENT VOICES"}
                    </span>
                    <div className="flex gap-2">
                        {quotes.map((_: any, i: number) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                                    current === i ? "bg-[#00CD58] w-12" : "bg-white/20 hover:bg-white/40"
                                }`}
                                aria-label={`View testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="min-h-[200px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white mb-10">
                                "{quotes[current]?.text}"
                            </p>
                            <div>
                                <div className="text-base font-black text-[#00CD58]">{quotes[current]?.author}</div>
                                <div className="text-xs font-mono uppercase tracking-wider text-[#71717a] mt-1">{quotes[current]?.role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
