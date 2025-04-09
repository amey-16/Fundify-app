import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request, { params }) {
    try {
        const { db } = await connectToDatabase();
        const projectId = params.projectId;

        const contributions = await db
            .collection('contributions')
            .find({ projectId: projectId })
            .sort({ timestamp: -1 })
            .limit(10)
            .toArray();

        return NextResponse.json(contributions);
    } catch (error) {
        console.error('Error fetching contributions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contributions' },
            { status: 500 }
        );
    }
}