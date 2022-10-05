import React from 'react'
import logo from '../imgs/rosas-logo1.png'

function Header() {
  return (
    <header className='Header'>
      <div className="top-header-container">
        <nav className='top-header'>
            <ul className='top-navList hiddenMobile'>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
      </div>

      <div className="bottom-header-container">
        <div className="bottom-header-items">
            <a href='#Home' className="main-logo">
                <img width='150px' src={logo} alt='logo' className='logo'></img>
            </a>

            <div className="mobile-rightSide">
                <i class="fa-solid fa-location-dot"></i>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div className="locations-dropdown hiddenMobile">
            
            </div>

            <nav className='main-navList-container hiddenMobile'>
                <ul className='navList'>
                    <li>MENU</li> {/* Dropdown */}
                    <li>CATERING</li>
                    <li>GIFT CARDS</li>
                    <li>CAREERS</li>
                    <li>VIP</li>
                    <li>NUTRITION</li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
