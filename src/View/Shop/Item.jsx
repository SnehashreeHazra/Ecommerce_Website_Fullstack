import React from 'react'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_new_price">
          {props.new_price}
        </div>
        <div className="item_old_price">
          {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
