import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setSignIn]=useState(true);
  const toggleSignInForm=()=>{
    setSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img
      src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='logo'
      />
    </div>
    <form className='absolute p-12 bg-black w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-xl py-4'>{isSignIn?"Sign In" :"Sign Up"}</h1>

    {!isSignIn && (<input type='text' placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}

      <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>

      <input type='password' placeholder='Enter Password' className='p-4 my-4  w-full bg-gray-700'/>
      <button className='p-6 my-6 bg-red-700 w-full cursor-pointer'>{isSignIn?"Sign In" :"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignIn?"New to Netflix? Sign Up Now." :"Already Registered? Sign Up Now"}</p>
    </form>
    </div>
  )
}

export default Login
