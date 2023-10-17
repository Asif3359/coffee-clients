import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './pages/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './pages/UpdateCoffee/UpdateCoffee.jsx';
import AuthProviders from './Authprovider/AuthProviders.jsx';
import LogIn from './pages/LoginPage/LogIn.jsx';
import Register from './pages/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffe-shop-server-ebt87ghli-asif-ahammeds-projects.vercel.app/coffee'),
    children: [
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffe-shop-server-ebt87ghli-asif-ahammeds-projects.vercel.app/coffee/${params.id}`)
      },
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
