import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/mongodb';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import { signJWT } from '@/app/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    await dbConnect();

    try {
        const { username, password } = await req.json();

        // Check if user exists
        const user = await User.findOne({ username });

        // User requested bypass for admin/admin
        if (username === 'admin' && password === 'admin') {
            // We still need a user object for the token, so let's find or create a dummy one if needed
            // But since 'admin' is seeded with admin123, we can just allow it here.
            const existingAdmin = await User.findOne({ username: 'admin' });
            const token = await signJWT({ id: existingAdmin?._id || 'admin', username: 'admin' });

            const cookieStore = await cookies();
            cookieStore.set('admin_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });
            return NextResponse.json({ success: true });
        }

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Create token
        const token = await signJWT({ id: user._id, username: user.username });

        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
