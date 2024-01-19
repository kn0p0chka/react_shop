import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import GoodList from "./GoodList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Allert from "./Allert";
function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow]= useState(false)
  const [allert, setAllert] = useState("")


const closeAllert = ()=>{
  setAllert("")
}

  // console.log(order)

  const decQuantity = (orderId) =>{
    // console.log(orderId)
    const updateOrder = order.map((orderItem)=>{
      if(orderId===orderItem.id){
        const newQuantity = orderItem.quantity-1
        return {
          ...orderItem,
          quantity:newQuantity>=0 ? newQuantity : 0
        }
      }else{
        return orderItem
      }

    })
    setOrder(updateOrder)
  }

  const incQuantity = (orderId) =>{
    // setPlus(plus+1)
    // console.log(orderId)
    const updateOrder = order.map((orderItem)=>{
      if(orderId===orderItem.id){
        return {
          ...orderItem, 
          quantity:orderItem.quantity+1,
        }
      }else{
        return orderItem
      }
    })

    setOrder(updateOrder)

  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const handleItemShow = () => {
    setItemShow(!isItemShow)
  }

const removeItemFromBasket = (id) => {
    console.log(id)
    const newOrder = order.filter( (item) => item.id !== id)
    setOrder(newOrder)

  }

  const addToCart = (item)=>{
    //проверим, а есть ли этот товар в корзине

    const itemIndex = order.findIndex((orderItem)=>orderItem.id === item.id)

    if(itemIndex<0){
      //товара не было в корзине, в момент его добавления
      const newItem = {
        ...item,
        quantity:1,
      }

      setOrder([...order,newItem])
    }else{
      const newOrder = order.map((orderItem,index)=>{
        if(index === itemIndex){
          return{
            ...orderItem,
            quantity: orderItem.quantity+1
        }}else{
          return orderItem
        }})
        setOrder(newOrder)
    }
    
    setAllert(item.displayName)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) =>{ 
        data.shop && setGoods(data.shop)
        setLoading(false)
      });
  }, []);
  return (

    <main className="container">
      <Cart quantity = {order.length} handleBasketShow={handleBasketShow} />
      {loading ? (<Preloader/>)
      :(<GoodList addToCart={addToCart} goods={goods}></GoodList>)
      }
      {isBasketShow && (<BasketList decQuantity={decQuantity}  incQuantity={incQuantity } removeItemFromBasket={removeItemFromBasket} order={order} handleBasketShow={handleBasketShow}  />)}
      {allert && <Allert closeAllert={closeAllert} allert={allert} />}
     
    </main>

  );
}

export default Shop;
