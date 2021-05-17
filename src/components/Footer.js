
import React from 'react'
import './Footer.css'
import logo from './logo.svg'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div className="footer">
        <img className="footer__logo" src={logo} alt="" loading="lazy" />
        <h3>Embark on an exciting career with us to learn and grow alongside the best in the industry</h3>
        <hr/>
        
        <SocialIcon bgColor="#6DA6F3"  style={{margin:'20px' }} url="http://linkedin.com/" />
        <SocialIcon bgColor="#6DA6F3" url="http://facebook.com/" />


      
    </div>
  )
}

export default Footer