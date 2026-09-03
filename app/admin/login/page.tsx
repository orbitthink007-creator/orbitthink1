'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                const data = await res.json();
                setError(data.error || 'Authentication rejected. Check credentials.');
            }
        } catch (err) {
            setError('An error occurred during verification.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#09090b] text-white px-4 py-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#00CD58]/[0.05] blur-[160px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md p-8 md:p-10 rounded-3xl bg-[#141417] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/orbitthink-logo-white.svg"
                            alt="OrbitThink Logo"
                            width={160}
                            height={36}
                            className="h-8 w-auto"
                        />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#00CD58] block mb-1">
                        ORBITCONTROL ACCESS
                    </span>
                    <h1 className="text-2xl font-black uppercase tracking-tight text-white">
                        Mission Command Login
                    </h1>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-3.5 rounded-2xl mb-6 text-xs font-mono text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#a1a1aa] mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-[#00CD58] outline-none transition-colors"
                            placeholder="admin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#a1a1aa] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-[#00CD58] outline-none transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.22em] transition-all hover:bg-[#00e362] hover:shadow-[0_0_30px_rgba(0,205,88,0.4)] disabled:opacity-50"
                    >
                        {submitting ? 'Verifying...' : 'Authenticate Session ↗'}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <Link href="/" className="text-xs font-mono text-[#71717a] hover:text-[#00CD58] transition-colors">
                        ← Back to OrbitThink live site
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
