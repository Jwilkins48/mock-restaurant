import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header'
import taco from '../imgs/product-large.png'
import '../CSS/home.css'
import CaterSection from './CaterSection'
import Social from './Social'
import Promotional from './Promotional'
import 'animate.css';

function Home() {
  const [backToTop, setBackToTop] = useState(false);
  const [checked, setChecked] = useState(false);

return (
<section id='Home'>
  <Header setChecked={setChecked} checked={checked} />

  <div className="home-display-container">
    <div className="inner-display ">
      {/* HOME IMAGE */}
      <div className="figure-container">
        <figure className='product-figure '>
          <img className='product-img' src={taco} alt="taco" />
          <figcaption style={{display: checked ? 'none' : 'block'}} className='product-caption'>
            <span className='caption'>tuesdays<br /> <small>were <br /> made for <br /></small>tacos</span>
          </figcaption>
        </figure>
      </div>

      <div className="product-content">
        <div className="content-container">
          <h6 className='content-header'>TUESDAYS JUST GOT BETTER.</h6>
          <p className='home-message'>Your choice of three beef or chicken tacos, crispy or soft, plus rice and beans
            for only $5.49 every Tuesday, starting at 10:30 AM! Spice it up the way you like with Rosa’s FREE Salsa
            Bar.
          </p>
          <span className='product-price'>$5.49</span>
          <a className='view-menu-btn' href='/'>VIEW MENU <i class='ico-arrows menu-arrow'></i></a>
        </div>
      </div>
    </div>
  </div>

  <CaterSection />
  <Social />
  <Promotional />

  <footer className='footer'>
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <nav>
            <ul>
              <li>PRESS</li>
              <li>CONTACT</li>
              <li>SUBSCRIBE</li>
            </ul>
          </nav>

          <div className="footer-socials">
            <ul>
              <li><i className='footer-facebook'></i></li>
              <li><i className='footer-instagram'></i></li>
              <li><i className='footer-twitter'></i></li>
            </ul>
          </div>

          <ul className="footer-links">
            <li className='small-footerLink'>SITE DESIGNED BY ALGO+RHYTHM </li>
            <li className='footerLink policy'> PRIVACY POLICY </li>
            <li className='footerLink'> TERMS OF SERVICE </li>
          </ul>

        </div>
        <div className="footer-right">
          <a onMouseOver={()=> setBackToTop(true)} onMouseLeave={() => setBackToTop(false)} href='#Home' className={ backToTop ? "animate__animated animate__tada back-to-top-container" : 'back-to-top-container'}>
            <i className='to-top-arrow'></i>
            <span>BACK TO TOP</span>
          </a>
          <p>AUTHENTIC IS OUR SPECIAL INGREDIENT</p>
        </div>
      </div>
    </div>
  </footer>

</section>
)
}

export default Home