'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Primitive Inputs ---

const Label = ({ label }: { label: string }) => (
    <label className="block text-xs uppercase tracking-wider text-[var(--accent-primary)] mb-2 font-bold">
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
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all"
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
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all resize-y"
            />
        </div>
    );
};

export const ColorInput = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => {
    return (
        <div className="mb-4">
            <Label label={label} />
            <div className="flex gap-3 items-center">
                <div
                    className="w-10 h-10 rounded-xl border border-gray-200 shadow-inner"
                    style={{ background: value }}
                />
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:bg-white focus:border-[var(--accent-primary)] focus:outline-none transition-all"
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
        if (typeof template === 'object') {
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
        <div className="mb-6 border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
            <div className="flex justify-between items-center mb-4 cursor-pointer group" onClick={() => setIsExpanded(!isExpanded)}>
                <Label label={`${label} (${value.length})`} />
                <span className="text-[var(--accent-primary)] bg-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                    {isExpanded ? '−' : '+'}
                </span>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 mt-4">
                            {value.map((item, i) => (
                                <div key={i} className="relative pl-6 border-l-4 border-[var(--accent-primary)]/20 bg-white p-6 rounded-r-2xl shadow-sm">
                                    <button
                                        onClick={() => removeItem(i)}
                                        className="absolute right-4 top-4 text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-widest px-2 py-1"
                                    >
                                        Remove
                                    </button>
                                    <ObjectEditor value={item} onChange={(v) => updateItem(i, v)} />
                                </div>
                            ))}
                            <button
                                onClick={addItem}
                                className="w-full py-4 border-2 border-dashed border-gray-200 text-gray-400 hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/5 rounded-2xl transition-all text-sm font-bold uppercase tracking-widest"
                            >
                                + Add {label} Item
                            </button>
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
                    if (typeof childVal === 'object') {
                        return (
                            <div key={key} className="pl-4 border-l border-white/10 my-4">
                                <Label label={key} />
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
