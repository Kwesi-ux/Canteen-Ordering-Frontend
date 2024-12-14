import React, {useContext} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />


        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder='Location'/>
        <div className="multi-fields">
          <input type="text" placeholder='Phone' />
          <input type="text" placeholder='Any Information' />


        </div>

      </div>
      <div className="place-order-right">
      <div className='cart-total'>
                    <h2>Cart Tools</h2>
                    <div>
                    <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>GHC {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>GHC{getTotalCartAmount()===0?0:2}.00</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>GHC {getTotalCartAmount()===0?0:getTotalCartAmount()+2}.00</b>
                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder
