"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ amount, projectId, isAnonymous, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve payment intent status after redirect
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        if (paymentIntent.status === 'succeeded') {
          toast({
            title: "Payment Successful! 🎉",
            description: `Your payment of ₹${amount} has been processed successfully.`,
            variant: "success",
            duration: 5000,
          });
          onSuccess();
        }
      });
    }
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      onError("Payment system is initializing. Please try again.");
      setIsLoading(false);
      return;
    }

    // Show immediate processing message
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
      duration: 3000,
    });

    try {
      const { error: paymentError, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      });

      if (paymentError) {
        throw paymentError;
      }

      // If payment is successful
      if (paymentIntent && paymentIntent.status === 'succeeded') {
        // First success message
        toast({
          title: "Payment Successful! 🎉",
          description: `Payment of ₹${amount} processed successfully!`,
          variant: "success",
          duration: 5000,
        });

        // Record the contribution
        try {
          const contributionResponse = await fetch(`/api/projects/${projectId}/contributions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: parseFloat(amount),
              isAnonymous,
              paymentIntentId: paymentIntent.id
            }),
          });

          if (contributionResponse.ok) {
            // Second success message
            toast({
              title: "Contribution Recorded! 🙏",
              description: "Your contribution has been successfully recorded.",
              variant: "success",
              duration: 5000,
            });
          }
        } catch (contributionError) {
          console.error('Contribution error:', contributionError);
          // Show message even if contribution recording fails
          toast({
            title: "Payment Completed",
            description: "Payment successful, but there was an issue recording your contribution. Don't worry, we'll handle it!",
            variant: "success",
            duration: 7000,
          });
        }

        // Call onSuccess which will show final message and close modal
        onSuccess();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error.message || "There was an error processing your payment. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button 
        type="submit" 
        className="w-full mt-4"
        disabled={isLoading || !stripe}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            Processing...
          </span>
        ) : (
          `Pay ₹${amount}`
        )}
      </Button>
    </form>
  );
}

export default function PaymentField({ onClose, id }) {
  const [amount, setAmount] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [clientSecret, setClientSecret] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: Math.round(parseFloat(amount) * 100),
          projectId: id 
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error('Payment intent error:', error);
          toast({
            title: "Error",
            description: "Failed to initialize payment: " + error.message,
            variant: "destructive",
            duration: 5000,
          });
        });
    }
  }, [amount, id, toast]);

  const handleSuccess = () => {
    // Final success message and close
    toast({ 
      title: "Thank You for Your Support! 🎉",
      description: `Your contribution of ₹${amount} will make a difference.`,
      variant: "success",
      duration: 7000,
    });
    // Delay closing slightly to ensure message is seen
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleError = (message) => {
    toast({
      title: "Payment Failed",
      description: message || "Payment could not be processed. Please try again.",
      variant: "destructive",
      duration: 5000,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Payment Details</CardTitle>
        <button 
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (₹)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount in Rupees"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
            step="1"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="anonymous"
            checked={isAnonymous}
            onCheckedChange={(checked) => setIsAnonymous(Boolean(checked))}
          />
          <Label htmlFor="anonymous">Make contribution anonymous</Label>
        </div>
        
        {clientSecret && (
          <Elements stripe={stripePromise} options={{
            clientSecret,
            appearance: {
              theme: 'stripe',
              variables: {
                colorPrimary: '#0570de',
                colorBackground: '#ffffff',
                colorText: '#30313d',
              },
            },
          }}>
            <CheckoutForm 
              amount={amount}
              projectId={id}
              isAnonymous={isAnonymous}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Elements>
        )}
      </CardContent>
    </Card>
  );
}

