import React from 'react';
import BuyerSidebar from '../components/BuyerSidebar';
import BuyerDashboardContent from '../components/BuyerDashboardContent';

const DashboardBuyer = ({ auctions }) => {
  return (
    <div className="container-fluid" style={{ paddingLeft: '0', paddingRight: '0', overflowX: 'hidden', paddingTop: '70px' }}> {/* Added paddingTop to account for the fixed Navbar */}
      <div className="row no-gutters">
        <BuyerSidebar />
        <BuyerDashboardContent auctions={auctions} />
      </div>
    </div>
  );
};

export default DashboardBuyer;
