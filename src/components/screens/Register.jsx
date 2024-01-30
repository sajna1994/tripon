
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'
const Register = () => {

  const [passwordsMatch, setPasswordsMatch] = useState(true);


  return (
    <div className="container" style={{marginTop:"100px",padding:"50px"}}>
    <div className="row">
      <div className="col-md-6">
        <div className="card reg p-4" style={{background:"rgb(255, 229, 180)",border:"none"}}>
        <img
  src="/images/head2.png"
  style={{ width: '90px', margin: '0 auto' }}
  alt="Logo"
/>
<h3 className='text-center' style={{color:"orange"}}>Register</h3>

                  <div className="form-group p-1">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                required
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                required
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                required
                autoComplete="new-password"
              />
            </div>

            <div className="form-group p-1">
              <label htmlFor="cpassword">Confirm Password:</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="form-control"
                required
                autoComplete="new-password"
              />
            </div>

            {!passwordsMatch && (
              <p style={{ color: 'red' }}>Passwords do not match.</p>
            )}

    <br/>       
<button
              type="submit"
              // onClick={submitHandler}
              className="btn mt-3"
              style={{ background:"rgb(244, 187, 68)", color: 'white' }}
            >
              Create Your Account
            </button>
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>     
                    <div className="form-group col-lg-12 mx-auto d-flex justify-content-center">
                    <a href="#" className="btn btn-primary btn-block py-2 btn-facebook p-4">
        <i className="fa fa-facebook-f mr-2"></i>
        <span className="font-weight-bold">Continue with Facebook</span>
      </a>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <a href="#" className="btn btn-danger btn-block py-2 btn-google p-4">
        <i className="fa fa-google mr-2"></i>
        <span className="font-weight-bold">Continue with Google</span>
      </a>

</div>

          </div>
        </div>
        <div className="card  col-md-6" style={{border:"none"}}>
        <div className="card  col-md-6" style={{ height: '100%',width:"100%",border:"none"}}>
  <img
    src="/images/hero-img.png"
    alt="registr"
    style={{ width: 'auto', objectFit: 'cover' }}
  />
</div>
</div>

      </div>
    </div>
  );
};

export default Register;
