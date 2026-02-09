import Link from 'next/link';

export default function Footer({ content }: { content: any }) {
    const footerContent = content || { logo: { text: "Orbit", accent: "Think" }, socials: [], contactEmail: "contact@orbitthink.com" };

    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="container px-6 md:px-8">
                <div className="flex flex-col items-center">
                    <Link href="/" className="mb-12 group">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {footerContent.logo.text}<span className="text-[var(--accent-primary)] group-hover:text-[var(--text-primary)] transition-colors">{footerContent.logo.accent}</span>
                        </h2>
                    </Link>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {footerContent.socials && footerContent.socials.map((social: any, index: number) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gray-100 mb-10"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
                        <p className="text-[var(--text-secondary)] text-sm font-medium">
                            &copy; 2026 {footerContent.logo.text}{footerContent.logo.accent}. All rights reserved.
                        </p>
                        <a
                            href={`mailto:${footerContent.contactEmail}`}
                            className="text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold flex items-center gap-2"
                        >
                            {footerContent.contactEmail} <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
