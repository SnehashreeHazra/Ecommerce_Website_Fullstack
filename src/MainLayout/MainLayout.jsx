import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
