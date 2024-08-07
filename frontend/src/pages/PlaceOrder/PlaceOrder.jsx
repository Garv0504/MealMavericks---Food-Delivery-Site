import React, { useContext } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/StoreContext'


const PlaceOrder = () => {

  const {cartTotalAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="text" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Pincode'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone no.'/>
      </div>
      <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹ {cartTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Deivery Fee</p>
                <p>₹ {cartTotalAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹ {cartTotalAmount()===0?0:cartTotalAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/payment')}>Proceed To Payment</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
