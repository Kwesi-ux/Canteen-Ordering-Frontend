import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item.food_id] && cartItems[item.food_id] > 0) { // Check for valid cart items
                        return (
                            <div key={index}> {/* Add a unique key */}
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.food_image} alt={item.food_name} />
                                    <p>{item.food_name}</p>
                                    <p>GHC{item.food_price}.00</p>
                                    <p>{cartItems[item.food_id]}</p>
                                    <p>GHC{item.food_price * cartItems[item.food_id]}.00</p>
                                    <p
                                        onClick={() => removeFromCart(item.food_id)}
                                        className='cross'
                                    >
                                        x
                                    </p>
                                </div>
                                <hr />
                            </div>
                        );
                    } else {
                        return null; // Skip items not in the cart
                    }
                })}
            </div>
            <div className='cart-bottom'>
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
                    <button onClick={()=>navigate('/placeorder')}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
