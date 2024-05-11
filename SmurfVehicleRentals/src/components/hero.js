import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../components/hero.js'


var heroData =[
    {
        id:1,
        image: require('../assets/chero1.jpg'),
        title: 'Rent A Car with Ease',
        description: 'santa clause is coming to town la la la come on make some description here so it has some shit lmao i love, this section haha how do i kuan this and kuan that',
        link:'https://www.youtube.com/'
    },   
    {
        id:2,
        image: require('../assets/chero2.jpg'),
        title: 'Rent A Car with Ease',
        description: 'santa clause is coming to town la la la come on make some description here so it has some shit lmao i love, this section haha how do i kuan this and kuan that',
        link:'https://www.youtube.com/'
    },   
    {
        id:3,
        image: require('../assets/chero3.jpg'),
        title: 'Rent A Car with Ease',
        description: 'santa clause is coming to town la la la come on make some description here so it has some shit lmao i love, this section haha how do i kuan this and kuan that',
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
            
            <Carousel.Item ker={hero.id}>
                <img className='d -block w-100' src ={hero.image} alt={"Slide " +hero.id}/>
                <Carousel.Caption>
                  <h3>{hero.title}P</h3>
                  <p>{hero.description}</p>
                  <a className='btn btn-primary' href={hero.link}>Learn More</a>
                </Carousel.Caption>
            </Carousel.Item>)

            })
        }
      
      
    </Carousel>
    </section>
  )
}

export default hero
