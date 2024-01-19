import cart from './Cart.css'
function Cart({quantity=0, handleBasketShow,}) {
  return (
    <div onClick={()=>{handleBasketShow()}} className="cart blue darken-4 white-text ">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span>{quantity}</span> : null}
    </div>
  )
}

export default Cart