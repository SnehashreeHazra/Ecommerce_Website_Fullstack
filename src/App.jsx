import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import ShopCategory from './View/ShopCategory/ShopCategory'
import Product from './View/Product/Product.jsx'
import Cart from './View/Cart/Cart.jsx'
import Signup from './View/LoginSignup/Signup.jsx'
import Shop from './View/Shop/Shop.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory category="men" />} />
            <Route path='/womens' element={<ShopCategory category="women" />} />
            <Route path='/kids' element={<ShopCategory category="kid" />} />
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
