'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Label = ({ label }: { label: string }) => (
    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#00CD58] mb-2 font-black font-mono">
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
                className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:bg-[#141417] focus:border-[#00CD58] outline-none transition-all font-light"
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
                className="w-full bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:bg-[#141417] focus:border-[#00CD58] outline-none transition-all font-light resize-y"
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
                    className="w-11 h-11 rounded-xl border border-white/20 shadow-inner shrink-0"
                    style={{ background: value || '#00CD58' }}
                />
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-[#0d0d0f] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-[#00CD58] outline-none transition-all font-mono"
                />
            </div>
        </div>
    );
};

export const ArrayEditor = ({ label, value, onChange }: { label: string, value: any[], onChange: (val: any[]) => void }) => {
    const [isExpanded, setIsExpanded] = useState(true);

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
        <div className="mb-6 border border-white/10 rounded-3xl p-6 bg-[#09090b]">
            <div 
                className="flex justify-between items-center mb-4 cursor-pointer group select-none" 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-3">
                    <Label label={`${label} (${value.length})`} />
                    <span className="text-[10px] uppercase tracking-wider text-[#71717a] font-mono">List collection</span>
                </div>
                <span className="text-[#00CD58] bg-white/[0.05] border border-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
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
                        <div className="flex flex-col gap-5 mt-4">
                            {value.map((item, i) => (
                                <div key={i} className="relative p-6 bg-[#141417] border border-white/10 rounded-2xl">
                                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                                        <span className="text-xs font-mono font-bold text-[#00CD58]">
                                            Item #{i + 1}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(i)}
                                            className="text-red-400 hover:text-red-300 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <ObjectEditor value={item} onChange={(v) => updateItem(i, v)} />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addItem}
                                className="w-full py-4 border border-dashed border-white/20 text-[#a1a1aa] hover:text-[#00CD58] hover:border-[#00CD58]/50 hover:bg-[#00CD58]/5 rounded-2xl transition-all text-xs font-bold uppercase tracking-[0.2em]"
                            >
                                + Append New {label} Item
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
        return <ArrayEditor label="Items" value={value} onChange={onChange} />;
    }

    if (typeof value === 'object' && value !== null) {
        return (
            <div className="space-y-3">
                {Object.keys(value).map((key) => {
                    const childVal = value[key];
                    const updateChild = (newVal: any) => {
                        onChange({ ...value, [key]: newVal });
                    };

                    const isColor = key.toLowerCase().includes('color') || key.toLowerCase().includes('gradient') || key.toLowerCase().includes('bg');
                    const isLongText = key.toLowerCase().includes('description') || key.toLowerCase().includes('text') || key.toLowerCase().includes('content') || key.toLowerCase().includes('desc');

                    if (typeof childVal === 'string' || typeof childVal === 'number') {
                        if (isColor) return <ColorInput key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                        if (isLongText) return <TextArea key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                        return <TextInput key={key} label={key} value={String(childVal)} onChange={updateChild} />;
                    }

                    if (Array.isArray(childVal)) {
                        return <ArrayEditor key={key} label={key} value={childVal} onChange={updateChild} />;
                    }

                    if (typeof childVal === 'object' && childVal !== null) {
                        return (
                            <div key={key} className="p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 my-3">
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

    return <div className="text-xs text-[#71717a] font-mono">Unsupported Data Node</div>;
};
