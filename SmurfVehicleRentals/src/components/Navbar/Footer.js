import React from 'react'
import './Footer.css'
import fb from '../../assets/fblogo.png'
import insta from '../../assets/instalogo.png'
import yelp from '../../assets/yelplogo.png'
import google from '../../assets/glogo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>ForBusiness</h4>
                    <a href=''>
                        <p>Employer</p>
                    </a>
                    <a href=''>
                        <p>Emails</p>
                    </a>
                    <a href=''>
                        <p>Meetings</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Resources</h4>
                    <a href=''>
                        <p>Locations</p>
                        </a>
                    <a href=''>
                        <p>Testimonials</p>
                    </a>
                    <a href=''>
                        <p></p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Partners</h4>
                    <a href=''> 
                    <p>Companies</p>
                    </a>
                </div>

                <div className='sb__footer-links_div'>
                    <h4>Company</h4>
                    <a href=''>
                        <p>About</p>
                        </a>
                    <a href=''>
                        <p>Career</p>
                    </a>
                    
                        <p>FAQ</p>
                   
                    <a href=''>
                        <p>Contact</p>
                    </a>
                </div>

                <div className='sb__footer-links-div'>
                    <h4>Coming soon</h4>
                    <div className='socialmedia'>
                        <p><img src={fb} alt='facebook'></img></p>
                        <p><img src={insta} alt='instagram'></img></p>
                        <p><img src={yelp} alt='yelp'></img></p>
                        <p><img src={google} alt='googlereviews'></img></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>

                    <p>
                        @{new Date().getFullYear()} SmurfRentals. All rights reserved.
                    </p>

                </div>
                <div className='sb__footer-below-links'>
                    <a> <div><p>Terms & Conditions</p></div></a>
                    <a> <div><p>Privacy</p></div></a>
                    <a> <div><p>Security</p></div></a>
                    <a> <div><p>Cookies Settings</p></div></a>
                </div>



            </div>
            
        </div>
      
    </div>
  )
}

export default Footer;
