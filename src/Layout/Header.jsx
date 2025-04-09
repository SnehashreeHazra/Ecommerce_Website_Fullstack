import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Header = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='header_wrapper'>
      <div className="header_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="header_menu">
        <li onClick={()=>{setMenu("shop")}}><NavLink to="/" style={{textDecoration:"none"}}>Shop</NavLink>{menu==="shop" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><NavLink to="/mens" style={{textDecoration:"none"}}>Men</NavLink>{menu==="mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><NavLink to="/womens" style={{textDecoration:"none"}}>Women</NavLink>{menu==="women" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><NavLink to="/kids" style={{textDecoration:"none"}}>Kids</NavLink>{menu==="kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="header_login_cart">
        <NavLink to="/login"><button>Login</button></NavLink>
        <NavLink to="/cart"><img src={cart_icon} alt="" /></NavLink>
        <div className="header_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Header
