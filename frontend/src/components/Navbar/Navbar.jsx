import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" className='logo'/> */}
      <h1>MealMavericks.</h1>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-links">
        <img src={assets.search_icon} />
        <div className="nav-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <a href="" className='sign'>Sign In</a>
      </div>
    </div>
  )
}

export default Navbar
