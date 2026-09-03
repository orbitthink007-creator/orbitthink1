'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialContent } from '@/app/data/content';
import { ObjectEditor } from './EditorComponents';
import Link from 'next/link';

export default function AdminPanel() {
    const [content, setContent] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('hero');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const tabLabels: Record<string, string> = {
        navbar: "Navigation",
        hero: "Hero Section",
        philosophy: "Philosophy & Vision",
        services: "Capabilities & Services",
        portfolio: "Mission Logs",
        about: "Who We Are",
        process: "Execution Trajectory",
        testimonials: "Client Voices",
        contactPage: "Contact Page",
        servicesPage: "Services Page",
        footer: "Footer",
    };

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch('/api/content');
            const data = await res.json();
            setContent({ ...initialContent, ...data });
        } catch (error) {
            console.error('Failed to load content', error);
            setMessage('Failed to load content from DB. Using local defaults.');
            setContent(initialContent);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content),
            });
            if (res.ok) {
                setMessage('Changes synchronized to database successfully!');
            } else {
                setMessage('Error updating database.');
            }
            setTimeout(() => setMessage(''), 4000);
        } catch (error) {
            console.error('Failed to save', error);
            setMessage('Network error saving content.');
        } finally {
            setSaving(false);
        }
    };

    const updateSection = (sectionKey: string, newSectionData: any) => {
        setContent((prev: any) => ({
            ...prev,
            [sectionKey]: newSectionData
        }));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#00CD58] border-t-transparent animate-spin" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#71717a]">Loading OrbitControl CMS...</span>
                </div>
            </div>
        );
    }

    const availableTabs = Object.keys(content || {}).filter(
        k => k !== '_id' && k !== '__v' && k !== 'lastUpdated'
    );

    return (
        <main className="min-h-screen pt-32 pb-24 px-4 md:px-10 bg-[#09090b] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-white/10 mb-10 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00CD58] animate-pulse" />
                            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#00CD58]">
                                ORBITTHINK CMS // ENGINE 2.0
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            OrbitControl <span className="text-[#00CD58]">Studio</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-[0.16em] text-white/80 hover:text-white hover:border-white/30 transition-all"
                        >
                            View Live Site ↗
                        </Link>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className={`px-8 py-3.5 rounded-full bg-[#00CD58] text-[#0a0a0a] text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-[#00e362] hover:shadow-[0_0_30px_rgba(0,205,88,0.4)] ${
                                saving ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {saving ? 'Synchronizing...' : 'Deploy Changes'}
                        </button>
                    </div>
                </div>

                {/* Status Message */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`mb-8 p-4 rounded-2xl border text-xs font-mono font-bold tracking-wider text-center ${
                                message.includes('Error') || message.includes('Failed')
                                    ? 'border-red-500/30 bg-red-500/10 text-red-300'
                                    : 'border-[#00CD58]/30 bg-[#00CD58]/10 text-[#00CD58]'
                            }`}
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Tabbed Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Navigation Tabs Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="p-3 rounded-3xl bg-[#111113] border border-white/10 sticky top-28 flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible">
                            <div className="hidden lg:block px-4 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.24em] text-[#71717a]">
                                Content Partitions
                            </div>
                            {availableTabs.map((tab) => {
                                const isActive = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-all text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
                                            isActive
                                                ? 'bg-[#00CD58] text-[#0a0a0a] shadow-[0_4px_20px_rgba(0,205,88,0.35)]'
                                                : 'text-[#a1a1aa] hover:text-white hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        <span>{tabLabels[tab] || tab}</span>
                                        {isActive && <span className="text-xs font-bold">→</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active Partition Editor Canvas */}
                    <div className="lg:col-span-9">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="p-8 md:p-12 rounded-3xl bg-[#141417] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] min-h-[600px]"
                        >
                            <div className="flex justify-between items-center pb-6 mb-8 border-b border-white/10">
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#00CD58] block mb-1">
                                        ACTIVE PARTITION
                                    </span>
                                    <h2 className="text-2xl font-black tracking-tight text-white uppercase">
                                        {tabLabels[activeTab] || activeTab}
                                    </h2>
                                </div>
                                <span className="text-[11px] font-mono text-[#71717a] uppercase">
                                    Live Sync Available
                                </span>
                            </div>

                            {content[activeTab] !== undefined ? (
                                <ObjectEditor
                                    value={content[activeTab]}
                                    onChange={(newData) => updateSection(activeTab, newData)}
                                />
                            ) : (
                                <p className="text-[#71717a] font-light">Select a partition from the left to edit its content.</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
