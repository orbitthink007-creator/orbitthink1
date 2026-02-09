'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: "OrbitThink transformed our data infrastructure. Their GenAI models automated 60% of our workflow within weeks.",
        name: "Kelly Williamson",
        role: "Client",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
    },
    {
        quote: "The machine learning insights provided were game-changing. We predicted market trends with 95% accuracy.",
        name: "Marcus Chen",
        role: "Director",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "Exceptional quality and speed. Their team understands the nuance of deep learning applications like no other.",
        name: "Sarah Jenkins",
        role: "VP of Engineering",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section py-32 bg-gray-50/50">
            <div className="container px-6 md:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[10px] font-black mb-6 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tighter mb-4">
                        Discover What Our Clients Have
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tighter">
                        To Say About Us
                    </h2>
                </div>

                <motion.div
                    className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl shadow-gray-200/50 relative overflow-hidden max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                            <h3 className="text-3xl font-extrabold mb-8 text-[var(--text-primary)] text-center md:text-left">What Our Clients Are Saying</h3>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center md:items-start"
                            >
                                <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed mb-12 font-medium opacity-80 text-center md:text-left">
                                    "{testimonials[activeIndex].quote}"
                                </p>

                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-16 h-16 rounded-full overflow-hidden md:hidden">
                                        <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-xl font-bold text-[var(--text-primary)]">{testimonials[activeIndex].name}</h4>
                                        <span className="text-sm font-bold text-[var(--text-secondary)] opacity-60">{testimonials[activeIndex].role}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="flex gap-4 mt-12 md:mt-20">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 h-[500px] hidden md:block relative">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl shadow-emerald-500/10"
                            >
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </motion.div>

                            {/* Decorative background circle */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
