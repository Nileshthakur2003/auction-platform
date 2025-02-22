import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardBuyer from './pages/DashboardBuyer';
import DashboardSeller from './pages/DashboardSeller';
import PostAuction from './pages/PostAuction';
import AuctionDetail from './pages/AuctionDetails';
import Navbar from './components/NavBar';
import { useState } from 'react';

const App = () => {
  const [auctions, setAuctions] = useState([
    { title: 'Vintage Car', description: 'A classic vintage car.', startingBid: '5000' },
    { title: 'Antique Vase', description: 'A beautiful antique vase.', startingBid: '2000' }
  ]);


  return (
    <Router>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 vw-100 no-scroll-x">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/buyer" element={<DashboardBuyer auctions={auctions} />} />
          <Route path="/seller" element={<DashboardSeller auctions={auctions} />} />
          <Route path="/post-auction" element={<PostAuction />} />
          <Route path="/auction-detail" element={<AuctionDetail item={auctions[0]} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
