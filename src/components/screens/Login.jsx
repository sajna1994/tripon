import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Log.css'
const Login = () => {
  // const [user, setUser] = useState({});
  // const navigate = useNavigate();

  // const inputHandler = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitHandler = () => {
  //   axios.post("http://localhost:5000/api/login", user).then((response) => {
  //     if (response.data.message === "Login Success") {
  //       const token = response.data.token;
  //       const user_id = response.data.data._id;
  //       const role = response.data.data.role;
  //       sessionStorage.setItem("userToken", token);
  //       sessionStorage.setItem("userId", user_id);
  //       sessionStorage.setItem("userrole", role);
  //       alert(response.data.message);
  //       if (role === 'admin') {
  //         navigate('/admindashboard');
  //       } else {
  //         navigate('/userdashboard');
  //       }
  //     } else {
  //       alert('Login failed');
  //     }
  //   });
  // };

  return (
    <div>

    <div className="container d-flex justify-content-center align-items-center" style={{marginTop:"40px"}}>

      <div className="card" style={{ border:"none"}}>
        <img
          src="/images/log4.jpg"
          alt="Shoes"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="card log col-md-8 p-4" style={{ width: "30%", background: "rgb(255, 229, 180)", border: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <img src="/images/head2.png" style={{ width: '80px', height: "80px" }} alt="Logo" />
  <h3 className='text-center' style={{color:"orange"}}>Login</h3>

  <div className="mb-3" style={{ marginTop: "20px",width:"100%" }}> <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // onChange={inputHandler}
            required
            className="form-control p-2"
          />
        </div>
        <div className="mb-3" style={{width:"100%"}}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            // onChange={inputHandler}
            required
            className="form-control mb-3 p-2"
          />
        </div>
        <div className="mb-3 form-check">
              <input className="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
              <label className="form-check-label text-secondary" htmlFor="rememberMe">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              // onClick={submitHandler}
              className="btn mb-2"
              style={{ background: "rgb(244, 187, 68)", width: "100%" }}
            >
              Login
            </button>

            <p className="text-secondary text-center">
              Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Login;
