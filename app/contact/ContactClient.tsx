'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactClient({ content }: { content?: any }) {
    return (
        <div className="bg-[#09090b] text-white min-h-screen pt-36 pb-28 px-6 md:px-14">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <span className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] mb-4">
                            <span className="w-6 h-px bg-[#00CD58]" />
                            INITIATE CONTACT
                        </span>
                        <h1 className="text-[clamp(44px,6.5vw,84px)] font-black tracking-[-0.04em] leading-[0.92] uppercase mb-8">
                            Let's Build <br />
                            <span className="text-[#00CD58]">Your Engine.</span>
                        </h1>
                        <p className="text-base text-[#a1a1aa] font-light leading-relaxed mb-8">
                            Whether you need a full-scale AI agent system, an Oculus VR prototype, or a high-throughput Next.js application, our technical leads are ready to architect your solution.
                        </p>

                        <div className="p-8 rounded-3xl bg-[#141417] border border-white/10 flex flex-col gap-4">
                            <div>
                                <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block mb-1">DIRECT INQUIRIES</span>
                                <a href="mailto:contact@orbitthink.com" className="text-sm font-mono text-[#00CD58] hover:underline">
                                    contact@orbitthink.com
                                </a>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-[#71717a] block mb-1">WHATSAPP LINE</span>
                                <a href="https://wa.me/923394054520" className="text-sm font-mono text-white/90 hover:text-[#00CD58]">
                                    +92 339 4054520
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
