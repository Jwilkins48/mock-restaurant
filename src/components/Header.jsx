import logo from '../imgs/rosas-logo1.png'
import '../CSS/dropdown.css'
import { useState } from 'react';

function Header() {
const [checked, setChecked] = useState(false);
const [locationChecked, setLocationChecked] = useState(false);
const styles = {
  dropdownNav:{
    top: checked ? '10px' : null,
    transitionDuration: '.35s',
  },
  dropdownBtn:{
    top: checked ? '42px' : null,
    transitionDuration: '.35s',
  }
}

const handleCheckbox = () => {
  setChecked(!checked)
}
// LOCATION DROPDOWN BTN
const handleButtonClick = () => {
setLocationChecked(!locationChecked)
}

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

  <div style={styles.dropdownNav} className="bottom-header-container">
    <div className="bottom-header-items">
      <a href='#Home' className="main-logo">
        <img width='150px' src={logo} alt='logo' className='logo'></img>
      </a>

      <hr className='logo-hr hiddenMobile' />

      <div className="mobile-rightSide">
        {/* LOCATIONS DROPDOWN */}
        <button onClick={handleButtonClick} id='locationBtn'></button>
        <div 
          className="locations-hover-container">
          <label className='location-button' htmlFor="locationBtn"><i
              class="fa-solid fa-location-dot locationLogo"></i></label>
          <div onMouseOver={()=> setLocationChecked(true)} onMouseLeave={() => setLocationChecked(false)}>
          <div className=" hiddenMobile location-label-container">
            <h3 className='locations-label'>LOCATIONS</h3>
            <i onClick={handleButtonClick} class="down-arrow fa-solid fa-sort-down"></i>
          </div>
          
          {/* <span className="location_arrow_box"></span> */}
          <ul id={locationChecked ? 'location-pressed' : 'location-notPressed' } className='slide'>
          <span className="location_arrow_box"></span>
            <div className="slide-container">

              <div className="search-container">
                <p className='search-location'>Search</p>
                <div className='input-container'>
                  <input placeholder={'city & state or zip'} type="text" id="location-input" />
                  <button className='goBtn'>GO</button>
                </div>
              </div>
              
              <h4 className='current-location'><span><i class="fa-solid fa-location-arrow location-arrow"></i></span>
                USE
                CURRENT LOCATION</h4>
            </div>
          </ul>
          </div>

          <hr className='logo-hr hr2 hiddenMobile' />
        </div>

        {/* HAMBURGER MENU */}
        <div className="hamburger-menu">
          <input checked={checked} type="checkbox" id='menu__toggle' />
          <label style={styles.dropdownBtn} onClick={handleCheckbox} class="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className='menu__box'>
            <li><a className='menu menu__item' href='#'>MENU <i class="fa-solid fa-greater-than more-menu"></i></a></li> {/* Dropdown */}
            <li><a className='menu__item' href='#'>CATERING</a></li>
            <li><a className='menu__item' href='#'>GIFT CARDS</a></li>
            <li><a className='menu__item' href='#'>CAREERS</a></li>
            <li><a className='menu__item' href='#'>VIP</a></li>
            <li><a className='menu__item' href='#'>NUTRITION</a></li>
            <li><a className='menu__item' href='#'>LOCATIONS</a></li>
            <li><a className='menu__item' href='#'>CAREERS</a></li>
            <li><a className='menu__item' href='#'>ABOUT US</a></li>
            <li><a className='menu__item' href='#'>CONTACT</a></li>
          </ul>
        </div>
        {/* HAMBURGER MENU END */}
      </div>

      {/* NAV HIDDEN IN MOBILE */}
      <nav className='main-navList-container hiddenMobile'>
        <ul className='navList'>
          <li className='desktop-menu-item'>MENU</li>
          <li className='desktop-menu-item'>CATERING</li>
          <li className='desktop-menu-item'>GIFT CARDS</li>
          <li className='desktop-menu-item'>CAREERS</li>
          <li className='desktop-menu-item'>VIP</li>
          <li className='desktop-menu-item'>NUTRITION</li>
        </ul>
      </nav>
    </div>
  </div>
</header>
)
}

export default Header