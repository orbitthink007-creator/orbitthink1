"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-18 right-6.5 z-[1002] w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[var(--accent-primary)] shadow-xl hover:shadow-[var(--accent-primary)]/20 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {theme === "dark" ? (
                    <Sun size={20} className="transition-all duration-500 group-hover:rotate-90 text-[var(--accent-primary)]" />
                ) : (
                    <Moon size={20} className="transition-all duration-500 group-hover:-rotate-12 text-[var(--accent-primary)]" />
                )}
            </div>
        </button>
    );
}
