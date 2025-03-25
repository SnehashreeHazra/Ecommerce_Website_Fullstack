import React from 'react'
import './Shop.css'
import Hero from './Hero'
import Item from './Item'
import Popular from './Popular'
import Offers from './Offers'
import NewCollections from './NewCollections'
import NewsLetter from './NewsLetter'

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  )
}

export default Shop
