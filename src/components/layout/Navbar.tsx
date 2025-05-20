import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, DollarSign, Award } from 'lucide-react';
import { useBetting } from '../../context/BettingContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { balance } = useBetting();

  return (
    <nav className="bg-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
            >
              <Award className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">BoltBet</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/sports"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sports
              </Link>
              <Link
                to="/casino"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Casino
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <div className="flex items-center bg-slate-700 px-3 py-1 rounded-md">
              <DollarSign className="h-4 w-4 text-yellow-400" />
              <span className="text-white font-semibold">${balance.toFixed(2)}</span>
            </div>
            <Link
              to="/account"
              className="bg-indigo-600 p-1 rounded-full text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sports"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sports
            </Link>
            <Link
              to="/casino"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Casino
            </Link>
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center bg-slate-700 px-3 py-1 rounded-md">
                <DollarSign className="h-4 w-4 text-yellow-400" />
                <span className="text-white font-semibold">${balance.toFixed(2)}</span>
              </div>
              <Link
                to="/account"
                className="bg-indigo-600 p-1 rounded-full text-white hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;