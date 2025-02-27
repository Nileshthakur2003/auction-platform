import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container text-left" style={{maxWidth:"450px" ,  background:"#E5E4E2" , color:"black"}}>
      <h2 className="text-center my-5">Sign Up</h2>
      <form className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="form-group m-4">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Enter username" />
        </div>
        <div className="form-group m-4">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-4">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="text-center mt-3 mb-3">
          <button type="submit" className="form-control btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
