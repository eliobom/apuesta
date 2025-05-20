import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

// Sample casino games data
const casinoGames = [
  {
    id: 'game1',
    name: 'Lucky Diamond',
    category: 'slots',
    provider: 'NetEnt',
    image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    new: false
  },
  {
    id: 'game2',
    name: 'Golden Fortune',
    category: 'slots',
    provider: 'Playtech',
    image: 'https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    new: true
  },
  {
    id: 'game3',
    name: 'Royal Blackjack',
    category: 'table',
    provider: 'Evolution Gaming',
    image: 'https://images.pexels.com/photos/6664193/pexels-photo-6664193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    new: false
  },
  {
    id: 'game4',
    name: 'Vegas Roulette',
    category: 'table',
    provider: 'Pragmatic Play',
    image: 'https://images.pexels.com/photos/7127040/pexels-photo-7127040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false,
    new: false
  },
  {
    id: 'game5',
    name: 'Live Poker',
    category: 'live',
    provider: 'Evolution Gaming',
    image: 'https://images.pexels.com/photos/9142258/pexels-photo-9142258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    new: false
  },
  {
    id: 'game6',
    name: 'Mega Slots',
    category: 'slots',
    provider: 'Microgaming',
    image: 'https://images.pexels.com/photos/6332473/pexels-photo-6332473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false,
    new: true
  },
  {
    id: 'game7',
    name: 'Baccarat Pro',
    category: 'table',
    provider: 'NetEnt',
    image: 'https://images.pexels.com/photos/2318494/pexels-photo-2318494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false,
    new: true
  },
  {
    id: 'game8',
    name: 'Live Baccarat',
    category: 'live',
    provider: 'Evolution Gaming',
    image: 'https://images.pexels.com/photos/1938674/pexels-photo-1938674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    new: false
  }
];

const categories = [
  { id: 'all', name: 'All Games' },
  { id: 'slots', name: 'Slots' },
  { id: 'table', name: 'Table Games' },
  { id: 'live', name: 'Live Casino' },
  { id: 'new', name: 'New Games' },
  { id: 'popular', name: 'Popular' }
];

const providers = [
  { id: 'all', name: 'All Providers' },
  { id: 'NetEnt', name: 'NetEnt' },
  { id: 'Playtech', name: 'Playtech' },
  { id: 'Evolution Gaming', name: 'Evolution Gaming' },
  { id: 'Microgaming', name: 'Microgaming' },
  { id: 'Pragmatic Play', name: 'Pragmatic Play' },
];

const CasinoPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeProvider, setActiveProvider] = useState('all');

  // Filter games based on selected category, provider and search term
  const filteredGames = casinoGames.filter(game => {
    // Filter by category
    if (activeCategory !== 'all') {
      if (activeCategory === 'popular' && !game.popular) return false;
      if (activeCategory === 'new' && !game.new) return false;
      if (activeCategory !== 'popular' && activeCategory !== 'new' && game.category !== activeCategory) return false;
    }
    
    // Filter by provider
    if (activeProvider !== 'all' && game.provider !== activeProvider) return false;
    
    // Filter by search term
    if (searchTerm && !game.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <div className="h-64 w-full bg-gradient-to-r from-indigo-800 to-purple-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/6664227/pexels-photo-6664227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundBlendMode: "overlay",
                opacity: 0.3
              }}
            ></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
              <h1 className="text-4xl font-bold text-white mb-4">Our Casino Games</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Experience the thrill of our virtual casino with hundreds of games to choose from.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-slate-800 rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">Games</h2>
            
            <div className="w-full md:w-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search games"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full md:w-64 pl-10 pr-3 py-2 border border-slate-600 rounded-md bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setActiveProvider(provider.id)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeProvider === provider.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-slate-800 rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Play Now
                  </button>
                </div>
                {game.new && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</div>
                )}
                {game.popular && (
                  <div className="absolute top-2 left-2 flex items-center bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    <Star className="h-3 w-3 mr-1" fill="white" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">{game.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{game.provider}</span>
                  <span className="text-gray-400 text-xs capitalize">{game.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <p className="text-gray-300 text-lg">No games found matching your criteria. Try different filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasinoPage;