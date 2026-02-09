'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
// Using mailto link instead of server-side email

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString() ?? '';
        const company = formData.get('company')?.toString() ?? '';
        const email = formData.get('email')?.toString() ?? '';
        const details = formData.get('projectDetails')?.toString() ?? '';

        const subject = `OrbitThink: Project Inquiry from ${name || email}`;
        const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProject Details:\n${details}`;

        const mailto = `mailto:orbitthink007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
            setStatus('loading');
            // Open user's default mail client with prefilled fields
            window.location.href = mailto;
            setStatus('success');
            setMessage('Opened your mail client. Please review and send the email.');
            form.reset();

            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (err) {
            setStatus('error');
            setMessage('Unable to open mail client. Please email orbitthink007@gmail.com directly.');
        }
    };

    return (
        <motion.form
            className="bg-white border border-gray-100 p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-emerald-500/5 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onSubmit={onSubmit}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-bl-[4rem] -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 opacity-60 px-2">Your Name</label>
                    <input type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full px-8 py-5 bg-gray-50 border border-transparent rounded-2xl text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 transition-all outline-none font-medium placeholder:text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 opacity-60 px-2">Company Name</label>
                    <input type="text"
                        name="company"
                        placeholder="OrbitThink"
                        className="w-full px-8 py-5 bg-gray-50 border border-transparent rounded-2xl text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 transition-all outline-none font-medium placeholder:text-gray-300"
                    />
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 opacity-60 px-2">Email Address</label>
                <input type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-8 py-5 bg-gray-50 border border-transparent rounded-2xl text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 transition-all outline-none font-medium placeholder:text-gray-300"
                />
            </div>

            <div className="mb-10">
                <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] mb-4 opacity-60 px-2">Project Vision</label>
                <textarea rows={5}
                    name="projectDetails"
                    placeholder="Tell us about your mission..."
                    required
                    className="w-full px-8 py-5 bg-gray-50 border border-transparent rounded-2xl text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 transition-all outline-none resize-none font-medium placeholder:text-gray-300"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-primary w-full py-6 text-[13px] font-black tracking-[0.2em] uppercase shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-500"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'IGNITING...' : 'LAUNCH PROJECT'}
            </button>

            {message && (
                <div className={`mt-6 p-4 rounded-xl text-center font-bold border ${status === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                    : 'bg-red-50 border-red-200 text-red-600'
                    }`}>
                    {message}
                </div>
            )}
        </motion.form>
    );
}
