import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news_letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
