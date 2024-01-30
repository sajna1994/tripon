import React, { useState } from 'react';
import '../styles/Serve.css'; // Import your CSS file
import { Card, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PartnersSection from '../PartnersSection';

const Serve = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { id: 1, title: 'RESERVATIONS AND BOOKINGS', image: '/images/booking-online.png', description: 
    
"Simplify your journey with Tripon's seamless Reservations and Bookings, ensuring hassle-free accommodations, transportation, and experiences for an exceptional travel experience."},
    { id: 2, title: 'HOLIDAY PACKAGES', image: '/images/OIP.jpeg', description: "Explore unparalleled holiday experiences with Tripon's meticulously crafted packages, promising unforgettable moments and extraordinary adventures." },
    { id: 3, title: 'INTERNATIONAL PACKAGES', image: '/images/3272193.png', description: "Embark on a global adventure with Tripon's International Packages, designed for unparalleled experiences and seamless exploration of diverse destinations." },
    { id: 4, title: 'DOMESTIC TOUR PACKAGES', image: '/images/dom.webp', description: "Discover the essence of your own backyard with Tripon's Domestic Tour Packages, offering enriching experiences and memorable journeys within your country's diverse landscapes." },
    { id: 5, title: 'LUXURY PACKAGES', image: '/images/lexuar.png', description: "Indulge in opulence and sophistication with Tripon's Luxury Packages, where every detail is meticulously crafted to elevate your travel experience to the pinnacle of extravagance." },
    { id: 6, title: 'CHAPERON SERVICES', image: '/images/cha.png', description: "Elevate your travel experience with Tripon's Chaperon Services, ensuring personalized and reliable assistance for a seamless and enjoyable journey." },
  ];
  const carouselData = [
    { id: 1,image: '/images/profile1.jpeg' , text: "tripon is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable." },
    { id: 2,image:'/images/profile2.jpeg' , text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no." },
    { id: 3,image:'/images/profile3.jpeg' , text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no." },
    // Add more testimonials as needed
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed of the carousel
  };
  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <div className="row">
        <div className={`col-md-6 p-4`}>
          <h3 style={{ color: 'orange' }}>WHAT WE SERVE</h3>
          <h1 style={{ fontFamily: 'Montserrat' }}>We Provide Top Destinations</h1>
          <h5 style={{ textAlign: 'justify' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </h5>
        </div>
      </div>
      <div className="grid-track">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="image-container">
      <img style={{width:"40vh"}}
        src={`/images/serve${index + 1}.jpg`}
        alt={`Destination ${index + 1}`}
        className="carousel-image"
      />
    </div>
  ))}

      </div><br/>
      <h4 className='text-white bg-dark'>BOOK YOUR  FAVORITE LOCATIONS</h4>
      <button className='btn' style={{background:"rgb(244, 187, 68)",color:"white",padding:"8px 18px",borderRadius:"20px",cursor:"pointer"}}>Book Now</button><br/><br/>
      
    <Row className='m-5'>
      <Col sm={6} style={{marginTop:"50px",width:"400px"}}>
      <h5 className='text-left' style={{color:"orange"}}>HAPPY CUSTOMER</h5>
      <h2 className='text-left' style={{marginBottom:"40px"}}>Testimonials</h2>
      <Slider {...carouselSettings}>
  {carouselData.map((item) => (
    <div key={item.id} >
      <Card className='reg' style={{height:"400px",border:"none"}}>
        <Card.Img
          src={item.image}
          alt={`Profile ${item.id}`}
          className="rounded-circle"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <Card.Body>
          <p>{item.text}</p>
        </Card.Body>
      </Card>
    </div>
  ))}
</Slider>


      </Col>
      <Col sm={6}>
        <div className='container'>
          <img src='/images/hero-img.png' alt='hero' />
        </div>
      </Col>
    </Row>
    <div className="container mt-5 mx-auto shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "auto" }}>
  <h2 className="text-center mb-5" style={{ color: 'white',background:"rgb(244, 187, 68)" }}>Our Services</h2>

  <Row>
            {services.map(service => (
              <Col key={service.id} lg={4} md={6} mb={4} style={{ padding: "10px" }}>
                <Card
                  className={`service h-100  shadow-lg bg-white rounded ${hoveredService === service.id ? 'hovered' : ''}`}
                  style={{ border: "none" }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Card.Img variant="top" src={service.image} style={{ height: "200px", width: "180px", margin: "0 auto", padding: "10px" }} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text style={{ display: hoveredService === service.id ? 'block' : 'none' }}>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

    </div>
<PartnersSection/>
    </div>
  );
};

export default Serve;
