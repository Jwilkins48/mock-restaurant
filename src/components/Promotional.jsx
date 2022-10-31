import React from 'react'
import '../CSS/promotional.css'
import promoteImg from '../imgs/slide-image-4.jpg'

function promotional() {
  return (
    <div>
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
    </div>
  )
}

export default promotional