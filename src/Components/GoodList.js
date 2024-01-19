import GoodsItem from "./GoodsItem"
function GoodList({goods = [], addToCart}) {

    if(!goods.length){
        return <h3>Nothing here</h3>
    }
  return (
    <div style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap', gap:'10px'}} className="goods">
        {
            goods.map((item)=>
                <GoodsItem addToCart={addToCart} key={item.mainId} {...item}></GoodsItem>
            )
        }
    </div>
  )
}

export default GoodList