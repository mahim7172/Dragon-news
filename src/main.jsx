import React from 'react'
import ReactDOM from 'react-dom/client'
import router from '../src/Router/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvaider from './Components/Context/AuthProvaider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </React.StrictMode>,
)
