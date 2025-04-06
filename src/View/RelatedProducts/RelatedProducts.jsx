import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/data'
import Item from '../Shop/Item'

const RelatedProducts = () => {
  return (
    <div className='related_products'>
    <h1>Related Products</h1>
      <hr />
    <div className="related_prodcts_items">
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })}
    </div>
    </div>
  )
}

export default RelatedProducts
