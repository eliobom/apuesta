import React, { useState } from 'react';
import { useBetting } from '../context/BettingContext';
import { 
  User, DollarSign, CreditCard, Clock, 
  List, Shield, Settings, LogOut 
} from 'lucide-react';

const AccountPage = () => {
  const { balance } = useBetting();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample bet history data
  const betHistory = [
    { id: 'bet1', event: 'Man City vs Liverpool', selection: 'Liverpool Win', odds: 3.2, stake: 50, result: 'Loss', date: '2023-05-20' },
    { id: 'bet2', event: 'Lakers vs Warriors', selection: 'Lakers Win', odds: 1.9, stake: 100, result: 'Win', date: '2023-05-18' },
    { id: 'bet3', event: 'Lucky Diamond (Slots)', selection: 'Spin', odds: 1.5, stake: 20, result: 'Win', date: '2023-05-15' },
    { id: 'bet4', event: 'Barcelona vs Real Madrid', selection: 'Draw', odds: 3.5, stake: 40, result: 'Loss', date: '2023-05-10' }
  ];

  // Sample transactions data
  const transactions = [
    { id: 'tr1', type: 'Deposit', amount: 500, method: 'Credit Card', date: '2023-05-10' },
    { id: 'tr2', type: 'Withdrawal', amount: 200, method: 'Bank Transfer', date: '2023-05-05' },
    { id: 'tr3', type: 'Bonus', amount: 100, method: 'Welcome Bonus', date: '2023-05-01' }
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-4">
            <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center space-x-4">
                <div className="bg-white p-2 rounded-full">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-white font-semibold">John Doe</h2>
                  <p className="text-indigo-200 text-sm">Member since 2023</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-300 text-sm">Balance</span>
                  </div>
                  <span className="text-white font-bold">${balance.toFixed(2)}</span>
                </div>
              </div>
              
              <nav className="p-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`flex items-center w-full p-3 rounded text-left ${
                    activeTab === 'dashboard'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('bets')}
                  className={`flex items-center w-full p-3 rounded text-left ${
                    activeTab === 'bets'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <List className="h-5 w-5 mr-3" />
                  <span>Bet History</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`flex items-center w-full p-3 rounded text-left ${
                    activeTab === 'transactions'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  <span>Transactions</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full p-3 rounded text-left ${
                    activeTab === 'settings'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </button>
                
                <button
                  className="flex items-center w-full p-3 rounded text-left text-gray-300 hover:bg-slate-700"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="bg-slate-800 rounded-lg shadow-md p-6">
              {/* Dashboard */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-700 rounded-lg p-4 flex flex-col items-center">
                      <DollarSign className="h-8 w-8 text-yellow-400 mb-2" />
                      <span className="text-white font-bold text-2xl">${balance.toFixed(2)}</span>
                      <span className="text-gray-400 text-sm">Current Balance</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4 flex flex-col items-center">
                      <Clock className="h-8 w-8 text-indigo-400 mb-2" />
                      <span className="text-white font-bold text-2xl">14</span>
                      <span className="text-gray-400 text-sm">Active Bets</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4 flex flex-col items-center">
                      <Shield className="h-8 w-8 text-green-400 mb-2" />
                      <span className="text-white font-bold text-2xl">200</span>
                      <span className="text-gray-400 text-sm">Loyalty Points</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Bets</h3>
                  <div className="bg-slate-700 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-600">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Event</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Selection</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Stake</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-600">
                        {betHistory.slice(0, 3).map((bet) => (
                          <tr key={bet.id} className="hover:bg-slate-650">
                            <td className="px-4 py-3 text-sm text-white">{bet.event}</td>
                            <td className="px-4 py-3 text-sm text-white">{bet.selection}</td>
                            <td className="px-4 py-3 text-sm text-white">${bet.stake.toFixed(2)}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                bet.result === 'Win' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                              }`}>
                                {bet.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Deposit</h3>
                    <div className="bg-slate-700 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <DollarSign className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="number"
                              min="10"
                              step="10"
                              className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Enter amount"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                          <select className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="cc">Credit Card</option>
                            <option value="bank">Bank Transfer</option>
                            <option value="paypal">PayPal</option>
                          </select>
                        </div>
                      </div>
                      
                      <button className="mt-6 w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                        Deposit Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Bet History */}
              {activeTab === 'bets' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Bet History</h2>
                  <div className="bg-slate-700 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-600">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Event</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Selection</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Odds</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Stake</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-600">
                        {betHistory.map((bet) => (
                          <tr key={bet.id} className="hover:bg-slate-650">
                            <td className="px-4 py-3 text-sm text-gray-300">{bet.date}</td>
                            <td className="px-4 py-3 text-sm text-white">{bet.event}</td>
                            <td className="px-4 py-3 text-sm text-white">{bet.selection}</td>
                            <td className="px-4 py-3 text-sm text-white">{bet.odds.toFixed(2)}</td>
                            <td className="px-4 py-3 text-sm text-white">${bet.stake.toFixed(2)}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                bet.result === 'Win' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                              }`}>
                                {bet.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Transactions */}
              {activeTab === 'transactions' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Transactions</h2>
                  <div className="bg-slate-700 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-600">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Amount</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-600">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-slate-650">
                            <td className="px-4 py-3 text-sm text-gray-300">{transaction.date}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                transaction.type === 'Deposit' ? 'bg-green-900 text-green-300' : 
                                transaction.type === 'Withdrawal' ? 'bg-red-900 text-red-300' : 
                                'bg-blue-900 text-blue-300'
                              }`}>
                                {transaction.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-white">
                              {transaction.type === 'Withdrawal' ? '-' : ''}
                              ${transaction.amount.toFixed(2)}
                            </td>
                            <td className="px-4 py-3 text-sm text-white">{transaction.method}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Settings */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                      <div className="bg-slate-700 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                            <input
                              type="text"
                              value="John"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                            <input
                              type="text"
                              value="Doe"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                              type="email"
                              value="john.doe@example.com"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                            <input
                              type="tel"
                              value="+1 (555) 123-4567"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        
                        <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
                          Save Changes
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                      <div className="bg-slate-700 rounded-lg p-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                            <input
                              type="password"
                              placeholder="Enter current password"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                            <input
                              type="password"
                              placeholder="Enter new password"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                            <input
                              type="password"
                              placeholder="Confirm new password"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        
                        <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Responsible Gaming</h3>
                      <div className="bg-slate-700 rounded-lg p-6">
                        <p className="text-gray-300 mb-4">
                          Set limits on your betting activity to ensure responsible gaming.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Daily Deposit Limit</label>
                            <input
                              type="number"
                              min="0"
                              step="10"
                              placeholder="Enter limit"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Weekly Deposit Limit</label>
                            <input
                              type="number"
                              min="0"
                              step="50"
                              placeholder="Enter limit"
                              className="block w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        
                        <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors">
                          Set Limits
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;