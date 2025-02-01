import React, { useState } from 'react'
import './TourItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'


const TourItem = ({id,name,price,description,image}) => {

        const {CartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='tour-item container'>
        <div className="tour-item-img-container">
            <img className='tour-item-image' src={image} alt=""/>
            {!CartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className="tour-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{CartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>

            }
        </div>
        <div className="tour-item-info">
            <div className="tour-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="tour-item-desc">
                {description}
            </p>
            <p className="tour-item-price">
                ${price}
            </p>

        </div>
    </div>
  )
}

export default TourItem