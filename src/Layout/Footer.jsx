import React from 'react'
import footerLogo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_logo">
          <img src={footerLogo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className='footer_links'>
          <li>Company</li>
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer_social_links">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>

        <div className="footer_copyright">
          <hr />
          <p>Copyright © 2025 - All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
