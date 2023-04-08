import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Review from './components/Order Review/Review';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('t-shirts.json')
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'review',
        element: <Review></Review>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
