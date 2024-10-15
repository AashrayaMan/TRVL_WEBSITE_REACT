import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo.png'
import insta from '../Assests/instagram_icon.png'
import pinterest from '../Assests/pintester_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
     <div className="footer_logo">
       <img src={footer_logo} alt="" />
       <p>TRVL</p>
     </div>
     <ul className='footer_links'>
        <li>Company</li>
        <li>Tour</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className="socials">
        <div className="icons">
            <img src={insta} alt="" />
        </div>
        <div className="icons">
            <img src={pinterest} alt="" />
        </div>
        <div className="icons">
            <img src={whatsapp} alt="" />
        </div>
     </div>
     <div className="copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
     </div>
    </footer>
  )
}

export default Footer
