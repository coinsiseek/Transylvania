'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import MissionStepper from '@/components/MissionStepper';
import { useMission } from '@/contexts/MissionContext';
import images from '@/assets/images.json';

const steps = [
  { id: 'setup', name: 'Setup', description: 'Group & Difficulty' },
  { id: 'character', name: 'Character', description: 'Create Profile' },
  { id: 'scenario', name: 'Scenario', description: 'Choose Forest' },
  { id: 'lobby', name: 'Lobby', description: 'Recruit Party' },
  { id: 'logistics', name: 'Logistics', description: 'Cost Calculation' },
  { id: 'checkout', name: 'Checkout', description: 'Payment' },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { state, dispatch } = useMission();
  const [paymentMethod, setPaymentMethod] = useState<'Sovereign Pay' | 'Split Loot'>('Sovereign Pay');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handlePaymentMethodChange = (method: 'Sovereign Pay' | 'Split Loot') => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    alert('Payment processed successfully! Your mission is confirmed.');
    router.push('/dashboard');
  };

  const splitAmount = state.totalCost / state.groupSize;

  return (
    <div className="min-h-screen relative py-8 px-4" style={{
      backgroundImage: `url(${images.profileHeader.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-black/60 to-obsidian-black"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <MissionStepper steps={steps} currentStep="checkout" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 glitch-effect animate-glow-pulse" data-text="THE VAULT" style={{ color: '#d4af37' }}>
              THE VAULT
            </h1>
            <p style={{ color: '#f5e6d3' }}>
              Secure payment for your expedition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Options */}
          <div className="glow-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>PAYMENT METHOD</h2>

            <div className="space-y-4">
              <button
                onClick={() => handlePaymentMethodChange('Sovereign Pay')}
                className="w-full p-4 rounded text-left transition-all border"
                style={{
                  borderWidth: '2px',
                  borderColor: paymentMethod === 'Sovereign Pay' ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: paymentMethod === 'Sovereign Pay' ? 'rgba(26, 20, 16, 0.6)' : 'transparent',
                  color: '#f5e6d3'
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold">SOVEREIGN PAY</span>
                  <span style={{ color: '#d4af37' }}>Pay All</span>
                </div>
                <p className="text-sm mt-1" style={{ color: '#d4af37', opacity: 0.7 }}>
                  One person pays the full amount
                </p>
              </button>

              <button
                onClick={() => handlePaymentMethodChange('Split Loot')}
                className="w-full p-4 rounded text-left transition-all border"
                style={{
                  borderWidth: '2px',
                  borderColor: paymentMethod === 'Split Loot' ? '#d4af37' : 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: paymentMethod === 'Split Loot' ? 'rgba(26, 20, 16, 0.6)' : 'transparent',
                  color: '#f5e6d3'
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold">SPLIT LOOT</span>
                  <span style={{ color: '#d4af37' }}>Split Payment</span>
                </div>
                <p className="text-sm mt-1" style={{ color: '#d4af37', opacity: 0.7 }}>
                  Divide cost among all party members
                </p>
              </button>
            </div>

            <div className="mt-6 p-4 bg-dark-purple rounded">
              <div className="flex justify-between items-center">
                <span style={{ color: '#d4af37' }}>Total Mission Cost</span>
                <span className="text-2xl font-bold" style={{ color: '#d4af37' }}>
                  {state.totalCost.toFixed(2)} Gold
                </span>
              </div>
              {paymentMethod === 'Split Loot' && (
                <div className="mt-2 text-sm" style={{ color: '#d4af37', opacity: 0.7 }}>
                  {state.groupSize} travelers × {splitAmount.toFixed(2)} Gold each
                </div>
              )}
            </div>
          </div>

          {/* Payment Form */}
          <div className="glow-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>
              {paymentMethod === 'Sovereign Pay' ? 'PAYMENT DETAILS' : 'SPLIT PAYMENT'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {paymentMethod === 'Sovereign Pay' ? (
                <>
                  <div>
                    <label className="block mb-2" style={{ color: '#f5e6d3' }}>Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full pixel-button bg-dark-purple p-3 rounded"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2" style={{ color: '#f5e6d3' }}>Expiry Date</label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full pixel-button bg-dark-purple p-3 rounded"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2" style={{ color: '#f5e6d3' }}>CVV</label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-full pixel-button bg-dark-purple p-3 rounded"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2" style={{ color: '#f5e6d3' }}>Cardholder Name</label>
                    <input
                      type="text"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="w-full pixel-button bg-dark-purple p-3 rounded"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🪙</div>
                  <p className="mb-4" style={{ color: '#f5e6d3' }}>
                    Payment splitting is handled through our secure system. Each member will receive a payment request.
                  </p>
                  <p className="font-bold" style={{ color: '#d4af37' }}>
                    You will pay: {splitAmount.toFixed(2)} Gold
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="pixel-button w-full py-4 text-xl mt-4"
              >
                CONFIRM PAYMENT & BOOK MISSION
              </button>
            </form>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}