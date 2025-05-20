import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Homepage from './pages/Homepage';
import SportsPage from './pages/SportsPage';
import CasinoPage from './pages/CasinoPage';
import AccountPage from './pages/AccountPage';
import BetSlip from './components/betting/BetSlip';
import { BettingProvider } from './context/BettingContext';

function App() {
  return (
    <BettingProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/casino" element={<CasinoPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </main>
          <BetSlip />
          <Footer />
        </div>
      </Router>
    </BettingProvider>
  );
}

export default App;