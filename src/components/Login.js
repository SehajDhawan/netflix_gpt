import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate our data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : '',
      isSignIn
    );

    setError(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setError(message);
          });

          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });

    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
    setError(null); // Clear any existing errors when toggling the form
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='logo'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
          <input ref={name} type='text' placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
        )}

        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />

        <input ref={password} type='password' placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />

        <p className='text-red-500 font-bold text-lg py-2'>{Error}</p>

        <button className='p-6 my-6 bg-red-700 w-full text-white rounded-lg cursor-pointer' onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
