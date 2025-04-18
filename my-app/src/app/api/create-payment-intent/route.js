import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { amount, projectId } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Amount must be at least 1 rupee' },
        { status: 400 }
      );
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency: 'inr', // Indian Rupees
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        projectId,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: error.message || 'Error creating payment intent' },
      { status: 500 }
    );
  }
} 