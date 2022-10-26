import React from 'react'
import van from '../imgs/van.png'

function CaterSection() {
return (
<section className='weCater-section'>
    <div className="cater-container">
        <div className="cater-content-section">
            <h1>WE CATER!</h1>
            <h5>LET US CATER YOUR NEXT EVENT</h5>
            <button>LEARN MORE</button>
        </div>

        <div className="van-cater-section">
            <img className='van-img' src={van} alt='van'></img>
        </div>
    </div>

    <div className="gallery-section">
        <div className="gallery-content">
            <div className="all-gallery-items">
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 1' src={require('../imgs/gallery-section/gallery-1.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 2' src={require('../imgs/gallery-section/gallery-2.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 3' src={require('../imgs/gallery-section/gallery-3.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 4' src={require('../imgs/gallery-section/gallery-4.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 5' src={require('../imgs/gallery-section/gallery-5.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 6' src={require('../imgs/gallery-section/gallery-6.jpg')}></img></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 7' src={require('../imgs/gallery-section/gallery-7.jpg')}></img></figure></div>    
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 8' src={require('../imgs/gallery-section/gallery-8.jpg')}></img></figure></div>     
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 9' src={require('../imgs/gallery-section/gallery-9.jpg')}></img></figure></div>               
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 10' src={require('../imgs/gallery-section/gallery-10.jpg')}></img></figure></div>                
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 11' src={require('../imgs/gallery-section/gallery-11.jpg')}></img></figure></div>                
                <div className="gallery-item"><figure className="gallery-item-img"><img alt='gallery img 12' src={require('../imgs/gallery-section/gallery-12.jpg')}></img></figure></div>
            </div>
        </div>

        <div className="gallery-actions">
            <button className='gallery-btn'>VIEW OUR MENU</button>
        </div>
    </div>

</section>
)
}

export default CaterSection