import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import ShopCategory from './View/ShopCategory/ShopCategory'
import Product from './View/Product/Product.jsx'
import Cart from './View/Cart/Cart.jsx'
import Signup from './View/LoginSignup/Signup.jsx'
import Shop from './View/Shop/Shop.jsx'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='/product' element={<Product />} >
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Signup/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
