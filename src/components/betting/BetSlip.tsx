import React, { useState } from 'react';
import { useBetting } from '../../context/BettingContext';
import { ShoppingCart, X, ChevronUp, ChevronDown } from 'lucide-react';

const BetSlip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { betSlip, balance, removeFromBetSlip, updateStake, placeBet } = useBetting();

  const totalStake = betSlip.reduce((sum, bet) => sum + (bet.stake || 0), 0);
  const potentialWinnings = betSlip.reduce((sum, bet) => {
    const stake = bet.stake || 0;
    return sum + stake * bet.odds;
  }, 0);

  if (betSlip.length === 0 && isOpen) {
    setIsOpen(false);
  }

  return (
    <div className={`fixed bottom-0 right-0 z-40 transition-all duration-300 ${isOpen ? 'w-full sm:w-80' : 'w-auto'}`}>
      {/* Collapsed betslip header */}
      {!isOpen && betSlip.length > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between bg-indigo-600 text-white py-2 px-4 rounded-tl-md shadow-lg"
        >
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span className="font-semibold">Bet Slip ({betSlip.length})</span>
          </div>
          <ChevronUp className="h-5 w-5 ml-2" />
        </button>
      )}

      {/* Expanded betslip */}
      {isOpen && (
        <div className="bg-slate-800 border border-slate-700 rounded-t-md shadow-xl">
          <div className="flex items-center justify-between bg-indigo-600 text-white py-2 px-4 rounded-t-md">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="font-semibold">Bet Slip ({betSlip.length})</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto p-4 space-y-3">
            {betSlip.map((bet) => (
              <div key={bet.id} className="bg-slate-700 rounded-md p-3 relative">
                <button
                  onClick={() => removeFromBetSlip(bet.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="mb-2">
                  <h4 className="font-medium text-white">{bet.event}</h4>
                  <p className="text-sm text-gray-300">{bet.selection}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-indigo-800 text-white px-2 py-1 rounded text-sm">
                    {bet.odds.toFixed(2)}
                  </div>
                  <input
                    type="number"
                    min="0"
                    step="5"
                    value={bet.stake || ''}
                    onChange={(e) => updateStake(bet.id, Number(e.target.value))}
                    className="w-20 bg-slate-600 text-white border border-slate-500 rounded px-2 py-1 text-right"
                    placeholder="Stake"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">Total Stake:</span>
              <span className="text-white font-medium">${totalStake.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-300">Potential Win:</span>
              <span className="text-green-400 font-medium">${potentialWinnings.toFixed(2)}</span>
            </div>
            
            <button
              onClick={placeBet}
              disabled={totalStake <= 0 || totalStake > balance}
              className={`w-full py-2 px-4 rounded font-medium ${
                totalStake <= 0 || totalStake > balance
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Place Bet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetSlip;