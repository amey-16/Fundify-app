import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request, { params }) {
    try {
        const { db } = await connectToDatabase();
        const projectId = params.projectId;

        // Find contributions for this project
        const contributions = await db
            .collection('contributions')
            .find({ projectId: projectId })
            .sort({ timestamp: -1 })
            .limit(10)
            .toArray();

        // Transform contributions to properly handle anonymous ones
        const formattedContributions = contributions.map(contribution => {
            return {
                ...contribution,
                contributorName: contribution.isAnonymous ? 'Anonymous' : (contribution.contributorName || 'Anonymous'),
                // Ensure we don't expose contributor ID for anonymous contributions
                contributor: contribution.isAnonymous ? null : contribution.contributor
            };
        });

        return NextResponse.json(formattedContributions);
    } catch (error) {
        console.error('Error fetching contributions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contributions' },
            { status: 500 }
        );
    }
}