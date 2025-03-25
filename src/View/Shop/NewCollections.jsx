import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from './Item.jsx'

const NewCollections = () => {
  return (
    <div className='new_collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections_wrapper">
        {new_collections.map((item,i)=>{
          return <Item className="new_collection_item" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
