import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore a wide variety of mouthwatering dishes specially crafted to satisfy your cravings and fuel your day. Whether you're in the mood for a hearty meal, a quick snack, or something sweet, our menu offers something for everyone. Indulge in flavors that bring comfort, energy, and joy to every bite. Your next favorite meal is just a click away!.</p>
      <div className='explore-menu-list'>
        {menu_list.map( (item,index)=>{
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
