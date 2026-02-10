'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { initialContent } from '@/app/Data/content';
import { ObjectEditor } from './EditorComponents';

export default function AdminPanel() {
    const [content, setContent] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            router.push('/admin/login');
        } catch (error) {
            console.error('Logout failed', error);
            // Fallback: just redirect
            router.push('/admin/login');
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch('/api/content');
            if (res.ok) {
                const data = await res.json();
                const merged = { ...initialContent, ...data };
                setContent(merged);

                // If the current active tab is not in the new content keys, set it to the first available tab
                const availableTabs = Object.keys(merged).filter(k => !['_id', '__v', 'lastUpdated'].includes(k));
                if (availableTabs.length > 0 && (activeTab === 'hero' || !availableTabs.includes(activeTab))) {
                    setActiveTab(availableTabs[0]);
                }
            } else {
                setContent(initialContent);
                setActiveTab(Object.keys(initialContent)[0]);
            }
        } catch (error) {
            console.error('Failed to load content', error);
            setMessage('Failed to load content. Using defaults.');
            setContent(initialContent);
            setActiveTab(Object.keys(initialContent)[0]);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content),
            });
            setMessage('Saved successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Failed to save', error);
            setMessage('Error saving content.');
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

    if (loading) return <div className="min-h-screen pt-32 text-center">Loading Admin Controls...</div>;

    const tabs = Object.keys(content).filter(k => k !== '_id' && k !== '__v' && k !== 'lastUpdated');

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[var(--bg-void)] " style={{ marginTop: '80px' }}>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-white/5 pb-8">
                    <h1 className="text-4xl font-black tracking-tighter text-white">
                        ORBIT<span className="text-[var(--accent-cyan)] italic">CMS</span>
                    </h1>

                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-bold py-3 px-8 rounded-xl transition-all border border-white/10 text-sm tracking-widest uppercase"
                        >
                            End Session
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className={` bg-[var(--accent-cyan)] text-black font-extrabold py-3 px-12 rounded-xl shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all text-sm tracking-widest uppercase ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {saving ? 'Transmitting...' : 'Push Updates'}
                        </button>
                    </div>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-lg border ${message.includes('Error') || message.includes('Failed') ? 'border-red-500/50 bg-red-500/10 text-red-200' : 'border-green-500/50 bg-green-500/10 text-green-200'}`}>
                        {message}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Tabs */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-32 glass-card !p-4 gap-2 overflow-x-auto lg:overflow-visible">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-4 rounded-xl text-left transition-all whitespace-nowrap text-xs font-bold tracking-widest uppercase border ${activeTab === tab
                                        ? 'bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border-[var(--accent-cyan)] shadow-[0_0_20px_rgba(0,243,255,0.1)]'
                                        : 'text-white/40 border-transparent hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card min-h-[500px]"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-[var(--accent-cyan)] capitalize border-b border-white/10 pb-4">
                                Edit {activeTab}
                            </h2>

                            {content[activeTab] ? (
                                <ObjectEditor
                                    value={content[activeTab]}
                                    onChange={(newData) => updateSection(activeTab, newData)}
                                />
                            ) : (
                                <p className="text-white/50">Select a section to edit</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
