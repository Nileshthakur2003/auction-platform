import React from 'react';

const BuyerSidebar = () => {
  return (
    <div className="col-md-2 fixed-left" style={{ paddingLeft: '0', backgroundColor: '#C0C0C0', height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: '1000' }}>
      <ul className="list-group" style={{ marginLeft: '20px', borderRadius: '0px', marginTop: '70px' }}> {/* Added marginTop to account for the fixed Navbar */}
        <li className="list-group-item">My Profile</li>
        <li className="list-group-item">Acquired Items</li>
        <li className="list-group-item">Past Bids</li>
        <li className="list-group-item">Recent Transactions</li>
        <li className="list-group-item">Logout</li>
      </ul>
    </div>
  );
};

export default BuyerSidebar;
