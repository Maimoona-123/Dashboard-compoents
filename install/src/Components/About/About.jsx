import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Hotel <span>Bliss</span></h2>
        <p>
          Welcome to Hotel Bliss, where luxury meets comfort. Nestled in the heart of the city, we offer a serene atmosphere with top-notch facilities and impeccable service to make your stay unforgettable.
        </p>

        <div className="about-content">
          <div className="left">
            <h3 className='h3'>Our Story</h3>
            <p>
              Founded in 2005, Hotel Bliss has been providing the finest hospitality to travelers from around the world. We are committed to offering exceptional service, world-class amenities, and a unique experience that guests will cherish forever.
            </p>
          </div>
          <div className="right">
            <img src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg" alt="Hotel Bliss" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
