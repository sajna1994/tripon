import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../components/styles/About.css'
const About = () => {
    useEffect(()=>{
        AOS.init({
            duration:3000,
            offset:200,
            
        });
    },[]);
    
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const handleReadLess = () => {
        setIsExpanded(false);
    };
   
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <h2 style={{textAlign:"center",background:"rgb(244, 187, 68)",color:"white"}}> <Link to="/">
              <img src='QWERTYYY-01-1.png' style={{ height: "70px", width: "150px"}} alt="Logo" />
            </Link> WELCOMES YOU TRIP TO THE WORLD</h2>
            <div className="row">
            <div className={`col-md-6 p-4`} data-aos="fade-up">
                    <h3 style={{ color: "orange" }}>ABOUT US</h3>
                    <h1 style={{ fontFamily: "Montserrat" }}>Explore All Corners of The World With Us</h1>
                    <h5 style={{ textAlign: 'justify' }}>
                        {isExpanded ? (
                            <>
                           Our team of experienced travel professionals is always at hand to help you plan your trip, answer your queries, and offer personalized recommendations based on your preferences. We are committed to providing you with the best possible travel experience, and we go the extra mile to ensure that your trip is a success.

So, whether you’re planning a solo trip, a family vacation, or a romantic getaway, let TripOn take care of all your travel needs. With us, you can travel with confidence, knowing that you’re in good hands. Book your next trip with TripOn today and get ready to explore the world.

“The world is a book and those who do not travel read only one page.” – Saint Augustine

Planning a solo trip / family vacation / a romantic getaway ?

Let TripOn take care of all your travel needs. With us, you can travel with confidence, knowing that you’re in good hands. Book your next trip with TripOn today and get ready to explore the world. </>
                        ) : (
                            <>
                            Welcome to TripOn, the global travel portal that brings the world to your doorstep. At TripOn, we understand that travel is more than just a way to get from point A to point B. It’s an experience that broadens your horizons, exposes you to new cultures, and creates memories that last a lifetime.

We take great pride in providing hassle-free travel services to our customers, ensuring that their travel experience is seamless from start to finish. Our diverse range of services includes domestic and international flight booking, tailor-made and inclusive holidays, hotel reservations, visa services, travel insurance, and much more.

At TripOn, we believe that every traveler deserves the best possible experience. That’s why we work tirelessly to provide world-class services at affordable prices. Whether you’re a budget traveler or a luxury seeker, we have something to offer to everyone.</>
                        )}
                    </h5>
                    {isExpanded ? (
                        <button
                            className="btn btn-outline-warning"
                            style={{
                                margin: "15px",
                                color: 'white',
                                background: 'orange',
                                cursor: 'pointer',
                                borderRadius: '20px',
                                padding: '8px 20px',
                            }}
                            onClick={handleReadLess}
                        >
                            Read Less
                        </button>
                    ) : (
                            <button
                                className="btn btn-outline-warning"
                                style={{
                                    margin: "15px",
                                    color: 'white',
                                    background: 'rgb(244, 187, 68)',
                                    cursor: 'pointer',
                                    borderRadius: '20px',
                                    padding: '8px 20px',
                                }}
                                onClick={handleReadMore}
                            >
                                Read More
                            </button>
                        )}
                </div>
                <div className={`col-md-3`} data-aos="fade-up">

                    <img
                        src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlJTIwdHJhdmVsfGVufDB8fDB8fHww"
                        alt="advn"
                        style={{ width: '100%', height: '60vh', marginTop: "20px" }}
                    />
                </div>
                <div className={`col-md-3`} data-aos="fade-up">

                    <img
                        src="https://indeedholidays.com/data/thumbs/places/thumbnail.srinagar.jpg"
                        alt="kashmir"
                        style={{ width: '100%', height: '60vh', marginTop: "170px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
