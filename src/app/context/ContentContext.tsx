'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialContent } from '@/app/Data/content';

interface ContentContextType {
    content: typeof initialContent;
    loading: boolean;
    refreshContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children, initialData }: { children: React.ReactNode, initialData?: any }) => {
    const [content, setContent] = useState(initialData || initialContent);
    const [loading, setLoading] = useState(!initialData);

    const fetchContent = async () => {
        try {
            const res = await fetch('/api/content');
            if (res.ok) {
                const data = await res.json();
                // Merge with initialContent to ensure all keys exist
                setContent({ ...initialContent, ...data });
            }
        } catch (error) {
            console.error('Failed to fetch dynamic content:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!initialData) {
            fetchContent();
        }
    }, [initialData]);

    return (
        <ContentContext.Provider value={{ content, loading, refreshContent: fetchContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
