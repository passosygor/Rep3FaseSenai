import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import react router

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

//import toastify
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


import './index.css'
import Login from './pages/Login/Login'
import { AuthProvider } from './contexts/AuthContext'
import DashBoard from './pages/DashBoard/DashBoard'
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <DashBoard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
