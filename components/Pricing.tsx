'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "Basic Plan",
            price: "$9.9",
            period: "/month",
            description: "Ideal for startups and small businesses looking to get started essential IT services.",
            features: ["Network Monitoring", "Helpdesk Support (Limited Hours)", "Basic Cybersecurity Protection"],
            highlight: false
        },
        {
            name: "Standard Plan",
            price: "$19.9",
            period: "/month",
            description: "Perfect for growing businesses that require additional features and support.",
            features: ["24/7 Network Monitoring", "Dedicated Helpdesk Support", "Advance Cybersecurity Protection", "Cloud Backup & Recovery"],
            highlight: true,
            tag: "Most Popular"
        },
        {
            name: "Premium Plan",
            price: "$9.9",
            period: "/month",
            description: "Tailored for larger enterprises with complex IT needs and stringent security.",
            features: ["Customised Network Monitoring", "Priority Helpdesk Support", "Comprehensive Cybersecurity Suite", "Disaster Recovery Planning & Testing", "Onsite Support (as needed)"],
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="section py-32 bg-white relative overflow-hidden">
            <div className="container px-6 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[10px] font-black mb-6 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        Our Pricing Plan
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter"
                    >
                        Explore Our Flexible <span className="text-[var(--accent-primary)]">Pricing Plans</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${plan.highlight
                                ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white shadow-2xl shadow-emerald-500/30 scale-105 z-10'
                                : 'bg-gray-50 border-gray-100 text-[var(--text-primary)] hover:shadow-xl hover:shadow-emerald-500/5'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 left-0 -mt-5 flex justify-center">
                                    <span className="bg-white text-[var(--accent-primary)] text-xs font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-widest border border-gray-100">
                                        {plan.tag}
                                    </span>
                                </div>
                            )}

                            <h3 className={`text-2xl font-bold mb-4 text-center ${plan.highlight ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                {plan.name}
                            </h3>
                            <div className="flex items-end justify-center mb-8">
                                <span className={`text-7xl font-black ${plan.highlight ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm font-medium mb-3 ml-2 ${plan.highlight ? 'text-emerald-100' : 'text-gray-400'}`}>
                                    {plan.period}
                                </span>
                            </div>
                            <p className={`text-base mb-10 leading-relaxed text-center ${plan.highlight ? 'text-emerald-50' : 'text-[var(--text-secondary)]'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-10 flex-grow">
                                <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 text-center ${plan.highlight ? 'text-emerald-200' : 'text-[var(--text-secondary)]'}`}>
                                    Featured Included:
                                </h4>
                                <ul className="space-y-4 max-w-xs mx-auto">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-left">
                                            <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-white text-[var(--accent-primary)]' : 'bg-[var(--accent-primary)] text-white'
                                                }`}>
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                            </div>
                                            <span className={`text-sm font-medium ${plan.highlight ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${plan.highlight
                                ? 'bg-white text-[var(--accent-primary)] hover:bg-emerald-50'
                                : 'bg-[var(--accent-primary)] text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                                }`}>
                                Buy Now →
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
