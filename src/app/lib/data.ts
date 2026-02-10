import dbConnect from './mongodb';
import Content from '@/models/Content';
import { content as initialContent } from '@/app/data/content';

/**
 * Fetches content for server-side rendering.
 * connects to DB directly.
 */
export async function getDynamicContent() {
    try {
        await dbConnect();
        const data = await Content.findOne({}).lean();
        console.log('data', data);
        if (!data) {
            console.log("Fetched content from local:");
            // If strictly no data, return initial (and maybe seed?)
            // We won't auto-seed here to avoid side effects in a 'get' function, 
            // but strictly speaking the API route creates it. 
            // We'll just return initialContent for safety.
            return initialContent;
        }

        // Convert _id to string or remove it to avoid serialization issues with Client Components if passed directly
        // .lean() returns POJO but _id is an object
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.error("Failed to fetch content from DB:", error);
        return initialContent; // Fallback
    }
}
