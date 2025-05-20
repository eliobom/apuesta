import React from 'react';
import { Link } from 'react-router-dom';
import { CaseSensitive, Dice5, Clock, Zap, Trophy } from 'lucide-react';
import FeaturedEvents from '../components/home/FeaturedEvents';
import GameCategories from '../components/home/GameCategories';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundBlendMode: "overlay",
            opacity: 0.3
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-indigo-400">BoltBet</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Experience the thrill of online sports betting and casino games. Place your bets and win big!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/sports"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              Sports Betting
            </Link>
            <Link
              to="/casino"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-100 transition duration-150"
            >
              Casino Games
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Why Choose BoltBet
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">Fast Payouts</h3>
                <p className="mt-2 text-center text-gray-400">Get your winnings quickly with our fast payout system.</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <CaseSensitive className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">Secure Platform</h3>
                <p className="mt-2 text-center text-gray-400">Your data and funds are protected with advanced security measures.</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">24/7 Betting</h3>
                <p className="mt-2 text-center text-gray-400">Bet anytime, anywhere with our always-available platform.</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-700 rounded-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">Best Odds</h3>
                <p className="mt-2 text-center text-gray-400">We offer competitive odds to maximize your potential winnings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Featured Events</h2>
            <Link to="/sports" className="text-indigo-400 hover:text-indigo-300">
              View All
            </Link>
          </div>
          <FeaturedEvents />
        </div>
      </div>

      {/* Game Categories */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Popular Casino Games</h2>
            <Link to="/casino" className="text-indigo-400 hover:text-indigo-300">
              View All
            </Link>
          </div>
          <GameCategories />
        </div>
      </div>
    </div>
  );
};

export default Homepage;