import React from 'react'
import Header from './Header'
import taco from '../imgs/product-large.png'
import '../CSS/home.css'

function Home() {
  return (
    <section id='Home'>
        <Header />

        <div className="home-display-container">

          <div className="inner-display">
              <figure className='product-figure'>
                <img className='product-img' src={taco} alt="taco" />
                <figcaption className='product-caption'>
                  <span>tuesdays<br /> <small>were <br /> made for <br /></small>tacos</span>
                </figcaption>
              </figure>

              <div className="product-content">
                <h6>TUESDAYS JUST GOT BETTER.</h6>
                <p>Your choice of three beef or chicken tacos, crispy or soft, plus rice and beans
                  for only $5.49 every Tuesday, starting at 10:30 AM! Spice it up the way you like with Rosa’s FREE Salsa Bar.
                </p>
                <span className='product-price'>$5.49</span>
                <a href='#'>VIEW MENU <i class='ico-arrows'></i></a>
              </div>
            </div>
        </div>
      
    </section>
  )
}

export default Home
