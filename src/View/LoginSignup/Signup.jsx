import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='signup_page'>
      <div className="signup_form">
        <p className='signup_txt'>Sign Up</p>
        <input className='signup_input' type="text" placeholder='Your Name' />
        <input className='signup_input' type="text" placeholder='Your Email' />
        <input className='signup_input' type="text" placeholder='Password' />
        <button className="continue_btn">
          Continue
        </button>
        <p className='already_have-acc'>Already have an account? <span>Login here</span></p>
       <div className='loginsignup_agree'>
       <input type="checkbox" />
       <p>By continuing, i agree to the terms of use & privacy policy</p>
       </div>
      </div>
    </div>  
  )
}

export default Signup
