'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Primitive Inputs ---

const Label = ({ label }: { label: string }) => (
    <label className="block text-xs uppercase tracking-wider text-[var(--accent-cyan)] mb-1 font-semibold">
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
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[var(--accent-purple)] focus:outline-none transition-colors"
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
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[var(--accent-purple)] focus:outline-none transition-colors resize-y"
            />
        </div>
    );
};

export const ColorInput = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => {
    return (
        <div className="mb-4">
            <Label label={label} />
            <div className="flex gap-2 items-center">
                <div
                    className="w-8 h-8 rounded border border-white/20"
                    style={{ background: value }}
                />
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-[var(--accent-purple)] focus:outline-none"
                />
            </div>
        </div>
    );
};

// --- Complex Editors ---

export const ArrayEditor = ({ label, value, onChange }: { label: string, value: any[], onChange: (val: any[]) => void }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const addItem = () => {
        // Infer schema from first item if exists, else empty object or string
        const template = value.length > 0 ? JSON.parse(JSON.stringify(value[0])) : "";
        // Clean template values
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
        <div className="mb-6 border border-white/10 rounded-lg p-4 bg-white/[0.02]">
            <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <Label label={`${label} (${value.length})`} />
                <span className="text-[var(--accent-cyan)] text-lg">{isExpanded ? '−' : '+'}</span>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {value.map((item, i) => (
                                <div key={i} className="relative pl-4 border-l-2 border-[var(--accent-purple)]/30">
                                    <button
                                        onClick={() => removeItem(i)}
                                        className="absolute right-0 top-0 text-red-400 hover:text-red-300 text-xs px-2 py-1"
                                    >
                                        Remove
                                    </button>
                                    <ObjectEditor value={item} onChange={(v) => updateItem(i, v)} />
                                </div>
                            ))}
                            <button
                                onClick={addItem}
                                className="w-full py-2 border border-dashed border-white/20 text-white/50 hover:text-white hover:border-white/50 rounded transition-colors text-sm"
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
