import React from 'react'
import van from '../imgs/van.png'

function CaterSection() {
return (
<section className='weCater-section'>
    <div className="cater-container">

        <div className="cater-inner-section">
            <div className="cater-content-section">
                <h1>WE CATER!</h1>
                <h5>LET US CATER YOUR NEXT EVENT</h5>
                <button>LEARN MORE</button>
            </div>

            <div className="van-cater-section">
                <img className='van-img' src={van} alt='van'></img>
            </div>
        </div>

    </div>

</section>
)
}

export default CaterSection