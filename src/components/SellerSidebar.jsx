import React from 'react';
import { Link } from 'react-router-dom';

const SellerSidebar = () => {
  return (
    <div className="col-md-2 fixed-left" style={{ paddingLeft: '0', backgroundColor: '#2C3E50', height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
      <ul className="list-group" style={{ marginLeft: '20px', borderRadius: '0px', marginTop: '70px' }}> {/* Added marginTop to account for the fixed Navbar */}
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/" style={{ color: '#ECF0F1', textDecoration: 'none' }}>Home</Link></li>
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/live-auctions" style={{ color: '#ECF0F1', textDecoration: 'none' }}>Live Auctions</Link></li>
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/upcoming-auctions" style={{ color: '#ECF0F1', textDecoration: 'none' }}>Upcoming Auctions</Link></li>
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/my-account" style={{ color: '#ECF0F1', textDecoration: 'none' }}>My Account</Link></li>
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/watchlist" style={{ color: '#ECF0F1', textDecoration: 'none' }}>Watchlist</Link></li>
        <li className="list-group-item" style={{ color: '#ECF0F1', backgroundColor: '#34495E', border: 'none', padding: '15px 20px', marginBottom:'10px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1ABC9C'} onMouseOut={(e) => e.target.style.backgroundColor = '#34495E'}><Link to="/watchlist" style={{ color: '#ECF0F1', textDecoration: 'none' }}>Watchlist</Link></li>
      </ul>
      </div>
  );
}

export default SellerSidebar;