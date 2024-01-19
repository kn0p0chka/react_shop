import React from 'react'
import BasketItemCss from './BasketItem.css'
import GoodsItem from './GoodsItem'


function BasketItem({displayName,removeItemFromBasket, id,quantity, priceProduct,incQuantity, decQuantity }) {


  return (
    <li className='colection-item'>
        <span className='collection-item__span'>{displayName}</span>
        <i onClick={()=>{decQuantity(id)}} className='material-icons btn-close'>remove</i>
        <span className='quantity'>x{quantity}</span>
        <i onClick={()=>{incQuantity(id)}} className='material-icons btn-add'>add</i>
        
        <span>= {priceProduct * quantity}</span>
        <i onClick={()=>{removeItemFromBasket(id)}} className="material-icons item-close right ">close</i>
    </li>
    
  )
}

export default BasketItem