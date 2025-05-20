import React from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBetting } from '../../context/BettingContext';

// Sample data for featured events
const featuredEvents = [
  {
    id: 'event1',
    league: 'Premier League',
    match: 'Manchester City vs Liverpool',
    time: 'Today, 15:00',
    teams: {
      home: { name: 'Manchester City', logo: '🏙️' },
      away: { name: 'Liverpool', logo: '🔴' }
    },
    odds: {
      home: 2.1,
      draw: 3.5,
      away: 3.2
    }
  },
  {
    id: 'event2',
    league: 'La Liga',
    match: 'Barcelona vs Real Madrid',
    time: 'Tomorrow, 20:00',
    teams: {
      home: { name: 'Barcelona', logo: '🔵🔴' },
      away: { name: 'Real Madrid', logo: '⚪' }
    },
    odds: {
      home: 2.4,
      draw: 3.2,
      away: 2.8
    }
  },
  {
    id: 'event3',
    league: 'NBA',
    match: 'Lakers vs Warriors',
    time: 'Today, 22:30',
    teams: {
      home: { name: 'Lakers', logo: '💜💛' },
      away: { name: 'Warriors', logo: '💙💛' }
    },
    odds: {
      home: 1.9,
      draw: 15.0,
      away: 1.85
    }
  },
  {
    id: 'event4',
    league: 'NFL',
    match: 'Chiefs vs Eagles',
    time: 'Sunday, 18:00',
    teams: {
      home: { name: 'Chiefs', logo: '🔴⚪' },
      away: { name: 'Eagles', logo: '🦅' }
    },
    odds: {
      home: 1.75,
      draw: 12.0,
      away: 2.1
    }
  }
];

const FeaturedEvents = () => {
  const { addToBetSlip } = useBetting();

  const handleAddBet = (eventId: string, match: string, selection: string, odds: number) => {
    addToBetSlip({
      id: `${eventId}-${selection.toLowerCase()}`,
      event: match,
      selection,
      odds
    });
  };

  return (
    <div className="relative">
      {/* Slider navigation (for larger screens) */}
      <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden lg:block">
        <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-white">
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden lg:block">
        <button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-white">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredEvents.map((event) => (
          <div key={event.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-slate-700 px-4 py-2 flex justify-between items-center">
              <span className="text-white font-medium">{event.league}</span>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="h-3 w-3 mr-1" />
                <span>{event.time}</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{event.teams.home.logo}</span>
                  <span className="text-white">{event.teams.home.name}</span>
                </div>
                <span className="text-gray-400">vs</span>
                <div className="flex items-center">
                  <span className="text-white">{event.teams.away.name}</span>
                  <span className="text-2xl ml-2">{event.teams.away.logo}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mt-4">
                <button 
                  onClick={() => handleAddBet(event.id, event.match, `${event.teams.home.name} Win`, event.odds.home)}
                  className="bg-slate-700 hover:bg-indigo-600 text-white py-2 px-4 rounded text-center transition-colors"
                >
                  <div className="text-xs text-gray-300">1</div>
                  <div className="font-bold">{event.odds.home.toFixed(2)}</div>
                </button>
                
                <button 
                  onClick={() => handleAddBet(event.id, event.match, 'Draw', event.odds.draw)}
                  className="bg-slate-700 hover:bg-indigo-600 text-white py-2 px-4 rounded text-center transition-colors"
                >
                  <div className="text-xs text-gray-300">X</div>
                  <div className="font-bold">{event.odds.draw.toFixed(2)}</div>
                </button>
                
                <button 
                  onClick={() => handleAddBet(event.id, event.match, `${event.teams.away.name} Win`, event.odds.away)}
                  className="bg-slate-700 hover:bg-indigo-600 text-white py-2 px-4 rounded text-center transition-colors"
                >
                  <div className="text-xs text-gray-300">2</div>
                  <div className="font-bold">{event.odds.away.toFixed(2)}</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;