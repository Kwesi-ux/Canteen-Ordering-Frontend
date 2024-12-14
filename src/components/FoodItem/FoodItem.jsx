import React, { useContext, } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({food_id,food_name,food_price,food_description,food_image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    




  return (
    <div className='food-item'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={food_image} alt="" />
            {!cartItems[food_id]
                ?<img className='add' onClick={()=> addToCart(food_id,)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(food_id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[food_id]}</p>
                    <img onClick={()=>addToCart(food_id)} src={assets.add_icon_green} alt="" />
                    

                </div>


            }

        </div>
        <div className='food-item-info'>
            <div className="food-item-rating">
                <p>{food_name}</p>
                <img src={assets.rating_starts} alt="" />

            </div>
            <p className='food-item-desc'>{food_description}</p>
            <p className='food-item-price'>GHC{food_price}.00</p>


        </div>
      
    </div>
  )
}

export default FoodItem
