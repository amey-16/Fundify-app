// src/app/api/projects/[id]/contributions/route.js

import { NextResponse } from "next/server";
import db from "@/utils/db";
import Project from "@/app/models/projectscheme";
import { stripe } from '@/lib/stripe';
import { getToken } from "next-auth/jwt";

// Add contribution to project
export async function POST(req,  { params }) {
  try {
    const session = await getToken({ req: req, secret: process.env.JWT_SECRET });
    const { amount, isAnonymous, paymentIntentId } = await req.json();

    
    const {id }= await params;

    // Verify the payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment has not been completed' },
        { status: 400 }
      );
    }

    await db();

    // Create the contribution
    const contribution = {
      contributor:session?.user?.id,
      amount: parseFloat(amount),
      isAnonymous,
      contributedAt: new Date(),
      paymentIntentId
    };

    // Update the project with the new contribution
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { 
        $push: { contributions: contribution },
        $inc: { raised: amount }
      },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      contribution
    });

  } catch (error) {
    console.error('Error processing contribution:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process contribution' },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await db();
    
    const project = await Project.findById(params.id)
      .populate({
        path: 'contributions.contributor',
        select: 'name email',
        match: { 'contributions.isAnonymous': false }
      });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Filter out anonymous contributions and map to required format
    const contributors = project.contributions
      .filter(contribution => !contribution.isAnonymous)
      .map(contribution => ({
        name: contribution.contributor?.name || 'Unknown',
        amount: contribution.amount,
        contributedAt: contribution.contributedAt
      }));

    return NextResponse.json(contributors);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}