import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import React, { useEffect } from 'react'
import Login from '../components/Login'
import Browse from '../components/Browse'
import { createBrowserRouter } from 'react-router-dom'

import { RouterProvider } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {addUser,removeUser} from '../utils/userSlice';
const Body = () => {
  const Dispatch=useDispatch();

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/Browse",
      element:<Browse/>
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}=user;

        Dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
      } else {
        // User is signed out
        Dispatch(removeUser());
        // ...
      }
    });
  },[])

  return (
    <div>
     <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body;
