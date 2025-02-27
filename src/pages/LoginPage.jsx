import React from 'react';

const LoginPage = () => {
  return (
    <div className="container text-left" style={{ maxWidth: "450px",  background: "#E5E4E2", color: "black" }}>
      <h2 className="text-center my-5" style={{ color: "black" }}>Sign In</h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="form-group m-4">
          <label style={{ color: "black" }}>Email address</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Email Adress" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="form-group m-4">
          <label style={{ color: "black" }}>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="text-center mt-3 mb-3">
          <button type="submit" className="form-control btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
