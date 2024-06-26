
import Login from '../components/Login'
import Browse from '../components/Browse'
import { createBrowserRouter } from 'react-router-dom'

import { RouterProvider } from 'react-router-dom'
const Body = () => {
  

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



  return (
    <div>
     <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body;
