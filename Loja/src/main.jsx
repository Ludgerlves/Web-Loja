import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
const router = createBrowserRouter([
  {
  path: "/",
  element:<Cadastro />,
},
{
  path: "/",
  element: <Login />,
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
