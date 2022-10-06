import logo from '../imgs/rosas-logo1.png'
import '../CSS/dropdown.css'

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


        {/* HAMBURGER MENU */}
        {/* <nav className="hamburger-mobile-container">
          <i class="fa-solid fa-bars"></i>
        </nav> */}
        <div className="hamburger-menu">
          <input type="checkbox" id='menu__toggle' />
          <label class="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className='menu__box'>
            <li><a className='menu__item' href='#'>MENU</a></li>
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

      </div>


      {/* HIDDEN IN MOBILE */}
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