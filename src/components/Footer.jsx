import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="text-center" style={{ background: "rgb(255, 213, 128)" }}>
      <div className="container p-4">
        <section className="mb-4">
          {/* Social Media Icons */}
          <div className="d-flex justify-content-center">
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>

        <section className="mb-4">
          {/* About Section */}
          <h4>About
            <Link to="/">
              <img src='QWERTYYY-01-1.png' style={{ height: "60px", width: "120px", filter: "brightness(100%)" }} alt="Logo" />
            </Link>
          </h4>
          <p>
            TripOn is a global travel portal dedicated to delivering seamless and diverse travel services, offering everything from flight bookings to tailor-made holidays, all with a commitment to providing a top-notch experience at affordable prices.
          </p>
        </section>

        <section>
          {/* Contact and Quick Links */}
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              {/* Company */}
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">About us</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Services</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Packages</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Careers</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              {/* Quick Links */}
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Kashmir</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Manali</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Malaysia</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Lakshadweep</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              {/* Contact */}
              <h5 className="text-uppercase">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Contact : +91 860 695 2000</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Location : Shop No.02</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Kariparamba,Chemmad.</a>
                </li>
                <li>
                  <a className="text-body" style={{ textDecoration: "none" }} href="#!">Mail : triponind@gmail.com </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ background: "rgb(244, 187, 68)" }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="mailto:triponind@gmail.com"> triponind@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
