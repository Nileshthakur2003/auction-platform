import React, { useState } from 'react';

const PostAuction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title,
      description,
      startingBid
    };
    console.log('Auction Posted:', newItem);
  };

  return (
    <div className="container text-center">
      <h2>Post Auction</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Starting Bid</label>
          <input
            type="number"
            className="form-control"
            value={startingBid}
            onChange={(e) => setStartingBid(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Post Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;
