'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initialContent } from '@/app/data/content';
import { ObjectEditor } from './EditorComponents';

export default function AdminPanel() {
    const [content, setContent] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('hero');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch('/api/content');
            const data = await res.json();
            // Ensure we have a valid object, merging with initial if needed to ensure keys exist
            setContent({ ...initialContent, ...data });
        } catch (error) {
            console.error('Failed to load content', error);
            setMessage('Failed to load content. Using defaults.');
            setContent(initialContent);
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
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--text-secondary)]">
                        OrbitControl <span className="text-[var(--accent-cyan)]">Panel</span>
                    </h1>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className={` bg-[var(--accent-cyan)] text-black font-bold py-3 px-20 rounded-full shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {saving ? 'Transmitting...' : 'Deploy Changes'}
                    </button>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-lg border ${message.includes('Error') || message.includes('Failed') ? 'border-red-500/50 bg-red-500/10 text-red-200' : 'border-green-500/50 bg-green-500/10 text-green-200'}`}>
                        {message}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Tabs */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-32 glass-card !p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-3 rounded-lg text-left transition-all whitespace-nowrap ${activeTab === tab
                                        ? 'bg-[var(--accent-purple)] text-white shadow-lg'
                                        : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-white'
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
