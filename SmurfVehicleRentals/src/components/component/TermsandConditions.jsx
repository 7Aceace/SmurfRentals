import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/TC1.jpg';
import image2 from '../../assets/TC2.jpg';
import image3 from '../../assets/TC3.jpg';
import image4 from '../../assets/TC4.jpg';
import image5 from '../../assets/TC5.jpg';
import './TC.css'; 
import FooterN from '../FooterN'
const heroData = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
];

function TermsandConditions() {
  return (
    <section id="home" className="hero-block">
      <div className="hero-container">
        <Carousel>
          {heroData.map((hero) => (
            <Carousel.Item key={hero.id}>
              <img className="d-block w-50 mx-auto" src={hero.image} alt={`Slide ${hero.id}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <FooterN/>
    </section>
   
  );
}

export default TermsandConditions;