import React, { useState } from 'react';
import { useBetting } from '../context/BettingContext';
import { FolderRoot as Football, ShoppingBasket as Basketball, Baseline as Baseball, Tent as Tennis, Globe, Search, ChevronDown, ChevronRight } from 'lucide-react';

// Sample sports categories
const sportsCategories = [
  { id: 'soccer', name: 'Soccer', icon: <Football className="h-5 w-5" /> },
  { id: 'basketball', name: 'Basketball', icon: <Basketball className="h-5 w-5" /> },
  { id: 'baseball', name: 'Baseball', icon: <Baseball className="h-5 w-5" /> },
  { id: 'tennis', name: 'Tennis', icon: <Tennis className="h-5 w-5" /> },
  { id: 'other', name: 'More Sports', icon: <Globe className="h-5 w-5" /> }
];

// Sample matches data
const matchesData = [
  {
    category: 'soccer',
    league: 'Premier League',
    matches: [
      {
        id: 'match1',
        home: 'Arsenal',
        away: 'Chelsea',
        time: '14:00',
        date: 'Today',
        odds: { home: 2.3, draw: 3.2, away: 3.0 }
      },
      {
        id: 'match2',
        home: 'Man United',
        away: 'Tottenham',
        time: '16:30',
        date: 'Today',
        odds: { home: 1.9, draw: 3.5, away: 4.1 }
      }
    ]
  },
  {
    category: 'soccer',
    league: 'La Liga',
    matches: [
      {
        id: 'match3',
        home: 'Barcelona',
        away: 'Real Madrid',
        time: '20:00',
        date: 'Tomorrow',
        odds: { home: 2.4, draw: 3.2, away: 2.8 }
      },
      {
        id: 'match4',
        home: 'Atletico Madrid',
        away: 'Sevilla',
        time: '18:45',
        date: 'Tomorrow',
        odds: { home: 1.7, draw: 3.6, away: 5.0 }
      }
    ]
  },
  {
    category: 'basketball',
    league: 'NBA',
    matches: [
      {
        id: 'match5',
        home: 'Lakers',
        away: 'Warriors',
        time: '22:30',
        date: 'Today',
        odds: { home: 1.9, draw: 15.0, away: 1.85 }
      },
      {
        id: 'match6',
        home: 'Celtics',
        away: 'Bucks',
        time: '20:15',
        date: 'Tomorrow',
        odds: { home: 2.1, draw: 17.0, away: 1.75 }
      }
    ]
  }
];

const SportsPage = () => {
  const [activeCategory, setActiveCategory] = useState('soccer');
  const [expandedLeagues, setExpandedLeagues] = useState<string[]>([]);
  const { addToBetSlip } = useBetting();

  const toggleLeague = (league: string) => {
    if (expandedLeagues.includes(league)) {
      setExpandedLeagues(expandedLeagues.filter(l => l !== league));
    } else {
      setExpandedLeagues([...expandedLeagues, league]);
    }
  };

  const handleAddBet = (matchId: string, matchName: string, selection: string, odds: number) => {
    addToBetSlip({
      id: `${matchId}-${selection.toLowerCase()}`,
      event: matchName,
      selection,
      odds
    });
  };

  const filteredMatches = matchesData.filter(
    data => data.category === activeCategory
  );

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar */}
          <div className="lg:w-64 space-y-4">
            <div className="bg-slate-800 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold text-white mb-4">Sports</h2>
              <div className="space-y-2">
                {sportsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center w-full p-2 rounded ${
                      activeCategory === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
              <div className="space-y-2">
                <button className="flex items-center w-full p-2 text-gray-300 hover:bg-slate-700 rounded">
                  <span className="mr-3">🔥</span>
                  <span>Live Now</span>
                </button>
                <button className="flex items-center w-full p-2 text-gray-300 hover:bg-slate-700 rounded">
                  <span className="mr-3">⚡</span>
                  <span>Starting Soon</span>
                </button>
                <button className="flex items-center w-full p-2 text-gray-300 hover:bg-slate-700 rounded">
                  <span className="mr-3">⭐</span>
                  <span>My Favorites</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="bg-slate-800 rounded-lg shadow-md">
              {/* Search bar */}
              <div className="p-4 border-b border-slate-700">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search events"
                    className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Events */}
              <div className="divide-y divide-slate-700">
                {filteredMatches.map((leagueData) => (
                  <div key={leagueData.league} className="p-4">
                    <button
                      onClick={() => toggleLeague(leagueData.league)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h3 className="text-lg font-medium text-white">{leagueData.league}</h3>
                      {expandedLeagues.includes(leagueData.league) ? (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    
                    {expandedLeagues.includes(leagueData.league) && (
                      <div className="mt-4 space-y-4">
                        {leagueData.matches.map((match) => (
                          <div key={match.id} className="bg-slate-700 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center text-gray-300 text-sm">
                                <span>{match.date}, {match.time}</span>
                              </div>
                              <div className="text-sm text-indigo-400">
                                +25 more bets
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-white font-medium">{match.home}</span>
                              <span className="text-gray-400">vs</span>
                              <span className="text-white font-medium">{match.away}</span>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <button 
                                onClick={() => handleAddBet(match.id, `${match.home} vs ${match.away}`, `${match.home} Win`, match.odds.home)}
                                className="bg-slate-600 hover:bg-indigo-600 text-white py-2 px-3 rounded text-center transition-colors"
                              >
                                <div className="text-xs text-gray-300">1</div>
                                <div className="font-bold">{match.odds.home.toFixed(2)}</div>
                              </button>
                              
                              <button 
                                onClick={() => handleAddBet(match.id, `${match.home} vs ${match.away}`, 'Draw', match.odds.draw)}
                                className="bg-slate-600 hover:bg-indigo-600 text-white py-2 px-3 rounded text-center transition-colors"
                              >
                                <div className="text-xs text-gray-300">X</div>
                                <div className="font-bold">{match.odds.draw.toFixed(2)}</div>
                              </button>
                              
                              <button 
                                onClick={() => handleAddBet(match.id, `${match.home} vs ${match.away}`, `${match.away} Win`, match.odds.away)}
                                className="bg-slate-600 hover:bg-indigo-600 text-white py-2 px-3 rounded text-center transition-colors"
                              >
                                <div className="text-xs text-gray-300">2</div>
                                <div className="font-bold">{match.odds.away.toFixed(2)}</div>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;