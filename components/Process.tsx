'use client';

import { motion } from 'framer-motion';

export default function Process({ content }: { content: any }) {
    // Fallback content
    const processContent = content || {
        title: "Mission Trajectory",
        steps: [
            {
                number: "01",
                title: "Ignition",
                description: "We analyze your data landscape and identify high-impact AI opportunities.",
                color: "var(--accent-cyan)",
                shadow: "rgba(0, 243, 255, 0.3)"
            },
            {
                number: "02",
                title: "Orbit",
                description: "Our engineers build and train custom models tailored to your specific parameters.",
                color: "var(--accent-purple)",
                shadow: "rgba(188, 19, 254, 0.3)"
            },
            {
                number: "03",
                title: "Velocity",
                description: "Deploy, monitor, and scale. We ensure your AI solution reaches escape velocity.",
                color: "var(--accent-pink)",
                shadow: "rgba(255, 0, 85, 0.3)"
            }
        ]
    };

    return (
        <section id="process" className="section relative bg-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--accent-primary) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-[10px] font-black mb-6 bg-[var(--accent-primary)]/5 uppercase tracking-[0.2em]">
                        HOW WE WORK
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-extrabold mb-6"
                    >
                        Mission <span className="text-[var(--accent-primary)]">Trajectory</span>
                    </motion.h2>
                </div>
                <div className="process-container">
                    {processContent.steps && processContent.steps.map((step: any, index: number) => (
                        <div key={index} style={{ display: 'contents' }}>
                            <motion.div
                                className="process-step !max-w-xs"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="w-24 h-24 rounded-[2rem] border-2 border-[var(--accent-primary)] flex items-center justify-center mx-auto mb-8 bg-white shadow-xl shadow-emerald-500/10 group rotate-45 transform hover:rotate-0 transition-transform duration-500">
                                    <span className="text-3xl font-black text-[var(--accent-primary)] -rotate-45 group-hover:rotate-0 transition-transform duration-500">{step.number}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold mb-4 text-[var(--text-primary)] tracking-tight">{step.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed font-medium opacity-80">{step.description}</p>
                            </motion.div>

                            {/* Connector (don't show after last item) */}
                            {index < processContent.steps.length - 1 && (
                                <div className="step-connector !bg-emerald-500/20"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
