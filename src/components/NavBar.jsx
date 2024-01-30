
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src='QWERTYYY-01-1.png' style={{ height: "90px", width: "169px", filter: "brightness(80%)" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "orange" }} // Change the border color to orange
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: "orange"}}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{ fontSize: '19px' }}>
            <li className="nav-item">
              <Link to="/" className="nav-link text-secondary" style={{ marginRight: '1rem' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-secondary">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link text-secondary">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/packages" className="nav-link text-secondary">
                Packages
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center" style={{border:"solid 	#808080" ,borderRadius:"20px"}}>
            <Link className="btn btn-transparent mx-1 text-secondary" to="/login" style={{fontSize:"19px"}}>
              Login
            </Link><img src='/images/icons8-register-16.png' alt='login' style={{height:"30px"}}/>
            <Link className="btn btn-transparent mx-1 text-secondary" to="/register" style={{fontSize:"19px"}}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

