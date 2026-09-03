'use client';

export default function MarqueeTicker() {
    const items = [
        "ENTERPRISE AI & LLMS",
        "IMMERSIVE 3D / VR ENGINES",
        "SCALABLE NEXT.JS ARCHITECTURES",
        "CROSS-PLATFORM FLUTTER",
        "COMPUTER VISION SURVEILLANCE",
        "HIPAA-COMPLIANT HEALTH SYSTEMS",
        "HIGH-THROUGHPUT BACKENDS"
    ];

    return (
        <div className="border-y border-white/10 bg-[#0d0d0f] py-4 overflow-hidden select-none">
            <div className="flex w-max animate-[marquee_26s_linear_infinite] will-change-transform">
                {[...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 px-6">
                        <span className="text-[11px] font-black uppercase tracking-[0.26em] text-[#71717a]">
                            {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CD58]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
