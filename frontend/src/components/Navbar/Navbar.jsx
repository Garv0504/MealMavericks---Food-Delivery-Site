import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" className='logo'/> */}
      <Link to="/"><h1>MealMavericks.</h1></Link>
      <ul className="nav-menu">
        <Link to="/"><li>Home</li></Link>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-links">
        <img src={assets.search_icon} />
        <div className="nav-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <Link onClick={()=>setShowLogin(true)} className='sign'>Sign In</Link>
      </div>
    </div>
  )
}

export default Navbar
