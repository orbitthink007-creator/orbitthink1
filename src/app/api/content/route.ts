import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import Content from '@/app/models/Content';
import { initialContent } from '../../data/content';

export async function GET() {
    await dbConnect();

    try {
        let data = await Content.findOne({});

        if (!data) {
            // Seed with initial content if database is empty
            const seed = await Content.create(initialContent);
            return NextResponse.json(seed);
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    await dbConnect();

    try {
        const body = await req.json();

        // Update the singleton document or create if not exists
        // upsert: true finds one and updates, or inserts if not found.
        const updated = await Content.findOneAndUpdate({}, { ...body, lastUpdated: new Date() }, { new: true, upsert: true });

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
    }
}
