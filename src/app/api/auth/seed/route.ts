import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
    await dbConnect();

    try {
        const existingUser = await User.findOne({ username: 'admin' });
        if (existingUser) {
            return NextResponse.json({ message: 'Admin user already exists' });
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);
        await User.create({
            username: 'admin',
            password: hashedPassword
        });

        return NextResponse.json({ message: 'Admin user created (admin/admin123)' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
    }
}
