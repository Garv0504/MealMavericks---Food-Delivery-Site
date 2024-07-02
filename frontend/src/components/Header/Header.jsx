import React from 'react'
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="back"></div>
        <img src={assets.header_img} alt="" />
        <div className="header-item">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the fined ingredients and culinary expretise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <a href="">View More</a>
        </div>
    </div>
  )
}

export default Header
