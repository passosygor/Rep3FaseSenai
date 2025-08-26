import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

//react router

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: <Home></Home>,
  },
  {
    // path:"sobre",
    // Component:<Sobre></Sobre>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
    {/* <App /> */}
  </StrictMode>,
)
