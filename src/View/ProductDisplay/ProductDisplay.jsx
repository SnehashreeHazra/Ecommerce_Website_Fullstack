import React from 'react'
import './ProductDisplay.css'
import starIcon from '../../assets/star_icon.png';
import starDullIcon from '../../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='product_display'>
      <div className="product_display_left">
        <div className="product_display_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_display_img">
          <img className='product_display_main_img' src={props.product.image} alt="" />
        </div>
      </div>
      <div className="product_display_right">
        <h1>{product.name}</h1>
        <div className="product_display_right_stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product_display_right_prices">
          <div className="product_display_right_price_old">${product.old_price}</div>
          <div className="product_display_right_price_new">${product.new_price}</div>
        </div>
        <div className="product_display_right_description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta optio alias illum molestias. Molestias similique repellat accusamus voluptate id. Voluptas?
        </div>
        <div className="product_display_right_size">
          <h1>Select Size</h1>
          <div className="right_size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="product_display_right-category">
          <span>Category: </span> Women, T-Shirt, Crop Top
        </p>
        <p className="product_display_right-category">
          <span>Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
