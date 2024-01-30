import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Carousal = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, // Set whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
        <div
          className="col-lg-6 col-md-8 col-sm-10 mx-auto"
          style={{
            alignContent: "center",
            fontFamily: "Montserrat",
            marginBottom: "15%",
            height: "300px",
          }}
        >
<h1
  className="heading"
  data-aos="fade-up"
  style={{
    fontWeight: "500",
    letterSpacing: "2px",
    fontSize: "4em",
    position: "relative",
  }}
>
  It is Better to Travel Well Than to Arrive
  <span
    className="gradient-text"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "linear-gradient(5deg, #ff8c00, #ffffff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    It is Better to Travel Well Than to Arrive
  </span>
</h1>


          <div className='card col-md-12 justify-content-end' style={{fontFamily:"sans-serif",background:"transparent" ,border:"none"}}>
<h5 style={{color:"white"}}>"Escape the ordinary and embrace extraordinary journeys with<Link to="/">
            
              <img src='QWERTYYY-01-1.png' style={{ height: "80px", width: "170px", filter: "brightness(100%)" }} alt="Logo" />
            </Link>"</h5>
          </div>
           
                  </div>
       
      </div>
          <div className="carousel-item">
 
    <img
              src="/images/img1.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
</div>

          <div className="carousel-item active">
          <img
    src="/images/close-up-man-prepared-traveling_23-2151030925.jpg"
    className="d-block w-100"
    style={{ filter: "brightness(40%)" }}
    alt="..."
  />
          </div>
          <div className="carousel-item">
            <img
              src="\images\img2.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/img3.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/img4.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
