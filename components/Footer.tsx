'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ content }: { content?: any }) {
    return (
        <footer className="bg-[#050507] text-white pt-24 pb-12 px-6 md:px-14 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Big Typographic Reveal Header (Lircle Style) */}
                <div className="pb-20 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#00CD58] block mb-4">
                            READY FOR LAUNCH?
                        </span>
                        <h2 className="text-[clamp(44px,8vw,110px)] font-black tracking-[-0.04em] leading-[0.9] uppercase text-white">
                            Let's Build <br />
                            <span className="text-[#00CD58]">Together.</span>
                        </h2>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.24em] transition-all duration-300 hover:bg-[#00e362] hover:shadow-[0_0_35px_rgba(0,205,88,0.5)]"
                    >
                        <span>Start A Project</span>
                        <span className="text-base">↗</span>
                    </Link>
                </div>

                {/* Footer Navigation Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10">
                    <div className="col-span-2 md:col-span-1">
                        <Image
                            src="/images/orbitthink-logo-white.svg"
                            alt="OrbitThink Logo"
                            width={160}
                            height={36}
                            className="h-8 w-auto mb-4"
                        />
                        <p className="text-xs text-[#71717a] leading-relaxed max-w-xs font-light">
                            Defying the laws of software through artificial intelligence, spatial simulation, and cloud platforms.
                        </p>
                    </div>

                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40 mb-4">Index</div>
                        <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa] font-medium">
                            <li><Link href="/" className="hover:text-[#00CD58] transition-colors">Home</Link></li>
                            <li><Link href="/#services" className="hover:text-[#00CD58] transition-colors">Services</Link></li>
                            <li><Link href="/#work" className="hover:text-[#00CD58] transition-colors">Missions</Link></li>
                            <li><Link href="/about" className="hover:text-[#00CD58] transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-[#00CD58] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40 mb-4">Capabilities</div>
                        <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa] font-medium">
                            <li>Enterprise AI & LLMs</li>
                            <li>Oculus VR & Unity 3D</li>
                            <li>Next.js Web Systems</li>
                            <li>Flutter Mobile Apps</li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-white/40 mb-4">Inquiries</div>
                        <a
                            href="mailto:contact@orbitthink.com"
                            className="text-xs font-mono text-[#00CD58] hover:underline block mb-2"
                        >
                            contact@orbitthink.com
                        </a>
                        <span className="text-[11px] text-[#71717a] block">Worldwide Remote Studio</span>
                    </div>
                </div>

                {/* Copyright Row */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#71717a] font-mono">
                    <div>&copy; {new Date().getFullYear()} OrbitThink. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="/contact" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
