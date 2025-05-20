import React from 'react';
import { Link } from 'react-router-dom';
import { Dice5, Car as Cards, Users, Joystick } from 'lucide-react';

// Sample data for game categories
const categories = [
  {
    id: 'slots',
    name: 'Slots',
    icon: <Joystick className="h-8 w-8" />,
    color: 'from-purple-600 to-indigo-700',
    games: 120,
    image: 'https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'table-games',
    name: 'Table Games',
    icon: <Cards className="h-8 w-8" />,
    color: 'from-red-600 to-orange-700',
    games: 45,
    image: 'https://images.pexels.com/photos/6664193/pexels-photo-6664193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'live-casino',
    name: 'Live Casino',
    icon: <Users className="h-8 w-8" />,
    color: 'from-green-600 to-teal-700',
    games: 30,
    image: 'https://images.pexels.com/photos/7127040/pexels-photo-7127040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'dice-games',
    name: 'Dice Games',
    icon: <Dice5 className="h-8 w-8" />,
    color: 'from-blue-600 to-indigo-700',
    games: 15,
    image: 'https://images.pexels.com/photos/2318494/pexels-photo-2318494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample popular games data
const popularGames = [
  {
    id: 'game1',
    name: 'Lucky Spin',
    category: 'Slots',
    image: 'https://images.pexels.com/photos/1938674/pexels-photo-1938674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'game2',
    name: 'Blackjack Pro',
    category: 'Table Games',
    image: 'https://images.pexels.com/photos/9142258/pexels-photo-9142258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'game3',
    name: 'Live Roulette',
    category: 'Live Casino',
    image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'game4',
    name: 'Mega Fortune',
    category: 'Slots',
    image: 'https://images.pexels.com/photos/6332473/pexels-photo-6332473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const GameCategories = () => {
  return (
    <div>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/casino?category=${category.id}`}
            className="relative overflow-hidden rounded-lg group"
          >
            <div className="absolute inset-0 bg-gradient-to-br bg-black opacity-70 group-hover:opacity-50 transition-opacity"></div>
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className={`p-3 rounded-full bg-gradient-to-br ${category.color} mb-3`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
              <p className="text-gray-300 text-sm">{category.games} Games</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Games */}
      <h3 className="text-xl font-bold text-white mb-6">Popular Games</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {popularGames.map((game) => (
          <div 
            key={game.id}
            className="bg-slate-700 rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  Play Now
                </button>
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-white font-medium">{game.name}</h4>
              <p className="text-gray-400 text-sm">{game.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCategories;