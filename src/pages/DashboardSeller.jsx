import React from 'react';
import Sidebar from '../components/SellerSidebar';
import ActiveListings from '../components/SellerActiveListing';
import PastSales from '../components/PastSales';
import Messages from '../components/Messages';

const DashboardSeller = () => {
  
  const activeListings = [
    { title: 'Vintage Vase', description: 'A beautiful vintage vase.', startingBid: '$50' },
    { title: 'Antique Clock', description: 'A rare antique clock.', startingBid: '$150' },
    { title: 'Painting', description: 'A stunning landscape painting.', startingBid: '$200' },
  ];

  
  const pastSales = [
    { title: 'Old Coin', description: 'A rare old coin.', soldFor: '$75' },
    { title: 'Handcrafted Jewelry', description: 'Beautiful handcrafted jewelry.', soldFor: '$120' },
  ];

  
  const messages = [
    { subject: 'Query about Vintage Vase', content: 'Is the vase still available?' },
    { subject: 'Payment Received', content: 'We have received your payment for the antique clock.' },
  ];

  return (
    <div className="container-fluid" style={{ paddingLeft: '0', paddingRight: '0', overflowX: 'hidden', paddingTop: '70px' }}> {/* Added paddingTop to account for the fixed Navbar */}
      <div className="row no-gutters">
        <Sidebar />
        <div className="col-md-10 offset-md-2" style={{ paddingRight: '0', padding: '20px', overflowY: 'scroll', height: '100vh' }}>
          <h2>Seller Dashboard</h2>
          <ActiveListings activeListings={activeListings} />
          <PastSales pastSales={pastSales} />
          <Messages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSeller;
