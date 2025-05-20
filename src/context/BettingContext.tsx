import React, { createContext, useContext, useState, ReactNode } from 'react';

type Bet = {
  id: string;
  event: string;
  selection: string;
  odds: number;
  stake?: number;
};

type BettingContextType = {
  betSlip: Bet[];
  balance: number;
  addToBetSlip: (bet: Bet) => void;
  removeFromBetSlip: (id: string) => void;
  updateStake: (id: string, stake: number) => void;
  placeBet: () => void;
};

const BettingContext = createContext<BettingContextType | undefined>(undefined);

export const BettingProvider = ({ children }: { children: ReactNode }) => {
  const [betSlip, setBetSlip] = useState<Bet[]>([]);
  const [balance, setBalance] = useState<number>(1000);

  const addToBetSlip = (bet: Bet) => {
    // Check if bet already exists
    if (!betSlip.some((item) => item.id === bet.id)) {
      setBetSlip([...betSlip, bet]);
    }
  };

  const removeFromBetSlip = (id: string) => {
    setBetSlip(betSlip.filter((bet) => bet.id !== id));
  };

  const updateStake = (id: string, stake: number) => {
    setBetSlip(
      betSlip.map((bet) => (bet.id === id ? { ...bet, stake } : bet))
    );
  };

  const placeBet = () => {
    // Calculate total stake
    const totalStake = betSlip.reduce((sum, bet) => sum + (bet.stake || 0), 0);
    
    // Check if user has enough balance
    if (totalStake <= balance) {
      // In a real app, we would communicate with a backend here
      setBalance(balance - totalStake);
      setBetSlip([]);
      alert('Bet placed successfully!');
    } else {
      alert('Insufficient balance!');
    }
  };

  return (
    <BettingContext.Provider
      value={{
        betSlip,
        balance,
        addToBetSlip,
        removeFromBetSlip,
        updateStake,
        placeBet,
      }}
    >
      {children}
    </BettingContext.Provider>
  );
};

export const useBetting = () => {
  const context = useContext(BettingContext);
  if (context === undefined) {
    throw new Error('useBetting must be used within a BettingProvider');
  }
  return context;
};