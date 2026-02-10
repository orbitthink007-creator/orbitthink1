'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

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
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[var(--bg-void)] px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card w-full max-w-md p-8"
            >
                <h1 className="text-4xl font-black text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-cyan)] to-white uppercase tracking-tighter">
                    CORE<span className="text-white/40">ACCESS</span>
                </h1>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-2 font-bold opacity-80">Commander ID</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-[#161b22] border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all placeholder-white/20"
                            placeholder="Terminal username..."
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-2 font-bold opacity-80">Access Code</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#161b22] border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all placeholder-white/20"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[var(--accent-cyan)] text-black font-black py-4 rounded-xl shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all uppercase tracking-widest text-sm"
                    >
                        Initialize Core Access
                    </button>
                </form>
            </motion.div>
        </main>
    );
}
