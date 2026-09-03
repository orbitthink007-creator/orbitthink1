'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [selectedService, setSelectedService] = useState('Enterprise AI & ML');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const services = [
        "Enterprise AI & ML",
        "Immersive VR / 3D",
        "Next.js Web System",
        "Mobile App (Flutter)"
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';

        const subject = `OrbitThink Mission Inquiry: ${selectedService} from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nFocus: ${selectedService}\n\nProject Scope:\n${message}`;

        window.location.href = `mailto:orbitthink007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('success');
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-[#141417] border border-white/10 flex flex-col gap-6">
            {/* Service Pills */}
            <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#71717a] mb-3">
                    Select Scope Focus
                </label>
                <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                        <button
                            type="button"
                            key={svc}
                            onClick={() => setSelectedService(svc)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                                selectedService === svc
                                    ? 'bg-[#00CD58] text-[#0a0a0a]'
                                    : 'bg-white/[0.04] text-[#a1a1aa] hover:text-white border border-white/10'
                            }`}
                        >
                            {svc}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#71717a] mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Elon Musk"
                        className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#00CD58] outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#71717a] mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="elon@x.com"
                        className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#00CD58] outline-none transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#71717a] mb-2">
                    Project Vision & Objectives
                </label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe what you want to engineer..."
                    className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#00CD58] outline-none transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.24em] transition-all duration-300 hover:bg-[#00e362] hover:shadow-[0_0_30px_rgba(0,205,88,0.4)]"
            >
                Transmit Brief ↗
            </button>

            {status === 'success' && (
                <div className="text-center text-xs font-bold text-[#00CD58] p-3 rounded-xl bg-[#00CD58]/10 border border-[#00CD58]/20">
                    Directing to email client with prefilled project specs.
                </div>
            )}
        </form>
    );
}
