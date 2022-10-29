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
                <div className="gallery-item"><figure className="gallery-item-img gallery1"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery2"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery3"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery4"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery5"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery6"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery7"><a href='/'></a></figure></div>     
                <div className="gallery-item"><figure className="gallery-item-img gallery8"><a href='/'></a></figure></div>               
                <div className="gallery-item"><figure className="gallery-item-img gallery9"><a href='/'></a></figure></div>                
                <div className="gallery-item"><figure className="gallery-item-img gallery10"><a href='/'></a></figure></div>                
                <div className="gallery-item"><figure className="gallery-item-img gallery11"><a href='/'></a></figure></div>
                <div className="gallery-item"><figure className="gallery-item-img gallery12"><a href='/'></a></figure></div>
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