import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero_wrapper">
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero_latest_button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero
