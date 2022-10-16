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
            <div className="display-container">
              <figure className='product-img'>
                <img width='580px' src={taco} alt="taco" />
                <figcaption className='product-caption'>
                  <span>tuesdays<br /> <small>were <br /> made for <br /></small>tacos</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Home
