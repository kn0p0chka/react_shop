import BasketListCss from './BasketList.css'
import BasketItem from './BasketItem.js'
function BasketList({handleBasketShow, order, removeItemFromBasket,incQuantity,decQuantity }) {
  const totalPrice = order.reduce((sum, item)=>{
    return (sum += item.priceProduct * item.quantity)
  },0)

  return (

    <ul className="collection basketList">
      <li className="collection-item cart-l">Cart</li>
        {order.length ? (order.map((item)=>(<BasketItem decQuantity={decQuantity} incQuantity={incQuantity } removeItemFromBasket={removeItemFromBasket} key={item.id} {...item} />))) : (<li className="collection-item">Cart empty</li>) }

      <li className="collection-item cart-l">Загальна ціна:{totalPrice} грн</li>
      <li className="collection-item">
        <button className='btn btn-small'>check-out</button>
      </li>
      <i onClick={()=>{handleBasketShow()}} className="material-icons basket-close">close</i>
    </ul>

  )
}

export default BasketList