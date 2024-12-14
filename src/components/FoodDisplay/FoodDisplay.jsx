import React, {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);


    
  return (
    <div className='food-display' id='food-display'>
        <h2>Top picks on our menu</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              
                return <FoodItem key={index} food_id={item.food_id} food_name={item.food_name} food_price={item.food_price} food_description={item.food_description} food_image={item.food_image} />
              
                

             })}

        </div>
      
    </div>
  )
}

export default FoodDisplay
