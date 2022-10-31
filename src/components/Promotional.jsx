import React from 'react'
import '../CSS/promotional.css'
import promoteImg from '../imgs/slide-image-4.jpg'
import bannerImg from '../imgs/life-is-better.png'


function promotional() {
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
                <div className="banner-img">
                    <img src={bannerImg} alt="rosa's banner" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default promotional