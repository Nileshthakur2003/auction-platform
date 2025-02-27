import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#2C3E50' }}>
      <Link className="navbar-brand" to="/" style={{ fontSize: '24px', marginLeft: '10px', color: '#ECF0F1' }}>Auction Site</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{ color: '#ECF0F1' }}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto" style={{ fontSize: '16px' , }}>
          <li className="nav-item">
            <Link className="nav-link" to="/live-auctions" style={{ color: '#ECF0F1' }}>Live Auctions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upcoming-auctions" style={{ color: '#ECF0F1' }}>Upcoming Auctions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-account" style={{ color: '#ECF0F1' }}>My Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/watchlist" style={{ color: '#ECF0F1' }}>Watchlist</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sell-item" style={{ color: '#ECF0F1' }}>Sell an Item</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications" style={{ color: '#ECF0F1' }}>Notifications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin" style={{ color: '#ECF0F1' }}>Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup" style={{ color: '#ECF0F1' }}>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard" style={{ color: '#ECF0F1' }}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recent-auctions" style={{ color: '#ECF0F1' }}>Recent Auctions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
