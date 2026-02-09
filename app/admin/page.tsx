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
        <main className="min-h-screen pt-40 pb-20 px-4 md:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                        OrbitControl <span className="text-[var(--accent-primary)]">Panel</span>
                    </h1>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className={`btn btn-primary px-12 py-4 text-lg shadow-xl shadow-emerald-500/20 active:scale-95 transition-all ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {saving ? 'Transmitting...' : 'Deploy Changes'}
                    </button>
                </div>

                {message && (
                    <div className={`mb-10 p-5 rounded-2xl border font-bold text-center ${message.includes('Error') || message.includes('Failed') ? 'border-red-100 bg-red-50 text-red-600' : 'border-emerald-100 bg-emerald-50 text-emerald-600'}`}>
                        {message}
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar / Tabs */}
                    <div className="lg:w-72 flex-shrink-0">
                        <div className="sticky top-32 bg-gray-50 border border-gray-100 p-4 rounded-[2.5rem] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible shadow-sm">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 rounded-2xl text-left transition-all font-bold uppercase tracking-widest text-xs whitespace-nowrap ${activeTab === tab
                                        ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-emerald-500/20'
                                        : 'text-[var(--text-secondary)] hover:bg-white hover:text-[var(--accent-primary)]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-emerald-500/5 min-h-[600px]"
                        >
                            <h2 className="text-2xl font-bold mb-10 text-[var(--accent-primary)] capitalize border-b border-gray-100 pb-6">
                                Edit {activeTab} Section
                            </h2>

                            {content[activeTab] ? (
                                <ObjectEditor
                                    value={content[activeTab]}
                                    onChange={(newData) => updateSection(activeTab, newData)}
                                />
                            ) : (
                                <p className="text-gray-400 font-medium">Select a section to edit</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
