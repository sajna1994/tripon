import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSection = () => {
  const partners = [
    '/images/airarabia.png',
    '/images/flyemiritas.png',
    '/images/alhind.png',
    '/images/quatar.jpeg',
    '/images/airindia.png',
    '/images/saudia.png',
    '/images/akbar.png',
    '/images/flydubai.png',
    '/images/flynas.png'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="partners-section">
        <br/>
      <h3 style={{ textAlign: 'center' ,background:"rgb(244, 187, 68)",color:"white"}}>Our Partners</h3><br/><br/>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner} alt={`Partner ${index + 1}`} style={{padding:"20px"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
