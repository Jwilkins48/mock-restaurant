import React from 'react'
import '../CSS/social.css'
import card from '../imgs/gift-card.png'

function Social() {
  return (
    <section className='social-section'>
        <div className="social-container">
            <div className="social-inner">
                <div className="social-content">
                    <h2 className='social-title'>BECOME A ROSA'S <span className='social-star'>VIP</span></h2>
                    <p>Join Rosa's Email VIP and you'll receive news, offers and event notifications all in your inbox!</p>
                    <h4>ITS SIMPLE, EASY AND DELICIOUS!</h4>
                    <button className='social-btn'>SIGN UP TODAY</button>
                </div>
                <div className="social-content content-left">
                    <h2>PURCHASE A GIFT CARD</h2>
                    <figure className='social-card'><img width='350px' className='social-img' src={card} alt="gift card" /></figure>
                    <button className='social-btn'>PURCHASE HERE</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Social