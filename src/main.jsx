import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Update from './Components/Update/Update';
import Profile from './Components/Profile/Profile';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import EstateSection from './Components/EstateSection/EstateSection';
import EstateDetails from './Components/EstateDetails/EstateDetails';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/update",
        element: <Update></Update>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/estatesSection",
        element:<EstateSection></EstateSection>,
        loader: ()=>fetch('/estates.json')
        
      },
      {
        path:"/estateDetails/:id",
        loader:async()=> await fetch('/estates.json'),
        element:<EstateDetails></EstateDetails>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
