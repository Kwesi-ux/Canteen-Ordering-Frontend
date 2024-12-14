import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Serving fresh meals with a side of convenience – Canteen Management System. </p>

        </div>
        <div className="footer-content-center">
            <h2>CANTEEN</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0504918599</li>
                <li>kwesi.amaning811@gmail.com</li>
                <li>Accra, Ghana</li>
            </ul>

        </div>

      </div>
      <hr />
      <p>Copyright &copy; 2023 Canteen Management System</p>
    </div>
  )
}

export default Footer
