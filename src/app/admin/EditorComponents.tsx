'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Primitive Inputs ---

const Label = ({ label }: { label: string }) => (
    <label className="block text-[10px] uppercase tracking-[0.15em] text-[var(--accent-cyan)] mb-1.5 font-bold opacity-80">
        {label.replace(/([A-Z])/g, ' $1').trim()}
    </label>
);

export const TextInput = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => {
    return (
        <div className="mb-4">
            <Label label={label} />
            <input
                type="text"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#161b22] border border-white/20 rounded-lg px-4 py-3 text-base text-white focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] focus:outline-none transition-all placeholder-white/30"
            />
        </div>
    );
};

export const TextArea = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => {
    return (
        <div className="mb-4">
            <Label label={label} />
            <textarea
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                rows={6}
                className="w-full bg-[#161b22] border border-white/20 rounded-lg px-4 py-3 text-base text-white focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] focus:outline-none transition-all resize-y"
            />
        </div>
    );
};

export const ColorInput = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => {
    return (
        <div className="mb-4">
            <Label label={label} />
            <div className="flex gap-4 items-center">
                <div
                    className="w-12 h-12 rounded-lg border-2 border-white/20 shadow-inner"
                    style={{ background: value || '#000000' }}
                />
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-[#161b22] border border-white/20 rounded-lg px-4 py-3 text-base text-white focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] focus:outline-none"
                    placeholder="#000000"
                />
            </div>
        </div>
    );
};

// --- Complex Editors ---

export const ArrayEditor = ({ label, value, onChange }: { label: string, value: any[], onChange: (val: any[]) => void }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const addItem = () => {
        const template = value.length > 0 ? JSON.parse(JSON.stringify(value[0])) : "";
        if (typeof template === 'object' && template !== null) {
            Object.keys(template).forEach(k => template[k] = "");
        }
        onChange([...value, template]);
        setIsExpanded(true);
    };

    const removeItem = (index: number) => {
        onChange(value.filter((_, i) => i !== index));
    };

    const updateItem = (index: number, newVal: any) => {
        const newArr = [...value];
        newArr[index] = newVal;
        onChange(newArr);
    };

    return (
        <div className="mb-8 border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] shadow-xl">
            <div
                className="flex justify-between items-center px-5 py-4 cursor-pointer bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 10L7.5 6L4.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <Label label={`${label} [${value.length}]`} />
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); addItem(); }}
                    className="text-[var(--accent-cyan)] text-xs font-bold uppercase tracking-wider hover:underline"
                >
                    + Add New
                </button>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="p-5 flex flex-col gap-6 bg-black/20">
                            {value.map((item, i) => (
                                <div key={i} className="relative p-5 rounded-lg border border-white/5 bg-white/[0.02]">
                                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                                        <span className="text-[10px] text-white/40 font-mono">ITEM #{String(i + 1).padStart(2, '0')}</span>
                                        <button
                                            onClick={() => removeItem(i)}
                                            className="text-red-400 hover:text-red-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
                                            Delete
                                        </button>
                                    </div>
                                    <ObjectEditor value={item} onChange={(v) => updateItem(i, v)} />
                                </div>
                            ))}

                            {value.length === 0 && (
                                <div className="text-center py-8 text-white/20 italic text-sm">
                                    No items in this list
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ObjectEditor = ({ value, onChange }: { value: any, onChange: (val: any) => void }) => {
    if (typeof value === 'string' || typeof value === 'number') {
        const strVal = String(value);
        if (strVal.length > 50) return <TextArea label="Text" value={strVal} onChange={onChange} />;
        return <TextInput label="Value" value={strVal} onChange={onChange} />;
    }

    if (Array.isArray(value)) {
        return <ArrayEditor label="List" value={value} onChange={onChange} />;
    }

    if (typeof value === 'object' && value !== null) {
        return (
            <div className="space-y-2">
                {Object.keys(value).map((key) => {
                    const childVal = value[key];
                    const updateChild = (newVal: any) => {
                        onChange({ ...value, [key]: newVal });
                    };

                    // Detect specific field types by key name
                    const isColor = key.toLowerCase().includes('color') || key.toLowerCase().includes('gradient') || key.toLowerCase().includes('bg');
                    const isLongText = key.toLowerCase().includes('description') || key.toLowerCase().includes('text') || key.toLowerCase().includes('content');

                    // If simple type
                    if (typeof childVal === 'string' || typeof childVal === 'number') {
                        if (isColor) return <ColorInput key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                        if (isLongText) return <TextArea key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                        return <TextInput key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                    }

                    // If Array
                    if (Array.isArray(childVal)) {
                        return <ArrayEditor key={key} label={key} value={childVal} onChange={updateChild} />;
                    }

                    // If Object (nested)
                    if (typeof childVal === 'object' && childVal !== null) {
                        return (
                            <div key={key} className="pl-4 border-l-2 border-white/5 my-6">
                                <div className="mb-3">
                                    <Label label={key} />
                                </div>
                                <ObjectEditor value={childVal} onChange={updateChild} />
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        );
    }

    return <div>Unsupported Type</div>;
};
