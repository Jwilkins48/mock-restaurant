import logo from '../imgs/rosas-logo1.png'
import '../CSS/dropdown.css'
import { useState, useEffect } from 'react';
import dinners from '../imgs/_Dinners.png'
import individual from '../imgs/_individual_items.png'
import groupMeals from '../imgs/_group_meals.png'
import kids from '../imgs/_Kids4.png'
import breakfast from '../imgs/_breakfast.png'
import desserts from '../imgs/_Desserts.png'

function Header() {
const [checked, setChecked] = useState(false);
const [locationChecked, setLocationChecked] = useState(false);

const [menuOpen, setMenuOpen] = useState(false);
const [menuSideOpen, setMenuSideOpen] = useState(false);

const [navScroll, setNavScroll] = useState(false);

const styles = {
  dropdownNav:{
    top: checked ? '10px' : null,
    transitionDuration: '.35s',
  },
  dropdownBtn:{
    top: checked ? '32px' : null,
    transitionDuration: '.35s',
  }
}

const handleOnScroll = () => {
  console.log(window.scrollY)
  if (window.scrollY >= 30) {
    setNavScroll(true)
  } else {
    setNavScroll(false)
  }
}
useEffect(() => {
  handleOnScroll()
  // add event on scroll
  window.addEventListener("scroll", handleOnScroll)
})

const handleCheckbox = () => {
  setMenuSideOpen(false)
  setChecked(!checked)
}
// LOCATION DROPDOWN BTN
const handleButtonClick = () => {
  setLocationChecked(!locationChecked)
}

// SIDE MENU DROPDOWN BTN
const handleSideOpen = () => {
  setMenuSideOpen(!menuSideOpen)
}

return (
<header className='Header'>
  <div className="top-header-container">
    <nav className='top-header'>
      <ul className='top-navList hiddenMobile'>
        <li>ABOUT US</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  </div>

  <div id={navScroll ? 'navBar-scroll' : 'navBar-noScroll'} style={styles.dropdownNav} className="bottom-header-container">
    <div className="bottom-header-items">
      <a href='#Home' className="main-logo">
        <img className={navScroll ? 'logo logo-onScroll' : 'logo'} src={logo} alt='logo'></img>
      </a>

      <div className="mobile-rightSide">
        {/* LOCATIONS DROPDOWN START */}
        <button onClick={handleButtonClick} id='locationBtn'></button>

        <div id={navScroll ? 'navBar-scroll-location' : 'navBar-noScroll-location'} className="locations-hover-container">
          <label className='location-button' htmlFor="locationBtn"><i
            class="fa-solid fa-location-dot locationLogo"></i>
          </label>

          <div onMouseOver={()=> setLocationChecked(true)} onMouseLeave={() => setLocationChecked(false)}>

            <div className=" hiddenMobile location-label-container">
              <h3 className='locations-label'>LOCATIONS</h3>
              <i onClick={handleButtonClick} class="down-arrow fa-solid fa-sort-down"></i>
            </div>

            {/* LOCATIONS DROPDOWN CONTAINER */}
            <ul id={locationChecked ? 'location-pressed' : 'location-notPressed' } className={navScroll ? 'navBar-scroll-slide slide' : 'slide'}>
              <span className="hiddenMobile location_arrow_box"></span>
              <div className="slide-container">

                <div className="search-container">
                  <p className='search-location'>SEARCH</p>

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

        </div>

        {/* HAMBURGER MENU */}
        <div className="hamburger-menu">
          <input checked={checked}  type="checkbox" id='menu__toggle' />
          <button id={navScroll ? 'navBar-btn-scroll' : 'navBar-btn-noScroll'} onClick={handleCheckbox} style={styles.dropdownBtn} class="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </button>

          <ul className='menu__box'>
            <li><a onClick={handleSideOpen} className='menu menu__item' href='#'>MENU <i
                  class="fa-solid fa-greater-than more-menu"></i></a></li>
            {/* SIDE MENU DROPDOWN */}
            <div id={menuSideOpen ? 'menu-side-open' : 'menu-side-closed' } className="side-menu-dropdown">
              <div onClick={handleSideOpen} className='menuBackBtn'>
                <i class="fa-solid fa-less-than"></i>
                <h3>Menu</h3>
              </div>

              <ul className='side-list-menu'>
                <li className='side-menu-list'><a href='#'>
                    <figure><img src={dinners} alt="#" /></figure>
                  </a>DINNERS</li>

                <li className='side-menu-list individual'><a href='#'>
                    <figure><img src={individual} alt="#" /></figure>
                  </a>INDIVIDUAL ITEMS</li>

                <li className='side-menu-list'><a href='#'>
                    <figure><img src={groupMeals} alt="#" /></figure>
                  </a>FAMILY MEALS</li>

                <li className='side-menu-list'><a href='#'>
                    <figure><img src={kids} alt="#" /></figure>
                  </a>KIDS</li>

                <li className='side-menu-list'><a href='#'>
                    <figure><img src={breakfast} alt="#" /></figure>
                  </a>BREAKFAST</li>

                <li className='side-menu-list'><a href='#'>
                    <figure><img src={desserts} alt="#" /></figure>
                  </a>DESSERTS & DRINKS</li>
              </ul>

            </div>

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
          <div onMouseOver={()=> setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} className='dropdown'>
            <div className='desktop-menu-item menu'>MENU</div>
            {/* DROPDOWN */}
            <div onMouseOver={()=> setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)} id={menuOpen ? 'menu-open'
              : 'menu-notOpen' } className="menu-dropdown-content">
              <ul className='list-menu'>

                <li className='list-align'><a href='#'>
                    <figure><img src={dinners} alt="#" /></figure>
                  </a>DINNERS</li>

                <li className='list-align'><a href='#'>
                    <figure><img src={individual} alt="#" /></figure>
                  </a>INDIVIDUAL ITEMS</li>

                <li className='list-align'><a href='#'>
                    <figure><img src={groupMeals} alt="#" /></figure>
                  </a>FAMILY MEALS</li>

                <li className='list-align'><a href='#'>
                    <figure><img src={kids} alt="#" /></figure>
                  </a>KIDS</li>

                <li className='list-align'><a href='#'>
                    <figure><img src={breakfast} alt="#" /></figure>
                  </a>BREAKFAST</li>

                <li className='list-align'><a href='#'>
                    <figure><img src={desserts} alt="#" /></figure>
                  </a>DESSERTS & DRINKS</li>

              </ul>
            </div>
          </div>

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