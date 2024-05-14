import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../components/hero.js'

import { Link } from 'react-router-dom';
var heroData =[
    {
        id:1,
        image: require('../assets/chero1.jpg'),
        title: 'Rent A Car with Ease',
        description: 'Unlock Your Next Adventure with Smurf Vehicle Rentals. We offer the best car rental services in the country. Book now and get 10% off on your first booking.',
        link:'https://www.youtube.com/'
    },   
    {
        id:2,
        image: require('../assets/chero2.jpg'),
        title: 'Rent A Car with Ease',
        description: 'Unlock Your Next Adventure with Smurf Vehicle Rentals. We offer the best car rental services in the country. Book now and get 10% off on your first booking.',
        link:'https://www.youtube.com/'
    },   
    {
        id:3,
        image: require('../assets/chero3.jpg'),
        title: 'Rent A Car with Ease',
        description: 'Unlock Your Next Adventure with Smurf Vehicle Rentals. We offer the best car rental services in the country. Book now and get 10% off on your first booking.',
        link:'https://www.youtube.com/'
    }   
]


function hero() {
  return (
    <section id="home" className='hero-block'> 
    <Carousel>
        {
            heroData.map( hero => {
            return(
            
                <Carousel.Item key={hero.id}>
                <img className='d-block w-100' src={hero.image} alt={"Slide " + hero.id}/>
                <Carousel.Caption>
                  <h3>{hero.title}</h3>
                  <p>{hero.description}</p>
                  <a className='btn btn-primary' href={hero.link}>
                    <Link className = 'text-white no-underline'to='/Bookings'>Book Now</Link></a>
                </Carousel.Caption>
              </Carousel.Item>
              )

            })
        }
      
      
    </Carousel>
    </section>
  )
}

export default hero
