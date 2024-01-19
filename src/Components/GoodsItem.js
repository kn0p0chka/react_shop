import GoodsItemCss from './Goodsitem.css'
function GoodsItem({mainId,displayName,displayDescription,price,displayAssets, addToCart}) {
let imageGoods = ""
displayAssets.forEach(element => imageGoods=element.full_background)
let priceProduct = price.regularPrice

  return (
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={imageGoods}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{displayName}</span>
<div>
      <p className='container-btn'><button className='btn btn-small' onClick={()=>addToCart({
        id: mainId, 
        displayName,
        priceProduct
      })} href="#">Buy it!</button>
      </p>
      <p className='price' > {priceProduct} </p></div>
     
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>{displayDescription}</p>
    </div>

  </div>
        
  )
}

export default GoodsItem