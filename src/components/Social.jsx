import React from 'react'
import '../CSS/social.css'
import card from '../imgs/gift-card.png'
import event from '../imgs/event-img.png'
import { useState, useEffect } from 'react';

function Social() {

    const [topSocialScroll, setTopSocialScroll] = useState(false);
    const [lowerSocialScroll, setLowerSocialScroll] = useState(false);
    const [breakfastScroll, setBreakfastScroll] = useState(false);

    const onScrollSocial = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 1300) {
            setTopSocialScroll(true)
        } else {
            setTopSocialScroll(false)
        }
    }

    const onScrollLowerSocial = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 1600) {
            setLowerSocialScroll(true)
        } else {
            setLowerSocialScroll(false)
        }
    }

    const onScrollBreakfast = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 2100) {
            setBreakfastScroll(true)
        } else {
            setBreakfastScroll(false)
        }
    }
    useEffect(() => {
        onScrollSocial()
        onScrollLowerSocial()
        onScrollBreakfast()
        // add event on scroll
        window.addEventListener("scroll", onScrollSocial)
        window.addEventListener("scroll", onScrollLowerSocial)
        window.addEventListener("scroll", onScrollBreakfast)
      })
return (
<div id="social">

    <section className='social-section'>
        <div className="social-container">
            <div className="social-inner">
                <div className={topSocialScroll ? 'social-content animate__animated animate__slideInLeft' : 'social-content'}>
                    <h2 className='social-title'>BECOME A ROSA'S <span className='social-star'>VIP</span></h2>
                    <p>Join Rosa's Email VIP and you'll receive news, offers and event notifications all in your inbox!
                    </p>
                    <h4>ITS SIMPLE, EASY AND DELICIOUS!</h4>
                    <button className='social-btn'>SIGN UP TODAY</button>
                </div>
                <div className={topSocialScroll ? 'social-content content-left animate__animated animate__slideInRight' : 'social-content content-left'}>
                    <h2>PURCHASE A GIFT CARD</h2>
                    <figure className='social-card'><img width='350px' className='social-img' src={card}
                            alt="gift card" /></figure>
                    <button className='social-btn'>PURCHASE HERE</button>
                </div>
            </div>
        </div>

    </section>

    <section className="socialMedia">
        <div className="socialMedia-container">
            <div className="socialMedia-section-inner">
                <div className="socials">
                    <ul className={lowerSocialScroll ? 'animate__animated animate__tada' : ''} >
                        <li>
                            <span><i className='facebook'></i></span>
                            <p>FACEBOOK</p>
                        </li>
                        <li>
                            <span><i className='instagram'></i></span>
                            <p>INSTAGRAM</p>
                        </li>
                        <li>
                            <span><i className='twitter'></i></span>
                            <p>TWITTER</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="event-section">
        <div className="event-container">
            <div className="event-inner">
                <figure className={breakfastScroll ? 'animate__animated animate__slideInLeft event-img' : 'event-img'}><img src={event} alt="dinner plate" /></figure>

                <div className={breakfastScroll ? 'animate__animated animate__slideInRight event-content' : 'event-content'}>
                    <h3>YOU'LL LOVE OUR BREAKFAST TACOS, BOWLS, AND PLATES!</h3>
                    <h4 className='event-subtitle'>6:30 - 10:30 a.m. daily</h4>
                    <button className='social-btn'>VIEW THE MENU</button>
                </div>
            </div>
        </div>

    </section>
</div>
)
}

export default Social