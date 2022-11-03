import { useState, useEffect } from 'react';
import '../CSS/promotional.css'
import promoteImg from '../imgs/slide-image-4.jpg'
import bannerImg from '../imgs/life-is-better.png'
import envelope from '../imgs/ico-envelope.png'


function Promotional() {
    const [promoteScroll, setPromoteScroll] = useState(false);
    const [lowerPromoteScroll, setLowerPromoteScroll] = useState(false);


    const handleOnPromoteScroll = () => {
        if (window.scrollY >= 3200) {
            setPromoteScroll(true)
        } else {
            setPromoteScroll(false)
        }
    }
    const handleOnLowPromoteScroll = () => {
        if (window.scrollY >= 3500) {
            setLowerPromoteScroll(true)
        } else {
            setLowerPromoteScroll(false)
        }
    }
    useEffect(() => {
        handleOnPromoteScroll()
        handleOnLowPromoteScroll()
        // add event on scroll
        window.addEventListener("scroll", handleOnPromoteScroll)
        window.addEventListener("scroll", handleOnLowPromoteScroll)

    })

    
  return (
    <section>
        <div className="promote-container">
            <figure className='promote-img'><img alt='black beans' src={promoteImg}></img></figure>
            <div className="promote-content-container">
                <div className="promote-content">
                    <h1>ASK FOR BLACK BEANS</h1>
                    <p>A delicious and healthier option!</p>
                    <a href="/" className='promote-btn'>VIEW OUR MENU</a>
                </div>
            </div>
        </div>

        <div className="banner">
            <div className="banner-container">
                <div className={ promoteScroll ? "banner-img animate__animated animate__zoomIn" : ''}>
                    <img src={bannerImg} alt="rosa's banner" />
                </div>
            </div>
        </div>

        <section className='subscribe-section'>
            <div className="subscribe-container">
                <div className={ lowerPromoteScroll ? "banner-img animate__animated animate__zoomIn subscribe-inner" : 'subscribe-inner'}>
                    <h2 className="subscribe-title">SUBSCRIBE!</h2>
                    <h5 className="subscribe-subtitle">BECOME A ROSA'S VIP</h5>
                    <div className="subscribe-input-container">
                        <img src={envelope} alt='envelope' className='input-icon' />
                        <input placeholder='enter your email here' type="text" className="subscribe-input" />
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Promotional